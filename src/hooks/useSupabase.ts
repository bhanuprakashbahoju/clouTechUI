import { useState, useEffect } from 'react';
import { supabase, Enrollment, ContactMessage, ClassRecord } from '@/lib/supabase';
import { COURSES } from '@/data/courses';

// Hook to fetch enrollments
export function useEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEnrollments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setEnrollments(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  return { enrollments, loading, error, refetch: fetchEnrollments };
}

// Hook to fetch classes
export function useClasses() {
  const [classes, setClasses] = useState<ClassRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClasses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('classes')
      .select('*')
      .order('start_date', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setClasses(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return { classes, loading, error, refetch: fetchClasses };
}

// Hook to fetch contact messages
export function useContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return { messages, loading, error, refetch: fetchMessages };
}

// Hook to get dashboard stats
export function useStats() {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalEnrollments: 0,
    activeClasses: 0,
    pendingEnrollments: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);

      const [enrollmentsRes, classesRes, pendingRes] = await Promise.all([
        supabase.from('enrollments').select('id', { count: 'exact', head: true }),
        supabase.from('classes').select('id', { count: 'exact', head: true }).eq('status', 'ongoing'),
        supabase.from('enrollments').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
      ]);

      setStats({
        totalCourses: COURSES.length,
        totalEnrollments: enrollmentsRes.count || 0,
        activeClasses: classesRes.count || 0,
        pendingEnrollments: pendingRes.count || 0,
      });
      setLoading(false);
    }

    fetchStats();
  }, []);

  return { stats, loading };
}

// Insert an enrollment
export async function insertEnrollment(data: {
  full_name: string;
  email: string;
  phone: string;
  course_name: string;
}) {
  const { error } = await supabase.from('enrollments').insert([data]);
  if (error) throw error;
}

// Insert a contact message
export async function insertContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { error } = await supabase.from('contact_messages').insert([data]);
  if (error) throw error;
}

// Insert a class
export async function insertClass(data: {
  course_name: string;
  batch_name: string;
  start_date: string;
  timing: string;
  max_students?: number;
}) {
  const { error } = await supabase.from('classes').insert([data]);
  if (error) throw error;
}

// Update a class
export async function updateClass(id: string, data: Partial<ClassRecord>) {
  const { error } = await supabase.from('classes').update(data).eq('id', id);
  if (error) throw error;
}

// Update enrollment status (pending → confirmed → completed)
export async function updateEnrollmentStatus(
  id: string,
  status: 'pending' | 'confirmed' | 'completed'
) {
  const { error } = await supabase
    .from('enrollments')
    .update({ status })
    .eq('id', id);
  if (error) throw error;
}

// Toggle message read status
export async function updateMessageReadStatus(id: string, isRead: boolean) {
  const { error } = await supabase
    .from('contact_messages')
    .update({ is_read: isRead })
    .eq('id', id);
  if (error) throw error;
}
