import { useLocation, Link } from "react-router-dom";
import { CheckCircle, Home, BookOpen } from "lucide-react";

export default function ThankYouPage() {
    const location = useLocation();
    const courseName = location.state?.courseName || "Your selected course";

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle className="w-14 h-14 text-green-600" />
                </div>

                {/* Thank You Message */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Thank You for Enrolling!
                </h1>

                <p className="text-xl text-gray-600 mb-6">
                    Your enrollment for <span className="font-semibold text-gray-900">{courseName}</span> has been successfully submitted.
                </p>

                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h3>
                    <ul className="text-left text-gray-600 space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-blue-600 font-bold text-sm">1</span>
                            </span>
                            <span>Our team will review your enrollment</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-blue-600 font-bold text-sm">2</span>
                            </span>
                            <span>You'll receive a confirmation email within 24 hours</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-blue-600 font-bold text-sm">3</span>
                            </span>
                            <span>We'll contact you with course details and next steps</span>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <Link
                        to="/#courses"
                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                    >
                        <BookOpen className="w-5 h-5" />
                        Browse More Courses
                    </Link>
                </div>

                {/* Contact Info */}
                <p className="text-sm text-gray-500 mt-8">
                    Have questions? Contact us at{" "}
                    <a href="mailto:info@cloutech.in" className="text-blue-600 hover:underline">
                        info@cloutech.in
                    </a>
                </p>
            </div>
        </div>
    );
}
