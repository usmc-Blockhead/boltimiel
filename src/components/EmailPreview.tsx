import React from 'react';
import { X, Mail, Copy, Check } from 'lucide-react';

interface EmailPreviewProps {
  onClose: () => void;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const emailContent = `Subject: Imiel for Senior Design Engineer, Already Building the Future of Web Dev

Hi Eric Simons,

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
[Your Name]`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 border border-cyber-blue/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cyber-blue/20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Email Template</h2>
              <p className="text-sm text-gray-400">Ready to send to Bolt</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="group flex items-center space-x-2 px-4 py-2 bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green rounded-lg transition-colors duration-300"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {copied ? 'Copied!' : 'Copy'}
              </span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Email Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-lg border border-cyber-blue/10">
            <div className="font-mono text-sm space-y-4">
              <div className="border-b border-gray-600 pb-4">
                <div className="text-cyber-blue font-semibold mb-2">
                  Subject: Imiel for Senior Design Engineer, Already Building the Future of Web Dev
                </div>
              </div>
              
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {emailContent.split('\n').slice(2).join('\n')}
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg">
            <p className="text-sm text-gray-300">
              <strong className="text-cyber-blue">Note:</strong> When you fill out the form below, 
              your name will automatically replace "[Your Name]" in the email that gets sent to Bolt.New.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-cyber-blue/20 bg-dark-800/50">
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                // Navigate to home page with form anchor
                window.location.href = '/#email-campaign-form';
              }}
              className="px-6 py-2 bg-gradient-to-r from-cyber-green to-cyber-blue text-white rounded-lg hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 font-medium"
            >
              Send This Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;