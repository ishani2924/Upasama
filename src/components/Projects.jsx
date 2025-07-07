import React, { Component } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import pawgo from '../assets/pawgo.png';
import Bus from '../assets/Bus.jpg';
import finance from '../assets/finance.png';
import tasty from '../assets/tasty.png';
import kfc from '../assets/kfc.png';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Pet Care Marketplace',
      description:
        'The platform connects pet owners with service providers in a user-friendly way allowing both parties to easily access and offer pet care services ensuring seamless interaction between pet owners and service providers.',
      image: pawgo,
      tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
      liveLink: 'https://paw-go.vercel.app/'
    },
    {
      id: 2,
      title: 'Online  Bus Ticket Reservation System',
      description:
        'This web-based application simplifies the process of booking seats for passengers by providing an intuitive and user-friendly platform.',
      image: Bus,
      tags: ['html', 'css', 'JavaScript'],
      liveLink: 'https://github.com/Daniru12/Bus-Ticket-Reservation-System'
    },
    {
      id: 3,
      title: 'Food Ordering System KFC',
      description:
        'This web-based food ordering system is designed to provide an engaging and user-friendly experience similar to popular fast-food platforms. Customers can easily navigate through the menu, personalize their orders, and complete transactions smoothly online.',
      image: kfc,
      tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/ishani2924/Food-Ordering-System-KFC'
    },
    {
      id: 4,
      title: 'Tasty Food Web Application',
      description:
        'This fast food ordering app was built with a focus on simplicity and user convenience. Users can effortlessly browse through a menu of popular fast food items, customize their orders, and complete purchases within a few taps.',
      image: tasty,
      tags: ['Kotlin'],
      githubLink: 'https://github.com/ishani2924/Food-Ordering-System-KFC'
    },
    {
      id: 5,
      title: 'Finance Tracker Web Application',
      description:
        'A finance tracker web application designed to simplify budget management by allowing users to easily monitor income and expenses, helping them stay in control of their financial health.',
      image: finance,
      tags: ['Kotlin'],
      githubLink: 'https://github.com/ishani2924/Food-Ordering-System-KFC'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#d0dfef]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-[#161D6F] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#A4CCD9] text-[#001F3F] text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="flex items-center text-gray-600 hover:text-[#161D6F] transition-colors"
                    >
                      <ExternalLinkIcon size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="flex items-center text-gray-600 hover:text-[#161D6F] transition-colors"
                    >
                      <GithubIcon size={18} className="mr-1" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/ishani2924"
            className="inline-block px-8 py-3 border border-[#001F3F] text-[#001F3F] font-medium rounded-lg hover:bg-[#001F3F] hover:text-white transition-colors"
          >
            View All Projects in GitHub
          </a>
        </div>
      </div>
    </section>
  );
};