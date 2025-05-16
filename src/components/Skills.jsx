import React, { Component } from 'react'
import { CheckCircleIcon } from 'lucide-react'
export const Skills = () => {
  const frontendSkills = [
    'HTML5 & CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Kotlin',
  ]
  const toolsSkills = [
    'Git & GitHub',
    'Webpack',
    'Vite',
    'npm/yarn',
    'VS Code',
    'Figma',
    'Eclipse',
  ]
  const otherSkills = [
    'Responsive Design',
    'UI/UX Design',
    'RESTful APIs',
    'Leadership skills'
  ]
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-600 mb-6">
              Frontend Development
            </h3>
            <ul className="space-y-3">
              {frontendSkills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <CheckCircleIcon size={18} className="text-blue-600 mr-2" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-600 mb-6">
              Tools & Environments
            </h3>
            <ul className="space-y-3">
              {toolsSkills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <CheckCircleIcon size={18} className="text-blue-600 mr-2" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-600 mb-6">
              Other Skills
            </h3>
            <ul className="space-y-3">
              {otherSkills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <CheckCircleIcon size={18} className="text-blue-600 mr-2" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  )
}
