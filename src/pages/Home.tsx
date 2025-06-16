import React, { useState } from 'react';
import { Mail, Code, Users, Zap, Send, ChevronRight, Star } from 'lucide-react';
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green bg-clip-text text-transparent animate-glow-pulse">
                Bolt Needs Imiel
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Someone who's already <span className="text-cyber-blue font-semibold">pushing the boundaries</span> of 
              web development and <span className="text-cyber-green font-semibold">building the future</span> with Bolt
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowEmailPreview(true)}
                className="group bg-gradient-to-r from-cyber-blue to-cyber-purple px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/25"
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>View Email Template</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <a 
                href="#form" 
                className="group border-2 border-cyber-green px-8 py-4 rounded-lg font-semibold text-cyber-green hover:bg-cyber-green hover:text-dark-900 transition-all duration-300 transform hover:scale-105"
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
              Without any official access to the codebase, Imiel has already done what many full teams haven't
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
                Help Bolt Discover Imiel
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the campaign and send an email to Bolt showcasing why they need Imiel on their team
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