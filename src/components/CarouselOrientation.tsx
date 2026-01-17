import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Clock, Award, CheckCircle, BookOpen } from "lucide-react"
import { COURSES } from "@/data/courses"
import SyllabusModal from "@/components/SyllabusModal"

export default function FullPageCarousel() {
  return (
    <section id="home" className="w-full mt-16 bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {COURSES.map((course) => (
              <CarouselItem key={course.id} className="pl-4 basis-full">
                <div className="rounded-3xl shadow-xl">
                  <Card className="w-full rounded-3xl border-none overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-[420px]">
                      {/* Left Side - Gradient Background with Content */}
                      <div className={`bg-gradient-to-br ${course.gradient} p-6 sm:p-8 md:p-8 relative overflow-hidden h-full flex flex-col rounded-l-3xl`}>
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

                        <div className="relative z-10 flex flex-col h-full">
                          {/* Content area - takes available space */}
                          <div className="flex-1 space-y-3 overflow-hidden">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                              </span>
                              <span className="inline-flex items-center bg-white text-gray-900 px-3 py-1.5 rounded-full text-sm font-bold">
                                {course.level}
                              </span>
                              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                                <BookOpen className="w-4 h-4" />
                                {course.syllabus.length} Modules
                              </span>
                            </div>

                            {/* Course Name */}
                            <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-white leading-tight">
                              {course.name}
                            </h1>

                            {/* Tagline */}
                            {course.tagline && (
                              <p className="text-base text-white/80 font-medium line-clamp-1">
                                {course.tagline}
                              </p>
                            )}

                            {/* Description */}
                            <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                              {course.description}
                            </p>

                            {/* Certifications Preview */}
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-white/80 text-sm">
                                <Award className="w-4 h-4 text-yellow-300" />
                                <span className="font-semibold">Certifications Included:</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {course.certifications.slice(0, 2).map((cert, i) => (
                                  <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-2.5 py-1 rounded-lg text-xs border border-white/20">
                                    <CheckCircle className="w-3 h-3 text-green-300 flex-shrink-0" />
                                    <span className="truncate max-w-[200px]">{cert}</span>
                                  </span>
                                ))}
                                {course.certifications.length > 2 && (
                                  <span className="text-white/70 text-xs self-center">+{course.certifications.length - 2} more</span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* CTA Button - always visible at bottom */}
                          <div className="pt-4 flex-shrink-0">
                            <SyllabusModal course={course}>
                              <button className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                View Syllabus
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </button>
                            </SyllabusModal>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Image */}
                      <div className="hidden md:block bg-gray-100 p-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100/50" />
                        <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                          <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="left-2 md:-left-4 h-12 w-12 bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 shadow-lg" />
          <CarouselNext className="right-2 md:-right-4 h-12 w-12 bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 shadow-lg" />
        </Carousel>
      </div>
    </section>
  )
}