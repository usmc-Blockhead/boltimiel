import React from 'react';
import { Mail, MessageSquare, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Direct Email",
      description: "Reach out directly for hiring opportunities",
      link: "mailto:imiel.visser@gmail.com",
      linkText: "imiel.visser@gmail.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Discord",
      description: "Find him in the StackBlitz community Discord",
      link: "https://discord.gg/stackblitz",
      linkText: "Join Discord"
    }
  ];

  const projects = [
    {
      title: "Bolt Army",
      description: "The community hub for Bolt developers worldwide",
      link: "https://bolt.army",
      tech: ["React", "TypeScript", "Community Building"]
    },
    {
      title: "Bolt Extension",
      description: "Browser extension improving Bolt.new UX",
      link: "",
      tech: ["JavaScript", "WebExtensions", "UX Design"]
    },
    {
      title: "PRD Generator",
      description: "Clean, accessible project requirement generator",
      link: "",
      tech: ["React", "AI Integration", "Developer Tools"]
    }
  ];

  return (
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
            Ready to hire Imiel directly? Here's how to reach out and see his work in action
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                Direct Contact
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Multiple ways to connect for hiring opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="group bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg group-hover:animate-glow-pulse">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {method.description}
                    </p>
                    <a 
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyber-green hover:text-cyber-blue transition-colors duration-300 font-medium"
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
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
                Recent Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              See his work in action
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyber-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyber-blue hover:text-cyber-green transition-colors duration-300 font-medium"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 backdrop-blur-sm p-12 rounded-xl border border-cyber-purple/20">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Hire Directly?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Skip the campaign and reach out directly for hiring opportunities. 
                Imiel is ready to join a team that values innovation and user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:imiel.visser@gmail.com?subject=Hiring Opportunity"
                  className="group bg-gradient-to-r from-cyber-purple to-cyber-blue px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-blue hover:to-cyber-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-purple/25 inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Hiring Email</span>
                </a>
                <a 
                  href="/#form" 
                  className="group border-2 border-cyber-green px-8 py-4 rounded-lg font-semibold text-cyber-green hover:bg-cyber-green hover:text-dark-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Join the Campaign</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;