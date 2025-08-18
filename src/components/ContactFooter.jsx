import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

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
              <span>hello@company.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-red-400" />
              <span>123 Business St, City, ST 12345</span>
            </div>
          </div>

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
              <a href="#" className="text-red-400 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-400 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-400 hover:text-red-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-400 hover:text-red-400 transition-colors">
                <Github className="h-5 w-5" />
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
