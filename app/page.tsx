import React from 'react';
import Image from 'next/image';

export default function ModernPortfolio() {

  const projects = [
    {
      title: 'Intelligent Project Management',
      description: 'AI-powered project tracking and collaboration platform',
      technologies: ['Next.js', 'TypeScript', 'Machine Learning', 'GraphQL'],
      image: '/api/placeholder/600/400',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Decentralized Finance Dashboard',
      description: 'Real-time cryptocurrency analytics and portfolio tracking',
      technologies: ['React', 'Web3', 'Blockchain', 'ChartJS'],
      image: '/api/placeholder/600/400',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Sustainable Urban Mobility App',
      description: 'Smart transportation solution for modern cities',
      technologies: ['Next.js', 'React Native', 'IoT', 'AI'],
      image: '/api/placeholder/600/400',
      links: {
        github: '#',
        live: '#'
      }
    }
  ];

  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Docker']
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Kubernetes', 'CI/CD', 'Firebase']
    },
    {
      category: 'Tools & Platforms',
      technologies: ['Git', 'Figma', 'Vercel', 'Postman']
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Waqar Un Nabi <br /> <br />
          </h1>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 ">
            Full-Stack Developer & Innovative Technologist
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transforming complex challenges into elegant digital solutions through cutting-edge technology and creative problem-solving.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              {/* Social Media Icons */}
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <Image
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
                width={600}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 flex items-center"
                  >
                    {/* GitHub Icon */}
                    <span className="ml-2">GitHub</span>
                  </a>
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    {/* Live Demo Icon */}
                    <span className="ml-2">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Interested in collaboration, have a project in mind, or just want to say hello? 
          Feel free to reach out, and I&apos;ll get back to you as soon as possible.
        </p>
        <a 
          href="mailto:syedwaqarunnabi@gmail.com" 
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
        >
          {/* Mail Icon */}
          <span className="ml-2">Get In Touch</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-gray-600">
          © 2025 Waqar Un Nabi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
