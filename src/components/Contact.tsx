import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
      <section id="contact" className="bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-white text-center mb-4">Let's Talk</h2>
            <p className="text-gray-400 text-center mb-12">Have a project in mind? Let's create something amazing
              together.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-green-400/10 text-green-400 rounded-full">
                    <Mail className="w-6 h-6"/>
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Email</h3>
                    <a href="mailto:contact@example.com"
                       className="text-gray-400 hover:text-green-400 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-green-400/10 text-green-400 rounded-full">
                    <Phone className="w-6 h-6"/>
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-400 hover:text-green-400 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-green-400/10 text-green-400 rounded-full">
                    <MapPin className="w-6 h-6"/>
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1">Location</h3>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-green-400/5 border border-green-400/20 text-white rounded-lg focus:outline-none focus:border-green-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-green-400/5 border border-green-400/20 text-white rounded-lg focus:outline-none focus:border-green-400 transition-colors"
                  />
                </div>
                <div>
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-6 py-4 bg-green-400/5 border border-green-400/20 text-white rounded-lg focus:outline-none focus:border-green-400 transition-colors resize-none"
                ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-4 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;