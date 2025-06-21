import React, { useState } from 'react';
import { X, Share2, Copy, Check, Facebook, Linkedin, Twitter, MessageSquare } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://imiel2bolt.net');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  const shareButtons = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://imiel2bolt.net/',
      color: 'hover:border-blue-500 hover:text-blue-500 hover:shadow-blue-500/25',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://imiel2bolt.net/',
      color: 'hover:border-blue-600 hover:text-blue-600 hover:shadow-blue-600/25',
      bgColor: 'hover:bg-blue-600/10'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/intent/tweet?text=BOLT.NEW%20needs%20Imiel%20%E2%80%94%20someone%20who%27s%20already%20pushing%20the%20boundaries%20of%20web%20development%20and%20building%20the%20future%20with%20Bolt.New.&url=https://imiel2bolt.net/',
      color: 'hover:border-sky-400 hover:text-sky-400 hover:shadow-sky-400/25',
      bgColor: 'hover:bg-sky-400/10'
    },
    {
      name: 'Messenger',
      icon: <MessageSquare className="w-5 h-5" />,
      url: 'fb-messenger://share/?link=https://imiel2bolt.net&app_id=123456789',
      color: 'hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400/25',
      bgColor: 'hover:bg-blue-400/10'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 border border-cyber-blue/30 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cyber-blue/20 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Share This Campaign</h2>
              <p className="text-sm text-gray-400">Help spread the word about Imiel</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto min-h-0 p-6 scrollbar-custom">
          <div className="space-y-6">
            {/* Campaign Message */}
            <div className="bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 backdrop-blur-sm p-6 rounded-lg border border-cyber-purple/20">
              <h3 className="text-lg font-semibold text-white mb-3">Campaign Message</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                "BOLT.NEW needs Imiel — someone who's already pushing the boundaries of web development 
                and building the future with Bolt.New. Join the campaign to help Bolt discover what they're missing!"
              </p>
            </div>

            {/* Social Media Platforms */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Share on Social Media</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shareButtons.map((button) => (
                  <a
                    key={button.name}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-dark-700/50 border border-gray-600 text-gray-300 p-4 rounded-lg font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${button.color} ${button.bgColor} flex items-center space-x-3`}
                  >
                    <div className="flex-shrink-0">
                      {button.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Share on {button.name}</div>
                      <div className="text-xs text-gray-400">Spread the word to your network</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Copy Link Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Direct Link</h3>
              <div className="bg-dark-700/50 border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="text-sm text-gray-400 mb-1">Campaign URL</div>
                    <div className="text-cyber-blue font-mono text-sm break-all">
                      https://imiel2bolt.net
                    </div>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      copied 
                        ? 'bg-cyber-green/20 text-cyber-green border border-cyber-green/30' 
                        : 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 hover:bg-cyber-purple/30'
                    }`}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Impact Message */}
            <div className="bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 backdrop-blur-sm p-6 rounded-lg border border-cyber-green/20">
              <h3 className="text-lg font-semibold text-cyber-green mb-3">Every Share Counts</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                When you share this campaign, you're not just spreading a link – you're amplifying Imiel's voice 
                and showing Bolt.New the strength of community support. Together, we can make sure they see 
                what an incredible addition he would be to their team.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-cyber-blue/20 bg-dark-800/50 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Help us reach our goal of 500 supporters
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 font-medium"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;