import React, { useState, useEffect } from 'react';
import {
  Code,
  BookOpen,
  Users,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Globe,
  Database,
  Smartphone,
  Brain,
  Cloud,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming",
      duration: "4 weeks",
      level: "Beginner",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "React Development",
      description: "Build modern web applications with React",
      duration: "6 weeks",
      level: "Intermediate",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Database Design",
      description: "Learn SQL and database management",
      duration: "5 weeks",
      level: "Beginner",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications",
      duration: "8 weeks",
      level: "Advanced",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Machine Learning Basics",
      description: "Introduction to AI and ML concepts",
      duration: "10 weeks",
      level: "Intermediate",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Cloud Computing",
      description: "AWS, Azure, and cloud infrastructure",
      duration: "7 weeks",
      level: "Advanced",
      icon: <Cloud className="w-8 h-8" />
    }
  ];

  const featuredCourses = [
    {
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming with hands-on projects and real-world examples",
      duration: "4 weeks",
      level: "Beginner",
      icon: Code,
      students: "12,500+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "React Development",
      description: "Build modern, scalable web applications with React and learn industry best practices",
      duration: "6 weeks",
      level: "Intermediate",
      icon: Globe,
      students: "10,200+",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database Design",
      description: "Learn SQL, database management, and design patterns for efficient data storage",
      duration: "5 weeks",
      level: "Beginner",
      icon: Database,
      students: "8,700+",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Machine Learning Basics",
      description: "Introduction to AI and ML concepts with practical Python implementations",
      duration: "10 weeks",
      level: "Intermediate",
      icon: Brain,
      students: "6,400+",
      color: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCourses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCourses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const roadmaps = [
    {
      title: "Full-Stack Developer",
      description: "Complete pathway from frontend to backend development",
      duration: "6 months",
      courses: 8,
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Data Scientist",
      description: "Master data analysis, visualization, and machine learning",
      duration: "8 months",
      courses: 10,
      skills: ["Python", "Pandas", "Machine Learning", "SQL", "Visualization"]
    },
    {
      title: "DevOps Engineer",
      description: "Learn deployment, automation, and cloud infrastructure",
      duration: "5 months",
      courses: 7,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"]
    },
    {
      title: "Mobile Developer",
      description: "Build native and cross-platform mobile applications",
      duration: "7 months",
      courses: 9,
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "API Integration"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content: "ClouTech Academy transformed my career. The hands-on approach and industry-relevant curriculum helped me land my dream job.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Full-Stack Developer",
      content: "The learning roadmaps are incredibly well-structured. I went from zero programming knowledge to building full applications.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Data Analyst",
      content: "The instructors are industry experts who provide real-world insights. Best investment in my professional development.",
      rating: 5
    }
  ];

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
                <a href="#roadmaps" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Roadmaps</a>
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
              <a href="#roadmaps" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Roadmaps</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Carousel Hero Section */}
      <section id="home" className="pt-20 bg-black min-h-screen flex items-center">
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
      </section>

      {/* Free Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Free Courses</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Start your journey with our comprehensive free courses designed by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-600">{course.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Duration: {course.duration}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Enroll Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Roadmaps Section */}
      <section id="roadmaps" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Learning Roadmaps</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our structured learning paths to become a professional developer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmaps.map((roadmap, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{roadmap.title}</h3>
                <p className="text-gray-600 mb-6">{roadmap.description}</p>
                
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <span>📚 {roadmap.courses} courses</span>
                  <span>⏱️ {roadmap.duration}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {roadmap.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Start Learning Path
                </button>
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
                  <span>info@cloutechacademy.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <span>123 Tech Street, Silicon Valley, CA 94105</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your learning goals..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Send Message
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
                <li><a href="#courses" className="hover:text-blue-400 transition-colors">Free Courses</a></li>
                <li><a href="#roadmaps" className="hover:text-blue-400 transition-colors">Learning Paths</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>JavaScript Fundamentals</li>
                <li>React Development</li>
                <li>Full-Stack Development</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
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
    </div>
  );
}

export default App;