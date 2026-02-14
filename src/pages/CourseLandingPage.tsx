import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  Award,
  CheckCircle,
  BookOpen,
  Target,
  GraduationCap,
  ArrowLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Facebook,
  Linkedin,
  createLucideIcon,
} from 'lucide-react';
import { COURSES, CourseData } from '@/data/courses';
import EnrollmentModal from '@/components/EnrollmentModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

// Marketing-friendly slug → course ID mapping
// Add new slugs here for the marketing team
const SLUG_MAP: Record<string, string> = {
  'sql-dbt': 'sql-snowflake-dbt-mastery',
  'gen-ai': 'gen-ai-engineer',
  'snowflake': 'snowflake-data-engineering',
  'microsoft-fabric': 'microsoft-fabric',
  'azure': 'azure-data-engineer-pro',
  'aws': 'aws-data-engineer-mastery',
  'full-stack': 'full-stack-development',
  'devops': 'devops-engineering',
  'cybersecurity': 'cybersecurity-professional',
};

function getCourseBySlug(slug: string): CourseData | undefined {
  const courseId = SLUG_MAP[slug] || slug;
  return COURSES.find((c) => c.id === courseId);
}

export default function CourseLandingPage() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStickyEnroll, setShowStickyEnroll] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Use URL param slug if available (/course/:slug), otherwise derive from pathname (/sql-dbt)
  const slug = paramSlug || location.pathname.replace('/', '');
  const course = slug ? getCourseBySlug(slug) : undefined;

  // Show sticky bar when hero section scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyEnroll(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [course]);

  // Dynamic SEO for each course page
  useSEO(
    course
      ? {
          title: `${course.name} — ${course.duration} Training`,
          description: course.description,
        }
      : {}
  );

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img
                src="/ChatGPT_Image_Nov_15__2025__01_52_33_PM-removebg-preview (1).png"
                alt="ClouTech Academy Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">ClouTech Academy</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="/#courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Courses</a>
                <a href="/#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-900 font-medium">Home</a>
              <a href="/#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</a>
              <a href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image */}
        <img
          src={course.image}
          alt={course.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient mask — stronger on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to ClouTech Academy
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                {course.syllabus.length} Modules
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
                {course.level}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {course.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              {course.tagline}
            </p>
            <p className="text-lg text-white/75 mb-10 leading-relaxed">
              {course.description}
            </p>

            <EnrollmentModal course={course}>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Enroll Now
                <ChevronRight className="w-5 h-5" />
              </button>
            </EnrollmentModal>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            What You'll Learn
          </h2>
          <p className="text-gray-600 mb-8">Skills and outcomes you'll gain from this course.</p>

          <div className="grid md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Prerequisites */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Target className="w-8 h-8 text-orange-500" />
              Prerequisites
            </h2>
            <p className="text-gray-600 mb-8">What you should know before starting.</p>

            <div className="flex flex-wrap gap-4">
              {course.prerequisites.map((prereq, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-200 text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  {prereq}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-500" />
            Course Syllabus
          </h2>
          <p className="text-gray-600 mb-8">Detailed week-by-week breakdown of the curriculum.</p>

          <div className="space-y-4">
            {course.syllabus.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className={`w-11 h-11 rounded-full bg-gradient-to-r ${course.gradient} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    W{module.week}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg">{module.title}</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-[60px]">
                  {module.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              Certifications
            </h2>
            <p className="text-gray-600 mb-8">Credentials you'll earn upon completion.</p>

            <div className="flex flex-wrap gap-3">
              {course.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-yellow-50 text-yellow-800 px-5 py-3 rounded-xl border border-yellow-200 text-sm font-medium"
                >
                  <Award className="w-4 h-4 text-yellow-600" />
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className={`bg-gradient-to-r ${course.gradient} text-white`}>
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join our {course.duration} {course.name} program and transform your career.
            </p>
            <EnrollmentModal course={course}>
              <button className="px-10 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Enroll Now — {course.duration} Program
              </button>
            </EnrollmentModal>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/ChatGPT_Image_Nov_15__2025__01_52_33_PM-removebg-preview (1).png"
                  alt="ClouTech Academy Logo"
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-bold">ClouTech Academy</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of developers with world-class education and hands-on training.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/#courses" className="hover:text-blue-400 transition-colors">Our Courses</a></li>
                <li><a href="/#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">cloutech.academy@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">+91 9640 111 235</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">3rd Floor, GLR Complex, Ragavendra Nagar, Kondapur, Hyderabad - 500084</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                  <Facebook className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 group">
                  <XIcon className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ClouTech Academy. All rights reserved. Empowering developers worldwide.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Enroll Now Button */}
      {showStickyEnroll && course && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-24 sm:bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none"
        >
          <EnrollmentModal course={course}>
            <button className={`pointer-events-auto bg-gradient-to-r ${course.gradient} text-white px-14 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg`}>
              Enroll Now
              <ChevronRight className="w-6 h-6" />
            </button>
          </EnrollmentModal>
        </motion.div>
      )}

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
