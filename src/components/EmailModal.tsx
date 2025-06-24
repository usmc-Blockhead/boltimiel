import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Mail, User, AlertCircle } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmailContent: string;
  subject: string;
  recipient: string;
}

const EmailModal: React.FC<EmailModalProps> = ({ 
  isOpen, 
  onClose, 
  initialEmailContent, 
  subject, 
  recipient 
}) => {
  const [userName, setUserName] = useState('');
  const [emailContent, setEmailContent] = useState(initialEmailContent);
  const [showValidation, setShowValidation] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Update email content when user name changes
  useEffect(() => {
    if (userName.trim()) {
      setEmailContent(initialEmailContent.replace('[Your Name]', userName.trim()));
    } else {
      setEmailContent(initialEmailContent);
    }
  }, [userName, initialEmailContent]);

  // Handle ESC key and focus management
  useEffect(() => {
    if (isOpen) {
      // Focus the name input when modal opens
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);

      // Handle ESC key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle form submission
  const handleSendEmail = () => {
    if (!userName.trim()) {
      setShowValidation(true);
      nameInputRef.current?.focus();
      return;
    }

    const finalEmailContent = emailContent;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(finalEmailContent)}`;
    
    // Open email client
    window.open(mailtoUrl, '_blank');
    
    // Close modal after sending
    onClose();
  };

  // Handle name input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    if (showValidation && e.target.value.trim()) {
      setShowValidation(false);
    }
  };

  // Reset state when modal closes
  const handleClose = () => {
    setUserName('');
    setShowValidation(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-dark-800 border border-cyber-blue/30 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cyber-blue/20 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 id="email-modal-title" className="text-xl font-semibold text-white">
                Compose Email to Bolt.New
              </h2>
              <p className="text-sm text-gray-400">Review and personalize your message</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto min-h-0 p-6 scrollbar-custom">
          <div className="space-y-6">
            {/* Email Details */}
            <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 backdrop-blur-sm p-4 rounded-lg border border-cyber-blue/20">
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="text-gray-400 w-16 flex-shrink-0">To:</span>
                  <span className="text-cyber-blue font-medium">{recipient}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-16 flex-shrink-0">Subject:</span>
                  <span className="text-white">{subject}</span>
                </div>
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="user-name" className="block text-sm font-medium text-gray-300 mb-2">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-cyber-blue" />
                  <span>Your Name *</span>
                </div>
              </label>
              <input
                ref={nameInputRef}
                type="text"
                id="user-name"
                value={userName}
                onChange={handleNameChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 bg-dark-600 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors duration-300 ${
                  showValidation && !userName.trim()
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-600 focus:border-cyber-blue focus:ring-cyber-blue'
                }`}
                aria-required="true"
                aria-invalid={showValidation && !userName.trim()}
              />
              {showValidation && !userName.trim() && (
                <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Please enter your name to personalize the email</span>
                </div>
              )}
            </div>

            {/* Email Content */}
            <div>
              <label htmlFor="email-content" className="block text-sm font-medium text-gray-300 mb-2">
                Email Content
              </label>
              <div className="bg-dark-700/50 border border-cyber-blue/20 rounded-lg overflow-hidden">
                <textarea
                  ref={textareaRef}
                  id="email-content"
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  className="w-full h-96 p-4 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none resize-none font-mono text-sm leading-relaxed"
                  placeholder="Email content will appear here..."
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">
                You can edit the email content above. Your name will automatically replace [Your Name] in the signature.
              </p>
            </div>

            {/* Preview Note */}
            {userName.trim() && (
              <div className="bg-cyber-green/10 border border-cyber-green/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-cyber-green text-sm">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Preview:</span>
                  <span>Email will be signed as "{userName.trim()}"</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-cyber-blue/20 bg-dark-800/50 flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={handleClose}
              className="px-6 py-3 text-gray-300 hover:text-white hover:bg-dark-700 rounded-lg transition-colors duration-300 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSendEmail}
              className={`group px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${
                userName.trim()
                  ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white hover:from-cyber-purple hover:to-cyber-blue hover:shadow-cyber-blue/25'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!userName.trim()}
            >
              <Send className="w-5 h-5" />
              <span>Send Email</span>
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              This will open your default email client with the message pre-filled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;