import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Clock, Award, CheckCircle, BookOpen, Target, GraduationCap } from "lucide-react"
import { CourseData } from "@/data/courses"
import EnrollmentModal from "@/components/EnrollmentModal"

interface SyllabusModalProps {
    course: CourseData;
    children: React.ReactNode;
}

export default function SyllabusModal({ course, children }: SyllabusModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${course.gradient}`} />
                        {course.name}
                    </DialogTitle>
                    <p className="text-gray-600 mt-1">{course.tagline}</p>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Course Info Badges */}
                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                        </span>
                        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium">
                            <BookOpen className="w-4 h-4" />
                            {course.syllabus.length} Modules
                        </span>
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                            }`}>
                            {course.level}
                        </span>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-gray-700 leading-relaxed">{course.description}</p>
                    </div>

                    {/* Prerequisites */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-orange-500" />
                            Prerequisites
                        </h3>
                        <ul className="space-y-2">
                            {course.prerequisites.map((prereq, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span>{prereq}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-blue-500" />
                            What You'll Learn
                        </h3>
                        <ul className="space-y-2">
                            {course.outcomes.map((outcome, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Syllabus */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-purple-500" />
                            Course Syllabus
                        </h3>
                        <div className="space-y-4">
                            {course.syllabus.map((module, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className={`w-10 h-10 rounded-full bg-gradient-to-r ${course.gradient} text-white flex items-center justify-center font-bold text-sm`}>
                                            {module.week}
                                        </span>
                                        <h4 className="font-semibold text-gray-900">{module.title}</h4>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-13">
                                        {module.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                                                <span className="text-blue-500 mt-1">•</span>
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-500" />
                            Certifications Included
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {course.certifications.map((cert, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-3 py-2 rounded-lg text-sm border border-yellow-200"
                                >
                                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-200">
                        <EnrollmentModal course={course}>
                            <button className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300`}>
                                Enroll Now
                            </button>
                        </EnrollmentModal>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
