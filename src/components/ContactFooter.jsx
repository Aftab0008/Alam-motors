import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactFooter() {
  return (
    <footer className="bg-gradient-to-r from-black to-red-700 text-white py-6 text-center shadow-lg">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-red-400" />
              <span>alammotors4545@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-400" />
              <span>+91 7061885135,+91 9135156440</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-red-400" />
              <span>Sri Krishna Nagar, Kidwaipuri, Patna, Bihar 800001, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="/booking" className="hover:text-red-400 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Location Box (Map) */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Our Location</h3>
            <div className="overflow-hidden rounded-xl shadow-lg border border-red-700 hover:scale-105 transition-transform duration-500">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.616194980009!2d85.12050287517812!3d25.61766687744268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58375e5feb71%3A0x2201120da0630b53!2sRam%20Suchit%20Mishra%20Path%2C%20Sri%20Krishna%20Nagar%2C%20Kidwaipuri%2C%20Patna%2C%20Bihar%20800001%2C%20India!5e0!3m2!1sen!2sus!4v1755633008679!5m2!1sen!2sus"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>
            <p className="text-red-300 text-sm mb-4">Subscribe to our newsletter for updates and insights.</p>

            {/* Newsletter Form */}
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-red-800 border border-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/__alam_motors" className="text-red-400 hover:text-red-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-red-400 text-sm">
              © 2024 Your Company Name. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-red-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-red-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-red-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
