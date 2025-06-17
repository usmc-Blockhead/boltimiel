import React from 'react';
import { Code2, Palette, Users, Rocket, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: "Frontend Architecture", description: "Deep understanding of modern web development patterns and performance optimization" },
    { icon: <Palette className="w-6 h-6" />, title: "UX Design", description: "Bridge between design and code with keen eye for user experience" },
    { icon: <Users className="w-6 h-6" />, title: "Community Leadership", description: "Founded and leads bolt.army, connecting developers worldwide" },
    { icon: <Rocket className="w-6 h-6" />, title: "Innovation", description: "Creates solutions before problems are officially recognized" },
  ];

  const values = [
    { icon: <Award className="w-5 h-5" />, title: "Excellence in Craft", description: "Obsesses over interface clarity, performance, and accessibility" },
    { icon: <Heart className="w-5 h-5" />, title: "Developer Experience", description: "Understands real-world pain points developers face daily" },
    { icon: <Users className="w-5 h-5" />, title: "Community First", description: "Believes in building together and lifting others up" },
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
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              The Story of Imiel
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A rare breed of engineer-designer hybrid who lives and breathes web development, 
            already building the future from the outside
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20">
              <h2 className="text-3xl font-bold text-cyber-blue mb-6">The Engineer-Designer Who Sees the Future</h2>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Imiel represents something rare in our industry: an engineer-designer hybrid with an deep understanding 
                of front-end architecture, UX design, and the real-world pain points developers face, especially in 
                browser-based development environments like Bolt.New.
              </p>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                What makes him exceptional isn't just his technical skill—it's his ability to identify problems before 
                they're officially recognized and create solutions that developers actually want to use. Without any 
                official access to the Bolt.New codebase, he's already built what many full teams haven't.
              </p>
              
              <h3 className="text-2xl font-bold text-cyber-green mb-4">Building Before Being Asked</h3>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                His browser extension didn't just add features—it solved genuine UX problems. The manual sidebar toggle 
                eliminated distracting UI behavior. Auto-generated task prompts accelerated iteration cycles. Smart 
                analysis and rewriting of bolt.ignore files based on project contents saved developers countless hours.
              </p>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                But perhaps most importantly, he created bolt.army—an organic developer community that connects and 
                empowers people building around Bolt.New. This wasn't assigned to him. He saw the need and built it.
              </p>
              
              <h3 className="text-2xl font-bold text-cyber-purple mb-4">The Natural Bridge</h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Imiel is a natural bridge between design and code, obsessing over interface clarity, performance, 
                accessibility, and developer experience. He leads by example in the open development community, 
                demonstrating the kind of user-centric thinking that StackBlitz values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
                What Makes Him Exceptional
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg group-hover:animate-glow-pulse">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyber-green to-cyber-yellow bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-dark-700/30 backdrop-blur-sm p-6 rounded-lg border border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-2 bg-cyber-green/20 rounded-lg text-cyber-green group-hover:bg-cyber-green/30 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyber-green transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to See What He Can Do With the Team?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Imiel isn't just ready for a role like this—he's already doing it. 
              Help Bolt.New discover what they're missing.
            </p>
            <a 
              href="/#email-campaign-form" 
              className="group bg-gradient-to-r from-cyber-green to-cyber-blue px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-green/25 inline-block"
            >
              Send the Email
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;