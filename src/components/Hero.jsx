import React, { useState, useEffect, useRef } from 'react'

// Custom styles for enhanced animations
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(100%) skewX(-12deg); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes subtle-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(30, 58, 138, 0.2); }
    50% { box-shadow: 0 0 30px rgba(30, 58, 138, 0.4); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 2s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
  
  .animate-subtle-glow {
    animation: subtle-glow 3s ease-in-out infinite;
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
  
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .professional-gradient {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #60a5fa 75%, #93c5fd 100%);
  }
  
  .professional-text-gradient {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced mouse tracking for subtle interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Enhanced typing effect for the name
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Upasama Ishani';

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayedName(fullName.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-white min-h-screen flex items-center py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(30, 58, 138, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
          linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #ffffff 100%)
        `
      }}
    >
      {/* Inject custom styles */}
      <style dangerouslySetInnerHTML={{__html: customStyles}} />
      
      {/* Professional subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-10 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-8 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 8}px, ${mousePosition.y * 8}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-12 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 12}px, ${-mousePosition.y * 12}px)`
          }}
        ></div>
        
        {/* Professional geometric elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-slate-600 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-700 rounded-full opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left column - Text content */}
        <div className={`lg:w-1/2 mb-16 lg:mb-0 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-800 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <span className="relative flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              Available for opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 text-shadow">
            Hi, I'm <span className="relative inline-block">
              <span className="professional-text-gradient font-extrabold">
                {displayedName}
              </span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 opacity-30 rounded animate-pulse-slow"></span>
              {/* Cursor effect */}
              <span className={`absolute top-0 text-blue-800 animate-pulse ${displayedName.length === fullName.length ? 'opacity-0' : 'opacity-100'}`}>
                {displayedName.length < fullName.length ? '|' : ''}
              </span>
            </span>
          </h1>

          <p className={`text-xl text-gray-600 mb-10 max-w-lg leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            I create beautiful, functional, and user-friendly digital experiences with a focus on responsive design and modern web technologies.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-900 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get in touch
              <svg className={`w-5 h-5 ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="group px-8 py-4 border-2 border-blue-800 text-blue-800 font-semibold rounded-lg hover:bg-blue-50 hover:border-blue-900 transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95"
            >
              View my work
              <svg className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <div className={`mt-10 flex space-x-6 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <a
              href="https://github.com/ishani2924"
              className="text-gray-600 hover:text-blue-800 transition-all duration-300 p-3 hover:bg-blue-50 rounded-full transform hover:scale-110 hover:shadow-md"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/upasama-ishani-7727a12a0/"
              className="text-gray-600 hover:text-blue-800 transition-all duration-300 p-3 hover:bg-blue-50 rounded-full transform hover:scale-110 hover:shadow-md"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Enhanced Download CV button */}
            <a
              href="/jayasundara.pdf"
              download="jayasundara.pdf"
              className="group text-gray-600 hover:text-blue-800 transition-all duration-300 p-3 hover:bg-blue-50 rounded-full transform hover:scale-110 hover:shadow-md relative"
              aria-label="Download CV"
            >
              <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Download CV
              </span>
            </a>
          </div>
        </div>

        {/* Right column - Professional Enhanced Image */}
        <div className={`lg:w-5/12 transition-all duration-1000 delay-300 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Professional subtle decorative elements */}
          <div className="absolute -top-8 -right-8 w-56 h-56 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 z-0 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-15 z-0 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 -left-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-25 z-0 animate-pulse delay-2000"></div>

          {/* Professional orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-96 h-96 border border-blue-200 rounded-full opacity-20 animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute w-88 h-88 border border-slate-200 rounded-full opacity-15 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          </div>

          {/* Main image container */}
          <div className="relative z-10 flex items-center justify-center">
            {/* Professional glowing border effect */}
            <div className="absolute w-88 h-88 rounded-full bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 opacity-20 animate-subtle-glow"></div>
            
            {/* Image frame with professional styling */}
            <div className="relative w-80 h-80 bg-white p-1 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group">
              {/* Professional rotating gradient border */}
              <div className="absolute inset-0 professional-gradient rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin" style={{ animationDuration: '12s' }}></div>
              
              {/* Inner white frame */}
              <div className="relative w-full h-full bg-white rounded-full p-2 z-10">
                <img
                  src="https://i.postimg.cc/jq4y8YVF/1729157246247.jpg"
                  alt="Upasama Ishani"
                  className="w-full h-full object-cover rounded-full filter brightness-110 contrast-105 group-hover:brightness-125 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Professional shimmer effect overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-1000 transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>

            {/* Professional tech stack badges */}
            

            {/* Professional skill indicators */}
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center shadow-lg animate-float">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg animate-float delay-1000">
              <span className="text-white text-sm">⚡</span>
            </div>
            <div className="absolute -bottom-4 left-1/4 w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg animate-float delay-2000">
              <span className="text-white text-sm">🎨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-600 font-medium">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-500 animate-bounce hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}