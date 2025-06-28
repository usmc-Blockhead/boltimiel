import React, { useState } from 'react';
import { Mail, Code, Users, Zap, Send, ChevronRight, Star, MessageSquare, Copy, Check, Share2 } from 'lucide-react';
import EmailModal from '../components/EmailModal';
import ShareModal from '../components/ShareModal';

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const emailContent = `Hi Eric Simons,

I'm reaching out to introduce someone who's already pushing the boundaries of web development in ways that deeply align with StackBlitz's mission: Imiel.

Imiel is a rare breed of engineer-designer hybrid with a deep understanding of front-end architecture, UX design, and the real-world pain points developers face, especially in browser-based dev environments like Bolt.New. Without any official access to the codebase, he's already done what many full teams haven't:

Created a popular extension that improves core UX:
• Manual sidebar toggle to eliminate distracting UI behavior
• Auto-generated task prompts for faster iteration
• Smart analysis and rewriting of the bolt.ignore file based on project contents
• A cleaner, more accessible PRD generator for real-world workflows

Founded bolt.army to connect and empower devs building around Bolt.New, essentially creating an organic developer community from the ground up.

He's already designing, engineering, and shipping the kind of user-centric improvements StackBlitz values, from the outside. With access to the actual platform and a team to collaborate with, he'd be an unstoppable force.

Imiel lives and breathes this work. He obsesses over interface clarity, performance, accessibility, and dev experience. He's a natural bridge between design and code, and already leads by example in the open dev community.

He's not just ready for a role like this; he's already doing it.

If you'd like to connect with him directly, I'm happy to facilitate an introduction. This is one of those hires that could quietly level up the entire platform.

Best,
[Your Name]

---
Sent via BoltNewNeedsImiel.com`;

  const subject = "Imiel for Senior Design Engineer, Already Building the Future of Web Dev";
  const recipient = "eric.simons@bolt.new";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(`Subject: ${subject}\n\n${emailContent}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email content');
    }
  };

  const handleOpenEmailModal = () => {
    setShowEmailModal(true);
  };

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
    <>
      {/* Custom Bolt.new Badge Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .bolt-badge {
            transition: all 0.3s ease;
          }
          @keyframes badgeIntro {
            0% { transform: translateX(-100px) rotate(-360deg); opacity: 0; }
            100% { transform: translateX(0) rotate(0deg); opacity: 1; }
          }
          .bolt-badge-intro {
            animation: badgeIntro 1s ease-out 1s both;
          }
          .bolt-badge-intro.animated {
            animation: none;
          }
          @keyframes badgeHover {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(22deg); }
            100% { transform: scale(1) rotate(0deg); }
          }
          .bolt-badge:hover {
            animation: badgeHover 0.6s ease-in-out;
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
                onClick={handleOpenEmailModal}
                className="group bg-gradient-to-r from-cyber-blue to-cyber-purple px-10 py-5 rounded-lg font-semibold text-white hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/25 text-lg"
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Send Email Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <a 
                href="#email-template"
                className="group border-2 border-cyber-green px-10 py-5 rounded-lg font-semibold text-cyber-green hover:bg-cyber-green hover:text-dark-900 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <span className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>View Email Template</span>
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

      {/* Email Template Section */}
      <section id="email-template" className="py-20 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
                The Email Template
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here's the professional email that will be sent to Bolt.New on your behalf
            </p>
          </div>
          
          <div className="bg-dark-700/50 backdrop-blur-sm rounded-xl border border-cyber-blue/20 overflow-hidden">
            {/* Email Header */}
            <div className="bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 p-6 border-b border-cyber-blue/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email to Bolt.New</h3>
                    <p className="text-sm text-gray-400">Ready to send</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center space-x-2 px-4 py-2 bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green rounded-lg transition-colors duration-300"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm font-medium">
                    {copied ? 'Copied!' : 'Copy Email'}
                  </span>
                </button>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="text-gray-400 w-16">To:</span>
                  <span className="text-cyber-blue font-medium">{recipient}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-16">Subject:</span>
                  <span className="text-white">{subject}</span>
                </div>
              </div>
            </div>
            
            {/* Email Content */}
            <div className="p-6">
              <div className="bg-dark-600/50 p-6 rounded-lg border border-cyber-blue/10">
                <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap font-sans text-sm">
                  {emailContent}
                </pre>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleOpenEmailModal}
                  className="group bg-gradient-to-r from-cyber-blue to-cyber-purple px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/25 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send This Email</span>
                </button>
                <button
                  onClick={handleCopyEmail}
                  className="group border-2 border-cyber-purple px-8 py-4 rounded-lg font-semibold text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg">
                <p className="text-sm text-gray-300 text-center">
                  <strong className="text-cyber-blue">Note:</strong> The email will open in your default email client. 
                  You can personalize the message by replacing "[Your Name]\" with your actual name before sending.
                </p>
              </div>
            </div>
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

      {/* Social Media Share Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              Spread the Word
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Help amplify Imiel's voice by sharing this campaign with your network. 
            Every share brings us closer to getting Bolt.New's attention.
          </p>
          
          <div className="bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 backdrop-blur-sm p-8 rounded-2xl border border-cyber-purple/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-dark-700/30 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg w-fit mx-auto mb-4">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Social Media</h3>
                <p className="text-gray-300 text-sm">
                  Share on Twitter, LinkedIn, Facebook and more
                </p>
              </div>

              <div className="bg-dark-700/30 backdrop-blur-sm p-6 rounded-xl border border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg w-fit mx-auto mb-4">
                  <Copy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Direct Link</h3>
                <p className="text-gray-300 text-sm">
                  Copy the campaign URL to share anywhere
                </p>
              </div>

              <div className="bg-dark-700/30 backdrop-blur-sm p-6 rounded-xl border border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyber-purple to-cyber-pink rounded-lg w-fit mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-300 text-sm">
                  Reach developers who know Imiel's work
                </p>
              </div>
            </div>

            <button 
              onClick={() => setShowShareModal(true)}
              className="group bg-gradient-to-r from-cyber-green to-cyber-blue px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-green/25 flex items-center space-x-2 mx-auto"
            >
              <Share2 className="w-5 h-5" />
              <span>Share This Campaign</span>
            </button>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-lg border border-cyber-green/20">
              <p className="text-cyber-green font-medium text-center">
                🚀 Every share counts! Help us show Bolt.New the community support behind Imiel.
              </p>
            </div>
          </div>
        </div>
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
      </div>

      {/* Email Modal */}
      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        initialEmailContent={emailContent}
        subject={subject}
        recipient={recipient}
      />

      {/* Share Modal */}
      <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} />
    </>
  );
};

export default Home;