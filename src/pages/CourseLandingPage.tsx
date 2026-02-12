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
} from 'lucide-react';
import { COURSES, CourseData } from '@/data/courses';
import EnrollmentModal from '@/components/EnrollmentModal';
import { useSEO } from '@/hooks/useSEO';

// Marketing-friendly slug → course ID mapping
// Add new slugs here for the marketing team
const SLUG_MAP: Record<string, string> = {
  'sql-dbt': 'sql-snowflake-dbt-mastery',
  'gen-ai': 'gen-ai-engineer',
  'snowflake': 'snowflake-data-engineering',
  'microsoft-fabric': 'microsoft-fabric',
  'azure': 'azure-data-engineer-pro',
  'aws': 'aws-data-engineer-mastery',
};

function getCourseBySlug(slug: string): CourseData | undefined {
  const courseId = SLUG_MAP[slug] || slug;
  return COURSES.find((c) => c.id === courseId);
}

export default function CourseLandingPage() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Use URL param slug if available (/course/:slug), otherwise derive from pathname (/sql-dbt)
  const slug = paramSlug || location.pathname.replace('/', '');
  const course = slug ? getCourseBySlug(slug) : undefined;

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[85vh] flex items-center">
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
    </div>
  );
}
