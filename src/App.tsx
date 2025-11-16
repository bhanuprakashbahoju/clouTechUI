import React, { useState } from 'react';
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
  Cloud
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Tech Career with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> ClouTech Academy</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Transform your career with our comprehensive software courses. Learn from industry experts, work on real projects, and join thousands of successful graduates.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="ml-2 text-gray-600">50,000+ Students</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="ml-2 text-gray-600">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span className="ml-2 font-semibold text-gray-900">Live Coding Session</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div>$ npm start</div>
                  <div className="mt-2">✓ Server running on port 3000</div>
                  <div>✓ Hot reload enabled</div>
                  <div>✓ Ready for development!</div>
                </div>
              </div>
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