import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { 
  DollarSign, 
  Clock, 
  Music, 
  Headphones, 
  Check, 
  ArrowRight, 
  User, 
  Target 
} from './icons'

const LandingPage = () => {
  const handleApplyClick = () => {
    // This will be replaced with the affiliate link you provide
    window.location.href = "https://rewarrdsgiant.com/aff_c?offer_id=1970&aff_id=149306&source=1.1"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 text-center relative">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
              <img 
                src="/lovable-uploads/spotify-logo.png" 
                alt="Spotify Logo" 
                className="w-16 h-16"
              />
            </div>
            <div className="text-green-400 text-sm font-medium">Now Hiring</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Paid to Listen to<br />
            <span className="text-green-400">Spotify!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Earn $36/hour reviewing new albums and playlists from your favorite artists!
          </p>
          
          <Button 
            onClick={handleApplyClick}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Become a Spotify Reviewer?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Testimonial Card */}
          <Card className="bg-gray-800/50 border-gray-700 col-span-1 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-white">Chris from Montana - ★★★★★</span>
              </div>
              <div className="text-green-400 font-semibold mb-2">Got $764.00 payout</div>
              <div className="text-sm text-white mb-3">10 minutes ago</div>
              <div className="text-xs text-white">Verified by SPOTIFY</div>
            </CardContent>
          </Card>

          {/* Feature Cards */}
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Competitive Pay</h3>
              <p className="text-sm text-white">Earn $36/hour reviewing music</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Flexible Hours</h3>
              <p className="text-sm text-white">Work on your schedule</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Early Access</h3>
              <p className="text-sm text-white">Listen to tracks before release</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Music Discovery</h3>
              <p className="text-sm text-white">Find tomorrow's hits today</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What You'll Do Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gray-800/30 border-gray-700 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
              What You'll Do
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-lg text-white">Listen and rate Spotify content</span>
              </div>
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-lg text-white">Provide feedback on new album releases</span>
              </div>
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-lg text-white">Identify playlist recommendations</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How to Apply Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How to Apply
        </h2>
        <p className="text-white text-center mb-12">
          Three simple steps to start your journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="font-semibold mb-3 text-white">Click "Apply Now"</h3>
              <p className="text-sm text-white">Start your Spotify reviewer journey</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold mb-3 text-white">Complete Profile</h3>
              <p className="text-sm text-white">Share basic details about yourself and music skills in 2 minutes</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold mb-3 text-white">Get Matched</h3>
              <p className="text-sm text-white">Receive personalised job opportunities</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleApplyClick}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Dream Job?
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Join our team of music reviewers and turn your love for streaming into a rewarding career.
        </p>
        
        <div className="bg-gray-800/30 rounded-lg p-6 max-w-3xl mx-auto mb-8">
          <p className="text-green-400 text-sm mb-2">
            <strong>Important:</strong> Spotify Reviewer positions are exclusively available for US citizens, UK, Canadian, and Australian residents can claim a $500/£250 gift card by clicking the Apply button.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Headphones className="w-6 h-6 text-black fill-current" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage 