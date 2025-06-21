import React, { useState } from 'react';
import { Send, User, Mail, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import CampaignProgress from './CampaignProgress';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Email sent successfully! Thank you for supporting Imiel.');
        setFormData({ firstName: '', lastName: '', email: '' });
      } else {
        setStatus('error');
        setMessage(result.message || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div id="email-campaign-form" className="max-w-4xl mx-auto space-y-12">
      {/* Campaign Progress Visualization */}
      <CampaignProgress />
      
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
      <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Join the Campaign
          </h3>
          <p className="text-gray-300">
            Fill out the form below and we'll send the email to Bolt on your behalf
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="campaign-first-name" className="block text-sm font-medium text-gray-300 mb-2">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-cyber-blue" />
                  <span>First Name</span>
                </div>
              </label>
              <input
                type="text"
                id="campaign-first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors duration-300"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="campaign-last-name" className="block text-sm font-medium text-gray-300 mb-2">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-cyber-blue" />
                  <span>Last Name</span>
                </div>
              </label>
              <input
                type="text"
                id="campaign-last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors duration-300"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="campaign-email" className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyber-blue" />
                <span>Email Address</span>
              </div>
            </label>
            <input
              type="email"
              id="campaign-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-colors duration-300"
              placeholder="Enter your email address"
            />
          </div>

          {message && (
            <div className={`p-4 rounded-lg flex items-center space-x-2 ${
              status === 'success' 
                ? 'bg-cyber-green/20 border border-cyber-green/30 text-cyber-green' 
                : 'bg-red-500/20 border border-red-500/30 text-red-400'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span>{message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full group bg-gradient-to-r from-cyber-blue to-cyber-purple px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-blue/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            <span>
              {status === 'loading' ? 'Sending Email...' : 'Send Email to Bolt'}
            </span>
          </button>
        </form>

        <div className="mt-6 p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg">
          <p className="text-sm text-gray-300 text-center">
            By submitting this form, you're helping send a professional email to Bolt.New 
            showcasing Imiel's contributions and potential impact on their team.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;