import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { User, Mail, Phone } from "lucide-react";
import { CourseData } from "@/data/courses";
import { insertEnrollment } from "@/hooks/useSupabase";

interface EnrollmentModalProps {
    course: CourseData;
    children: React.ReactNode;
}

export default function EnrollmentModal({ course, children }: EnrollmentModalProps) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Save to Database
            await insertEnrollment({
                full_name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                course_name: course.name,
            });

            // 2. Trigger Email Notification (Edge Function)
            // We use a separate fetch or supabase.functions.invoke
            // Since we might not have the functions client configured globally, let's use fetch if possible or the client
            // But standard way is supabase.functions.invoke if we have the client authenticated.
            // Let's import supabase client and use it.
            
            /* 
               NOTE: To use this in production, you must have the Edge Function deployed.
               If running locally without the function running, this part might fail or needs to be skipped.
               We'll wrap it in a try-catch so it doesn't block the user flow if email service is down.
            */
            try {
                const { supabase } = await import('@/lib/supabase');
                await supabase.functions.invoke('enrollment-notification', {
                    body: {
                        full_name: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        course_name: course.name,
                    },
                });
            } catch (emailError) {
                console.warn("Failed to send email notification:", emailError);
                // We don't stop the flow here, as the enrollment is already saved.
            }

            setIsOpen(false);
            setFormData({ fullName: "", email: "", phone: "" });
            navigate("/thank-you", { state: { courseName: course.name } });
        } catch (error) {
            console.error("Enrollment error:", error);
            // Ideally show an error message to the user here
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isFormValid = formData.fullName.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.phone.trim() !== '';

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-5">
                <DialogHeader className="mb-2">
                    <DialogTitle className="text-xl font-bold text-gray-900">
                        Enroll Now
                    </DialogTitle>
                    <p className="text-sm text-gray-600 mt-1">
                        Complete the form below to enroll in <span className="font-semibold text-gray-900">{course.name}</span>
                    </p>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-3 mt-2">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Your full name"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className={`w-full py-2.5 rounded-lg font-bold text-base transition-all duration-300 ${isFormValid && !isSubmitting
                                ? `bg-gradient-to-r ${course.gradient} text-white hover:shadow-lg`
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                        </button>
                    </div>

                    <p className="text-[10px] text-gray-500 text-center">
                        By enrolling, you agree to our terms and conditions.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}
