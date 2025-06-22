import React from 'react';
import { Mail, MessageSquare, ExternalLink, Github, Linkedin, MapPin, Clock, BarChart3, Users, Zap, Award, Code2, Palette, Database, Server, Globe, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Get in touch directly",
      link: "mailto:imiel.visser@gmail.com",
      linkText: "imiel.visser@gmail.com",
      primary: true
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Discord",
      description: "Find me in the Bolt community",
      link: "https://discord.gg/stackblitz",
      linkText: "@imiel",
      primary: false
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "Check out my code",
      link: "https://github.com/imiel",
      linkText: "github.com/imiel",
      primary: false
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Professional network",
      link: "https://linkedin.com/in/imiel",
      linkText: "linkedin.com/in/imiel",
      primary: false
    }
  ];

  const projects = [
    {
      title: "Bolt Army",
      description: "The community hub for Bolt developers worldwide, connecting and empowering the ecosystem",
      link: "https://bolt.army",
      tech: ["React", "TypeScript", "Community Building", "UX Design"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "UpVibe Dance",
      description: "Interactive dance experience platform with real-time animations and user engagement",
      link: "https://upvibe.dance/",
      tech: ["React", "Animation", "Interactive Design", "Performance"],
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Bolt Hackathon Badge",
      description: "Official hackathon requirement badge system for community events and achievements",
      link: "https://bolthackathonbadge.bolt.army/",
      tech: ["React", "Badge System", "Community Tools", "Gamification"],
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "UI/UX Design", level: 88 },
        { name: "Figma", level: 85 },
        { name: "User Research", level: 80 },
        { name: "Prototyping", level: 87 }
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 }
      ]
    },
    {
      title: "Community & Leadership",
      icon: <Users className="w-5 h-5" />,
      skills: [
        { name: "Community Building", level: 95 },
        { name: "Technical Writing", level: 90 },
        { name: "Mentoring", level: 88 },
        { name: "Project Management", level: 85 }
      ]
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Years Experience", value: "5+", icon: <Award className="w-5 h-5" /> },
    { label: "Community Contributions", value: "100+", icon: <Users className="w-5 h-5" /> },
    { label: "Response Time", value: "< 24h", icon: <Clock className="w-5 h-5" /> }
  ];

  const availability = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", time: "Available for urgent matters" }
  ];

  return (
    <>
      {/* Custom Bolt.new Badge Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .bolt-badge {
            transition: all 0.3s ease;
          }
          @keyframes badgeIntro {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .bolt-badge-intro {
            animation: badgeIntro 1s ease-out 1s both;
          }
          .bolt-badge-intro.animated {
            animation: none;
          }
          .bolt-badge:hover {
            animation: bounce 0.6s ease-in-out;
          }
          @keyframes bounce {
            0%, 20%, 60%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            80% { transform: translateY(-5px); }
          }
        `
      }} />
      
      {/* Bolt.new Badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <a 
          href="https://bolt.new/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block transition-all duration-300 hover:shadow-2xl"
        >
          <img 
            src="https://storage.bolt.army/white_circle_360x360.png" 
            alt="Built with Bolt.new badge" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg bolt-badge bolt-badge-intro"
            onAnimationEnd={(e) => e.currentTarget.classList.add('animated')}
          />
        </a>
      </div>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate? Here's how to reach out and see my work in action
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Methods */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={index}
                      className={`group bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                        method.primary 
                          ? 'border-cyber-blue/50 hover:border-cyber-blue' 
                          : 'border-cyber-purple/20 hover:border-cyber-purple/50'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-3 rounded-lg group-hover:animate-glow-pulse ${
                          method.primary 
                            ? 'bg-gradient-to-br from-cyber-blue to-cyber-green' 
                            : 'bg-gradient-to-br from-cyber-purple to-cyber-blue'
                        }`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                            {method.title}
                          </h3>
                          <p className="text-gray-300 mb-3 text-sm">
                            {method.description}
                          </p>
                          <a 
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-cyber-green hover:text-cyber-blue transition-colors duration-300 font-medium text-sm"
                          >
                            <span>{method.linkText}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability & Stats */}
              <div className="space-y-8">
                {/* Availability */}
                <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-green/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-5 h-5 text-cyber-green" />
                    <h3 className="text-xl font-semibold text-white">Availability</h3>
                  </div>
                  <div className="space-y-3">
                    {availability.map((slot, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{slot.day}</span>
                        <span className="text-cyber-green text-sm font-medium">{slot.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-cyber-blue" />
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                  </div>
                  <p className="text-gray-300 mb-2">Remote-first developer</p>
                  <p className="text-cyber-blue text-sm">Available for collaboration across time zones</p>
                </div>

                {/* Quick Stats */}
                <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-purple/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="text-cyber-purple">
                            {stat.icon}
                          </div>
                          <span className="text-gray-300 text-sm">{stat.label}</span>
                        </div>
                        <span className="text-cyber-purple font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
                  Recent Projects
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                See my work in action
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-dark-700/50 backdrop-blur-sm rounded-xl border border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyber-green transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyber-blue hover:text-cyber-green transition-colors duration-300 font-medium text-sm"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                  Skills & Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Technical proficiencies and core competencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg text-white">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-cyber-blue text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-600 rounded-full h-2">
                          <div 
                            className="h-2 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 backdrop-blur-sm p-12 rounded-xl border border-cyber-blue/30">
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Ready to Work Together?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and see how we can create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:imiel.visser@gmail.com?subject=Project Collaboration"
                    className="group bg-gradient-to-r from-cyber-green to-cyber-blue px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-green/25 inline-flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send a Message</span>
                  </a>
                  <a 
                    href="/#contact-form" 
                    className="group border-2 border-cyber-purple px-8 py-4 rounded-lg font-semibold text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Join the Campaign</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;