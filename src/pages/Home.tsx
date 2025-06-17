import React, { useState } from 'react';
import { Mail, Code, Users, Zap, Send, ChevronRight, Star, MessageSquare } from 'lucide-react';
import EmailPreview from '../components/EmailPreview';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const [showEmailPreview, setShowEmailPreview] = useState(false);

  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Browser Extension",
      description: "Created a popular extension with manual sidebar toggle, auto-generated task prompts, and smart bolt.ignore analysis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Building",
      description: "Founded bolt.army to connect and empower developers building around Bolt, creating an organic developer community"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "UX Innovation",
      description: "Improved core UX with cleaner, more accessible PRD generator and workflow optimizations"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Leading by Example",
      description: "Obsesses over interface clarity, performance, accessibility, and developer experience"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="mb-12">
              {/* Terraced Text Layout */}
              <div className="flex flex-col items-start max-w-5xl mx-auto">
                {/* BOLT. NEW line */}
                <div className="w-full mb-2">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                    <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green bg-clip-text text-transparent animate-glow-pulse block py-3 tracking-wider">
                      BOLT. NEW
                    </span>
                  </h1>
                </div>
                
                {/* needs Imiel line - indented */}
                <div className="w-full pl-6 md:pl-12 lg:pl-20">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                    <span className="bg-gradient-to-r from-cyber-green via-cyber-pink to-cyber-blue bg-clip-text text-transparent block py-3 tracking-wide animate-glow-pulse" style={{ animationDelay: '1s' }}>
                      needs Imiel
                    </span>
                  </h1>
                </div>
              </div>
              
              {/* Visual connector line */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple rounded-full opacity-60"></div>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Someone who's already <span className="text-cyber-blue font-semibold">pushing the boundaries</span> of 
              web development and <span className="text-cyber-green font-semibold">building the future</span> with Bolt.New
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowEmailPreview(true)}
                className="group bg-gradient-to-r from-cyber-blue to-cyber-purple px-10 py-5 rounded-lg font-semibold text-white hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/25 text-lg"
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>View Email Template</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <a 
                href="#form" 
                className="group border-2 border-cyber-green px-10 py-5 rounded-lg font-semibold text-cyber-green hover:bg-cyber-green hover:text-dark-900 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <span className="flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Email Now</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyber-blue/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-cyber-purple/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyber-green/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-cyber-pink/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-cyber-yellow/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-18 h-18 bg-cyber-blue/8 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-cyber-green/12 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-22 h-22 bg-cyber-purple/8 rounded-full animate-float" style={{ animationDelay: '7s' }}></div>
      </section>

      {/* Email Campaign Section */}
      <section className="py-16 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
              Join the Email Campaign
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Help us get Imiel noticed by the Bolt.New team. Send a professional email showcasing his contributions and potential impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://discord.gg/stackblitz"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-cyber-purple to-cyber-blue px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-blue hover:to-cyber-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-purple/25 inline-flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Join Discord</span>
            </a>
            <a 
              href="mailto:imiel.visser@gmail.com"
              className="group border-2 border-cyber-green px-8 py-4 rounded-lg font-semibold text-cyber-green hover:bg-cyber-green hover:text-dark-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Imiel</span>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                Already Building the Future
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Without any official access to the Bolt.New codebase, Imiel has already done what many full teams haven't
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg group-hover:animate-glow-pulse">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
                Help Bolt.New Discover Imiel
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the campaign and send an email to Bolt.New showcasing why they need Imiel on their team
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Email Preview Modal */}
      {showEmailPreview && (
        <EmailPreview onClose={() => setShowEmailPreview(false)} />
      )}
    </div>
  );
};

export default Home;