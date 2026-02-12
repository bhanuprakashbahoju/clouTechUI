// Admin dashboard types

export interface ClassData {
  id: string;
  courseId: string;
  courseName: string;
  batchName: string;
  startDate: string;
  endDate: string;
  timing: string;
  instructor: string;
  maxStudents: number;
  enrolledStudents: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface EnrollmentStats {
  totalCourses: number;
  totalEnrollments: number;
  activeClasses: number;
  pendingReviews: number;
}

export interface StudentEnrollment {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  courseName: string;
  enrollmentDate: string;
  status: 'pending' | 'confirmed' | 'completed';
}
