import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  Calendar,
  Clock,
  Award,
  Mail,
} from 'lucide-react';
import { COURSES } from '@/data/courses';
import StatsCard from '@/components/StatsCard';
import DataTable from '@/components/DataTable';
import { SpotlightCard } from '@/components/ui/aceternity';
import { supabase } from '@/lib/supabase';
import { useStats, useClasses, useEnrollments, useContactMessages, updateEnrollmentStatus, updateMessageReadStatus } from '@/hooks/useSupabase';

// Navigation items
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: GraduationCap, label: 'Classes', id: 'classes' },
  { icon: Users, label: 'Students', id: 'students' },
  { icon: Mail, label: 'Messages', id: 'messages' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];



export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Supabase data hooks
  const { stats, loading: statsLoading } = useStats();
  const { classes, loading: classesLoading } = useClasses();
  const { enrollments, loading: enrollmentsLoading, refetch: refetchEnrollments } = useEnrollments();
  const { messages, loading: messagesLoading, refetch: refetchMessages } = useContactMessages();

  // Transform messages for table
  const messagesTableData = messages.map((msg) => ({
    id: msg.id,
    name: msg.name,
    email: msg.email,
    message: msg.message.length > 60 ? msg.message.slice(0, 60) + '...' : msg.message,
    fullMessage: msg.message,
    isRead: msg.is_read,
    date: new Date(msg.created_at).toLocaleDateString(),
  }));

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  // Transform classes for table
  const classesTableData = classes.map((cls) => ({
    id: cls.id,
    courseName: cls.course_name,
    batchName: cls.batch_name,
    startDate: cls.start_date,
    timing: cls.timing,
    enrolledStudents: cls.enrolled_students,
    status: cls.status as 'upcoming' | 'ongoing' | 'completed',
  }));

  // Transform enrollments for table
  const enrollmentsTableData = enrollments.map((e) => ({
    id: e.id,
    studentName: e.full_name,
    email: e.email,
    phone: e.phone,
    courseName: e.course_name,
    enrollmentDate: new Date(e.created_at).toLocaleDateString(),
    status: e.status,
  }));

  // Transform courses for table display
  const coursesTableData = COURSES.map((course) => ({
    id: course.id,
    name: course.name,
    duration: course.duration,
    level: course.level,
    modules: course.syllabus.length,
    certifications: course.certifications.length,
  }));

  const courseColumns = [
    { key: 'name', label: 'Course Name', sortable: true },
    { key: 'duration', label: 'Duration', sortable: true },
    {
      key: 'level',
      label: 'Level',
      render: (item: typeof coursesTableData[0]) => (
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium border ${item.level === 'Beginner'
            ? 'border-gray-400 text-gray-600'
            : item.level === 'Intermediate'
              ? 'border-gray-500 text-gray-700'
              : 'border-black text-black'
            }`}
        >
          {item.level}
        </span>
      ),
    },
    { key: 'modules', label: 'Modules', sortable: true },
    { key: 'certifications', label: 'Certifications', sortable: true },
  ];

  const classColumns = [
    { key: 'courseName', label: 'Course', sortable: true },
    { key: 'batchName', label: 'Batch', sortable: true },
    { key: 'startDate', label: 'Start Date', sortable: true },
    { key: 'timing', label: 'Timing' },
    { key: 'enrolledStudents', label: 'Students', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (item: typeof classesTableData[0]) => (
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.status === 'upcoming'
            ? 'bg-gray-100 text-gray-800 border border-gray-300'
            : item.status === 'ongoing'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-500'
            }`}
        >
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
      ),
    },
  ];

  const enrollmentColumns = [
    { key: 'studentName', label: 'Student', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'phone', label: 'Phone' },
    { key: 'courseName', label: 'Course', sortable: true },
    { key: 'enrollmentDate', label: 'Date', sortable: true },
    {
      key: 'status',
      label: 'Status',
      render: (item: typeof enrollmentsTableData[0]) => {
        const nextStatus = item.status === 'pending' ? 'confirmed' : item.status === 'confirmed' ? 'completed' : 'pending';
        return (
          <button
            onClick={async (e) => {
              e.stopPropagation();
              try {
                await updateEnrollmentStatus(item.id, nextStatus);
                refetchEnrollments();
              } catch (err) {
                console.error('Failed to update status:', err);
              }
            }}
            title={`Click to change to ${nextStatus}`}
            className={`px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${item.status === 'pending'
              ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
              : item.status === 'confirmed'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-gray-200 text-gray-500'
              }`}
          >
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </button>
        );
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="relative z-20 h-screen sticky top-0 flex flex-col bg-black"
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between border-b border-gray-800">
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h1 className="font-bold text-white">ClouTech</h1>
                  <p className="text-xs text-gray-400">Admin Panel</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <AnimatePresence mode="wait">
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <AnimatePresence mode="wait">
              {sidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="font-medium whitespace-nowrap"
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-8 overflow-auto bg-gray-50">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Dashboard Section */}
          {activeSection === 'dashboard' && (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-black mb-2">Dashboard Overview</h1>
                  <p className="text-gray-600">Welcome back! Here's what's happening at ClouTech Academy.</p>
                </div>
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Quick Actions
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                  icon={BookOpen}
                  label="Total Courses"
                  value={statsLoading ? '...' : stats.totalCourses}
                />
                <StatsCard
                  icon={Users}
                  label="Total Enrollments"
                  value={statsLoading ? '...' : stats.totalEnrollments}
                />
                <StatsCard
                  icon={Calendar}
                  label="Active Classes"
                  value={statsLoading ? '...' : stats.activeClasses}
                />
                <StatsCard
                  icon={Mail}
                  label="Pending Enrollments"
                  value={statsLoading ? '...' : stats.pendingEnrollments}
                />
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Upcoming Classes */}
                <SpotlightCard className="col-span-2 p-6">
                  <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    Upcoming Classes
                  </h2>
                  <div className="space-y-4">
                    {classesLoading ? (
                      <p className="text-gray-500 text-sm">Loading classes...</p>
                    ) : classesTableData.filter((c) => c.status === 'upcoming' || c.status === 'ongoing').length === 0 ? (
                      <p className="text-gray-500 text-sm">No upcoming or ongoing classes.</p>
                    ) : (
                      classesTableData
                        .filter((c) => c.status === 'upcoming' || c.status === 'ongoing')
                        .map((cls) => (
                          <div
                            key={cls.id}
                            className="flex items-center justify-between p-4 bg-gray-100 rounded-xl border border-gray-200"
                          >
                            <div>
                              <p className="font-medium text-black">{cls.courseName}</p>
                              <p className="text-sm text-gray-500">{cls.batchName} • {cls.timing}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">{cls.startDate}</p>
                              <span
                                className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${cls.status === 'upcoming'
                                  ? 'bg-gray-200 text-gray-700'
                                  : 'bg-black text-white'
                                  }`}
                              >
                                {cls.status === 'upcoming' ? 'Starting Soon' : 'In Progress'}
                              </span>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </SpotlightCard>

                {/* Quick Stats */}
                <SpotlightCard className="p-6">
                  <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gray-600" />
                    Top Courses
                  </h2>
                  <div className="space-y-4">
                    {COURSES.slice(0, 4).map((course, index) => (
                      <div key={course.id} className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-bold rounded-lg bg-black text-white">
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-black truncate">{course.name}</p>
                          <p className="text-xs text-gray-500">{course.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </div>
          )}

          {/* Courses Section */}
          {activeSection === 'courses' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-black mb-2">Course Management</h1>
                  <p className="text-gray-600">Create, edit and manage your courses.</p>
                </div>
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Course
                </button>
              </div>

              <DataTable
                data={coursesTableData}
                columns={courseColumns}
                onEdit={(item) => console.log('Edit:', item)}
                onDelete={(item) => console.log('Delete:', item)}
                onView={(item) => console.log('View:', item)}
                searchPlaceholder="Search courses..."
              />
            </div>
          )}

          {/* Classes Section */}
          {activeSection === 'classes' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-black mb-2">Class Management</h1>
                  <p className="text-gray-600">Schedule and manage your batches.</p>
                </div>
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Create Class
                </button>
              </div>

              {classesLoading ? (
                <p className="text-gray-500">Loading classes...</p>
              ) : (
                <DataTable
                  data={classesTableData}
                  columns={classColumns}
                  onEdit={(item) => console.log('Edit:', item)}
                  onDelete={(item) => console.log('Delete:', item)}
                  onView={(item) => console.log('View:', item)}
                  searchPlaceholder="Search classes..."
                />
              )}
            </div>
          )}

          {/* Students / Enrollments Section */}
          {activeSection === 'students' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-black mb-2">Enrollments</h1>
                  <p className="text-gray-600">View and manage student enrollments.</p>
                </div>
              </div>

              {enrollmentsLoading ? (
                <p className="text-gray-500">Loading enrollments...</p>
              ) : enrollmentsTableData.length === 0 ? (
                <SpotlightCard className="p-12 text-center">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">No Enrollments Yet</h3>
                  <p className="text-gray-500">Enrollments will appear here when students sign up through the website.</p>
                </SpotlightCard>
              ) : (
                <DataTable
                  data={enrollmentsTableData}
                  columns={enrollmentColumns}
                  onView={(item) => console.log('View:', item)}
                  searchPlaceholder="Search enrollments..."
                />
              )}
            </div>
          )}

          {/* Messages Section */}
          {activeSection === 'messages' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">Contact Messages</h1>
                <p className="text-gray-600">Messages received from the contact form on the website.</p>
              </div>

              {messagesLoading ? (
                <p className="text-gray-500">Loading messages...</p>
              ) : messagesTableData.length === 0 ? (
                <SpotlightCard className="p-12 text-center">
                  <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">No Messages Yet</h3>
                  <p className="text-gray-500">Messages will appear here when visitors use the contact form.</p>
                </SpotlightCard>
              ) : (
                <DataTable
                  data={messagesTableData}
                  columns={[
                    { key: 'name', label: 'Name', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'message', label: 'Message' },
                    { key: 'date', label: 'Date', sortable: true },
                    {
                      key: 'isRead',
                      label: 'Status',
                      render: (item: typeof messagesTableData[0]) => (
                        <button
                          onClick={async (e) => {
                            e.stopPropagation();
                            try {
                              await updateMessageReadStatus(item.id, !item.isRead);
                              refetchMessages();
                            } catch (err) {
                              console.error('Failed to update message status:', err);
                            }
                          }}
                          title={item.isRead ? 'Mark as unread' : 'Mark as read'}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${
                            item.isRead
                              ? 'bg-gray-200 text-gray-500'
                              : 'bg-black text-white'
                          }`}
                        >
                          {item.isRead ? 'Read' : 'New'}
                        </button>
                      ),
                    },
                  ]}
                  onView={(item) => console.log('View:', item)}
                  searchPlaceholder="Search messages..."
                />
              )}
            </div>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">Settings</h1>
                <p className="text-gray-600">Configure your admin preferences.</p>
              </div>

              <SpotlightCard className="p-12 text-center">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Coming Soon</h3>
                <p className="text-gray-500">Settings configuration is being developed.</p>
              </SpotlightCard>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
