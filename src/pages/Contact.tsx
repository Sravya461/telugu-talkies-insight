
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-cyan-400" />
              <h1 className="text-2xl font-bold text-white">Telugu Cinema Hub</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">Home</Link>
              <Link to="/reviews" className="text-white hover:text-cyan-400 transition-colors font-medium">All Reviews</Link>
              <Link to="/top-rated" className="text-white hover:text-cyan-400 transition-colors font-medium">Top Rated</Link>
              <Link to="/latest" className="text-white hover:text-cyan-400 transition-colors font-medium">Latest Movies</Link>
              <Link to="/upcoming" className="text-white hover:text-cyan-400 transition-colors font-medium">Upcoming</Link>
              <Link to="/contact" className="text-cyan-400 font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Get in <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about Telugu movies? Want to suggest a review? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-500 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">reddyhemanth142@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-500 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">+91 8790026979</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-500 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Address</h3>
                      <p className="text-gray-300">Nellore, Andhra Pradesh<br />India 524101</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-2xl">Why Contact Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Suggest movies for review</li>
                    <li>• Report any issues with the website</li>
                    <li>• Partnership opportunities</li>
                    <li>• General feedback about our reviews</li>
                    <li>• Media and press inquiries</li>
                    <li>• Technical support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 bg-white/10 border border-cyan-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardContent className="p-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">How often do you update reviews?</h4>
                  <p className="text-gray-300">We update our reviews weekly with the latest Telugu movie releases and re-reviews of classic films.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardContent className="p-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">Can I submit movie suggestions?</h4>
                  <p className="text-gray-300">Absolutely! Use the contact form above to suggest movies you'd like us to review.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardContent className="p-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">Do you cover only new releases?</h4>
                  <p className="text-gray-300">No, we cover both new releases and classic Telugu films from all eras of cinema.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-cyan-500/30">
                <CardContent className="p-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">How can I advertise with you?</h4>
                  <p className="text-gray-300">For advertising and partnership opportunities, please contact us using the form above.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
