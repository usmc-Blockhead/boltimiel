import React, { useState, useEffect } from 'react';
import { Heart, Share2, Send, Users, Target, TrendingUp } from 'lucide-react';
import ShareModal from './ShareModal';

interface CampaignProgressProps {
  currentEmails?: number;
  goalEmails?: number;
}

const CampaignProgress: React.FC<CampaignProgressProps> = ({ 
  currentEmails = 127, 
  goalEmails = 500 
}) => {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const percentage = Math.round((currentEmails / goalEmails) * 100);

  // Animate the counter on mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = currentEmails / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= currentEmails) {
        setAnimatedCount(currentEmails);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [currentEmails]);

  const getMilestoneMessage = (percentage: number) => {
    if (percentage >= 90) return "🚀 Almost there! The finish line is in sight!";
    if (percentage >= 75) return "🔥 Incredible momentum! Keep it going!";
    if (percentage >= 50) return "⚡ Halfway there! The community is responding!";
    if (percentage >= 25) return "🌟 Great start! Every voice is making a difference!";
    return "💪 Building momentum, one email at a time!";
  };

  return (
    <>
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Progress Section */}
      <div className="bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 backdrop-blur-sm p-8 rounded-2xl border border-cyber-purple/30">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Community Progress</h3>
          <p className="text-gray-300">Emails Sent</p>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-300">Progress</span>
            <span className="text-sm font-medium text-cyber-blue">{animatedCount} / {goalEmails}</span>
          </div>
          <div className="w-full bg-dark-600 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${(animatedCount / goalEmails) * 100}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-400">0</span>
            <span className="text-lg font-bold text-cyber-green">{percentage}%</span>
            <span className="text-xs text-gray-400">{goalEmails}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-dark-700/50 p-4 rounded-lg border border-cyber-blue/20 text-center">
            <Users className="w-6 h-6 text-cyber-blue mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{animatedCount}</div>
            <div className="text-sm text-gray-300">Supporters</div>
          </div>
          <div className="bg-dark-700/50 p-4 rounded-lg border border-cyber-green/20 text-center">
            <Target className="w-6 h-6 text-cyber-green mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{goalEmails - currentEmails}</div>
            <div className="text-sm text-gray-300">To Goal</div>
          </div>
          <div className="bg-dark-700/50 p-4 rounded-lg border border-cyber-purple/20 text-center">
            <TrendingUp className="w-6 h-6 text-cyber-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{percentage}%</div>
            <div className="text-sm text-gray-300">Complete</div>
          </div>
        </div>

        {/* Milestone Message */}
        <div className="text-center p-4 bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 rounded-lg border border-cyber-green/20">
          <p className="text-cyber-green font-medium">{getMilestoneMessage(percentage)}</p>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-300">
            Join <span className="text-cyber-blue font-semibold">{animatedCount}</span> community members who have already sent their support!
          </p>
        </div>
      </div>

      {/* Every Voice Matters Section */}
      <div className="bg-gradient-to-br from-cyber-purple/30 via-cyber-blue/20 to-cyber-green/20 backdrop-blur-sm p-12 rounded-2xl border border-cyber-purple/30 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
            Every Voice Matters
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          The more people who speak up for Imiel, the stronger our message becomes.
          Help us show Bolt just how much the community values his contributions.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-dark-700/30 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg w-fit mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Show Support</h3>
            <p className="text-gray-300 text-sm">
              Send your email to demonstrate community backing
            </p>
          </div>

          <div className="bg-dark-700/30 backdrop-blur-sm p-6 rounded-xl border border-cyber-green/20 hover:border-cyber-green/50 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg w-fit mx-auto mb-4">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Spread the Word</h3>
            <p className="text-gray-300 text-sm">
              Share this page with other community members
            </p>
          </div>

          <div className="bg-dark-700/30 backdrop-blur-sm p-6 rounded-xl border border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-cyber-purple to-cyber-pink rounded-lg w-fit mx-auto mb-4">
              <Send className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Make Impact</h3>
            <p className="text-gray-300 text-sm">
              Help Bolt make the right decision for their team
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={() => setShowShareModal(true)}
            className="group bg-gradient-to-r from-cyber-green to-cyber-blue px-8 py-4 rounded-lg font-semibold text-white hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-green/25 flex items-center space-x-2"
          >
            <Share2 className="w-5 h-5" />
            <span>Share This Campaign</span>
          </button>
          <a 
            href="#contact-form"
            className="group border-2 border-cyber-purple px-8 py-4 rounded-lg font-semibold text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Send Another Email</span>
          </a>
        </div>

        {/* Community Quote */}
        <div className="p-6 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-lg border border-cyber-blue/20">
          <blockquote className="text-lg italic text-gray-300 mb-4">
            "Together, we can show Bolt that Imiel isn't just a contributor – he's family. And family belongs on the team."
          </blockquote>
          <cite className="text-cyber-blue font-semibold">— The Bolt Community</cite>
        </div>
      </div>
    </div>

    {/* Share Modal */}
    <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} />
    </>
  );
};

export default CampaignProgress;