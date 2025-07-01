import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MapPin, Heart, Camera } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/fhotofocus-logo.png"
                  alt="FhotoFocus Photography Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium">FhotoFocus</h3>
                <p className="text-gray-400 text-sm">Photography</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Capturing life's most precious moments with artistry, passion, and an eye for timeless beauty. Every frame
              tells a story, every story deserves to be remembered.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-amber-400">500+</div>
                <div className="text-gray-400 text-sm">Weddings</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-amber-400">8+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-xl font-medium">Explore</h4>
            <nav className="space-y-3">
              {[
                { name: "Gallery", href: "/gallery" },
                { name: "Our Stories", href: "/blogs" },
                { name: "Achievements", href: "/achievements" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display text-xl font-medium">Services</h4>
            <div className="space-y-3">
              {[
                "Wedding Photography",
                "Pre-Wedding Sessions",
                "Fashion Photography",
                "Portrait Sessions",
                "Event Coverage",
                "Destination Weddings",
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 text-gray-300">
                  <Camera className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-xl font-medium">Get in Touch</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Call us</p>
                  <a href="tel:+919876543210" className="text-white hover:text-amber-400 transition-colors font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Email us</p>
                  <a
                    href="mailto:fhotofocusphotography@gmail.com"
                    className="text-white hover:text-amber-400 transition-colors font-medium break-all"
                  >
                    fhotofocusphotography@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Based in</p>
                  <p className="text-white font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-gray-300 text-sm mb-3">Follow our journey</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/fhotofocusphotography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@fhotofocusphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a2.997 2.997 0 00-2.115-2.117C19.611 3.5 12 3.5 12 3.5s-7.611 0-9.383.569a2.997 2.997 0 00-2.115 2.117A31.88 31.88 0 000 12a31.88 31.88 0 00.502 5.814 2.997 2.997 0 002.115 2.117c1.772.569 9.383.569 9.383.569s7.611 0 9.383-.569a2.997 2.997 0 002.115-2.117A31.88 31.88 0 0024 12a31.88 31.88 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} FhotoFocus Photography. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in India</span>
            </div>

            {/* Credits */}
            <div className="text-gray-400 text-sm">
              <span>Crafted by </span>
              <a
                href="https://www.shrishtiwebsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors underline"
              >
                ShrishtiWebSolutions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"></div>
    </footer>
  )
}
