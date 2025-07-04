import React from 'react'
import { BookOpenIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react'
export const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden"
    >
      {/* Blue decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-10"></div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-blue-800 max-w-2xl mx-auto">
            Passionate software engineering student with a focus on building
            innovative solutions and continuously expanding my technical
            expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - About Text */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-8 rounded-2xl shadow-lg border border-blue-200 w-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4 border-b border-blue-400 pb-2">
                  My Journey
                </h3>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  As an undergraduate in Software Engineering, I have developed
                  a foundation in programming and problem-solving.
                </p>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  I have gained practical experience through academic group
                  projects, collaborating with peers to deliver software
                  solutions.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  I am eager to apply my skills in real-world projects and
                  continue growing as a software developer.
                </p>
              </div>
            </div>
          </div>
          {/* Right Side - Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Education */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-200 transform transition-all duration-300 hover:shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-inner">
                  <GraduationCapIcon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">
                    Education
                  </h3>
                  <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <p className="text-blue-800 leading-relaxed">
                    BSc (Hons) in Information Technology, specializing in
                    Software Engineering from SLIIT
                  </p>
                  <p className="text-blue-600 font-medium mt-2">
                    2023 - Present
                  </p>
                </div>
              </div>
            </div>
            {/* Courses */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200 transform transition-all duration-300 hover:shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center shadow-inner">
                  <BriefcaseIcon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">
                    Courses
                  </h3>
                  <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span className="text-blue-800">
                        Diploma in ICT at ESOFT Metro Campus (2023–2024)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span className="text-blue-800">
                        Diploma in English at Sabaragamuwa University Sri Lanka
                        (2022)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Certifications */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-200 transform transition-all duration-300 hover:shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-inner">
                  <BookOpenIcon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">
                    Certifications
                  </h3>
                  <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span className="text-blue-800">
                        Certificate in C Programming
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></span>
                      <span className="text-blue-800">Sololearn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
