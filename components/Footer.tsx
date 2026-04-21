import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg">Turavia Travel</span>
            </div>
            <p className="text-sm text-card/70 mb-4">
              Creating unforgettable travel experiences across Asia for over 15 years.
            </p>
            <div className="space-y-2 text-sm text-card/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Street, Semarang</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 (0) 2-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@turaviatravels.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-card">Quick Links</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li><a href="#tours" className="hover:text-card transition-colors">Our Tours</a></li>
              <li><a href="#regions" className="hover:text-card transition-colors">Destinations</a></li>
              <li><a href="#blog" className="hover:text-card transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-card transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold mb-4 text-card">Information</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li><a href="#" className="hover:text-card transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Booking Terms</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-card">Newsletter</h4>
            <p className="text-sm text-card/70 mb-4">
              Subscribe for travel tips, special offers, and exclusive deals.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-card text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-card/70">
            <p>&copy; 2026 Turavia Travel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-card transition-colors">Instagram</a>
              <a href="#" className="hover:text-card transition-colors">Facebook</a>
              <a href="#" className="hover:text-card transition-colors">Twitter</a>
              <a href="#" className="hover:text-card transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
