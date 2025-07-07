import React from 'react'
import { CheckCircle } from 'lucide-react'

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
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-100 via-sky-50 to-blue-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full shadow-lg shadow-blue-400/50"></div>
          <p className="text-blue-700 mt-4 text-lg">Technologies and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-200/50 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-blue-300/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-lg">FE</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                Frontend Development
              </h3>
            </div>
            <ul className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <li key={skill} className="flex items-center group/item hover:bg-blue-100/60 p-2 rounded-lg transition-all duration-200" style={{animationDelay: `${index * 100}ms`}}>
                  <CheckCircle size={20} className="text-blue-500 mr-3 group-hover/item:text-blue-600 transition-colors flex-shrink-0" />
                  <span className="text-blue-700 group-hover/item:text-blue-800 transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-200/50 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-blue-300/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-lg">T&E</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                Tools & Environments
              </h3>
            </div>
            <ul className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <li key={skill} className="flex items-center group/item hover:bg-blue-100/60 p-2 rounded-lg transition-all duration-200" style={{animationDelay: `${index * 100}ms`}}>
                  <CheckCircle size={20} className="text-blue-500 mr-3 group-hover/item:text-blue-600 transition-colors flex-shrink-0" />
                  <span className="text-blue-700 group-hover/item:text-blue-800 transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-200/50 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-blue-300/30 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                Other Skills
              </h3>
            </div>
            <ul className="space-y-4">
              {otherSkills.map((skill, index) => (
                <li key={skill} className="flex items-center group/item hover:bg-blue-100/60 p-2 rounded-lg transition-all duration-200" style={{animationDelay: `${index * 100}ms`}}>
                  <CheckCircle size={20} className="text-blue-500 mr-3 group-hover/item:text-blue-600 transition-colors flex-shrink-0" />
                  <span className="text-blue-700 group-hover/item:text-blue-800 transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Floating skill badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['React', 'TypeScript', 'Next.js', 'Tailwind'].map((skill, index) => (
            <div key={skill} className="px-6 py-3 bg-gradient-to-r from-blue-200/60 to-blue-300/60 backdrop-blur-sm rounded-full border border-blue-300/50 text-blue-700 font-medium hover:from-blue-300/70 hover:to-blue-400/70 hover:text-blue-800 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg" style={{animationDelay: `${index * 200}ms`}}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}