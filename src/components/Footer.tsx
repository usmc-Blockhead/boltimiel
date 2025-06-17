import React from 'react';
import { Zap, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800/50 border-t border-cyber-blue/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
                Bolt.New Needs Imiel
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A campaign to connect an exceptional engineer-designer who's already building 
              the future of web development with the team at Bolt.New.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:imiel.visser@gmail.com"
                className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-cyber-blue uppercase tracking-wider mb-4">
              Campaign
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Imiel</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-cyber-green uppercase tracking-wider mb-4">
              Community
            </h3>
            <ul className="space-y-2">
              <li><a href="https://bolt.army" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Bolt.New Army</a></li>
              <li><a href="https://discord.gg/stackblitz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Discord</a></li>
              <li><a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Bolt.new</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2024 Bolt.New Needs Imiel. Made with ⚡ for the future of web development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;