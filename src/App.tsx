import { useState } from 'react';
import { insertContactMessage } from '@/hooks/useSupabase';
import { useSEO } from '@/hooks/useSEO';
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Clock,
  BookOpen,
  Award,
  Facebook,
  Linkedin,
  createLucideIcon,
} from 'lucide-react';

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

import FullPageCarousel from '@/components/CarouselOrientation';
import { COURSES } from '@/data/courses';
import SyllabusModal from '@/components/SyllabusModal';
import WhatsAppButton from '@/components/WhatsAppButton';


function App() {
  useSEO(); // Uses default title & description for homepage
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await insertContactMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setFormData({ name: '', email: '', message: '' });
      setContactSuccess(true);
      setTimeout(() => setContactSuccess(false), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      setContactSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/ChatGPT_Image_Nov_15__2025__01_52_33_PM-removebg-preview (1).png"
                alt="ClouTech Academy Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">ClouTech Academy</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Courses</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
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
              <a href="#home" className="block px-3 py-2 text-gray-900 font-medium">Home</a>
              <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Courses</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>


      < FullPageCarousel />

      {/* Carousel Hero Section */}
      {/* <section id="home" className="pt-20 bg-black min-h-screen flex items-center">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white mx-4 sm:mx-6 lg:mx-8">
            <div className="relative h-[600px]">
              {featuredCourses.map((course, index) => {
                const Icon = course.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className={`h-full bg-gradient-to-br ${course.color} p-8 md:p-16 flex flex-col justify-between relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full -mr-48 -mt-48"></div>
                      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white bg-opacity-5 rounded-full -ml-40 -mb-40"></div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6">
                            <Icon className="w-16 h-16 text-white" />
                          </div>
                          <span className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-bold tracking-wide">
                            {course.level}
                          </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                          {course.title}
                        </h1>

                        <p className="text-white text-opacity-90 text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl">
                          {course.description}
                        </p>
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                          <div className="flex items-center space-x-8 text-white">
                            <div className="flex items-center">
                              <Users className="w-6 h-6 mr-3" />
                              <div>
                                <div className="text-sm opacity-75">Students Enrolled</div>
                                <span className="font-bold text-xl">{course.students}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="w-6 h-6 mr-3" />
                              <div>
                                <div className="text-sm opacity-75">Course Duration</div>
                                <span className="font-bold text-xl">{course.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center shadow-2xl">
                          Enroll Free
                          <ArrowRight className="ml-3 h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-200 z-20 hidden md:flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-200 z-20 hidden md:flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
              {featuredCourses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'bg-white w-10 h-3'
                      : 'bg-white bg-opacity-50 w-3 h-3 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}



      {/* Our Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Courses</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed by industry experts to accelerate your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                {/* Course Header with Gradient - Fixed Height */}
                <div className={`bg-gradient-to-r ${course.gradient} p-6 min-h-[140px]`}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center bg-white text-gray-900 px-2.5 py-1 rounded-full text-xs font-bold">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{course.name}</h3>
                  <p className="text-white/80 text-sm line-clamp-1">{course.tagline}</p>
                </div>

                {/* Course Content - Flex Grow */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.syllabus.length} Modules
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {course.certifications.length} Certs
                    </span>
                  </div>

                  {/* Certifications Preview - Fixed Height */}
                  <div className="mb-4 min-h-[32px]">
                    <div className="flex flex-wrap gap-1">
                      {course.certifications.slice(0, 2).map((cert, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs truncate max-w-[140px]">
                          {cert}
                        </span>
                      ))}
                      {course.certifications.length > 2 && (
                        <span className="text-gray-500 text-xs self-center">+{course.certifications.length - 2}</span>
                      )}
                    </div>
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* CTA Button - Always at bottom */}
                  <SyllabusModal course={course}>
                    <button className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 mt-auto`}>
                      View Syllabus
                    </button>
                  </SyllabusModal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to start your coding journey? Contact us today and let's discuss your learning goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <span>cloutech.academy@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <span>+91 9640 111 235</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <span>3rd Floor, GLR Complex, Ragavendra Nagar, Kondapur, Hyderabad - 500084</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

              {contactSuccess && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                  <p className="text-green-300 text-sm">✓ Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form
                onSubmit={handleContactSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your learning goals..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || contactSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200
            ${isFormValid && !contactSubmitting
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      : "bg-gray-600 text-gray-300 cursor-not-allowed"
                    }`}
                >
                  {contactSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
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
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#courses" className="hover:text-blue-400 transition-colors">Our Courses</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-gray-400">
                {COURSES.slice(0, 4).map((course) => (
                  <li key={course.id} className="hover:text-blue-400 transition-colors cursor-pointer">
                    {course.name}
                  </li>
                ))}
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

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;