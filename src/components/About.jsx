import React from 'react'
import { BookOpenIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react'
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              As an undergraduate in Software Engineering, I
              have developed a foundation in programming
              and problem-solving.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I have gained practical
              experience through academic group projects,
              collaborating with peers to deliver software
              solutions.
            </p>
            <p className="text-lg text-gray-600">
              I am eager to apply my skills in real
              world projects and continue growing as a
              software developer.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <BriefcaseIcon className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Courses 
                </h3>
                <p className="text-gray-600 mt-2">
                  Diploma in ICT in ESOFT Metro Campus
                  (2023-2024)
                  <br />
                  Diploma in English at Sabaragamuwa University
                  Sri Lanka(2022)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <GraduationCapIcon className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Education
                </h3>
                <p className="text-gray-600 mt-2">
                   BSc (Hons) in Information Technology,specializing in Software
                   Engineering from SLIIT
                  <br />
                   
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <BookOpenIcon className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Certifications
                </h3>
                <p className="text-gray-600 mt-2">
                  Certificate in C Programming
                  
                  <br />
                  Sololearn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
