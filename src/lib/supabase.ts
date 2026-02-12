import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Enrollment {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  course_name: string;
  status: 'pending' | 'confirmed' | 'completed';
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface ClassRecord {
  id: string;
  course_name: string;
  batch_name: string;
  start_date: string;
  timing: string;
  enrolled_students: number;
  max_students: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  created_at: string;
}
