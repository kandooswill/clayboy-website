'use client'

import { useState } from 'react'
import { Menu, ShoppingCart, User, Search, Instagram, Twitter, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-stone-800 hover:text-stone-600 transition-colors"
          >
            <Menu size={24} />
          </button>
          
          <div className="text-2xl font-bold text-stone-800 tracking-wider">
            YOUR BRAND
          </div>
          
          <div className="flex items-center gap-4">
            <Search className="text-stone-800 hover:text-stone-600 cursor-pointer transition-colors" size={20} />
            <User className="text-stone-800 hover:text-stone-600 cursor-pointer transition-colors" size={20} />
            <div className="relative">
              <ShoppingCart className="text-stone-800 hover:text-stone-600 cursor-pointer transition-colors" size={20} />
              <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-white z-50 pt-20"
        >
          <div className="container mx-auto px-4">
            <nav className="space-y-6">
              <a href="/" className="block text-2xl font-light text-stone-800 hover:text-stone-600 transition-colors">HOME</a>
              <a href="/collections" className="block text-2xl font-light text-stone-800 hover:text-stone-600 transition-colors">COLLECTIONS</a>
              <a href="/about" className="block text-2xl font-light text-stone-800 hover:text-stone-600 transition-colors">ABOUT</a>
              <a href="/contact" className="block text-2xl font-light text-stone-800 hover:text-stone-600 transition-colors">CONTACT</a>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Hero Section with Video Placeholder */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-200 to-amber-200"></div>
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-stone-800 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            DISCOVER
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wide">
            TIMELESS DESIGN
          </h2>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Curated collections that blend functionality with artistic expression. 
            Each piece tells a story of craftsmanship and intentional design.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-stone-800 text-white px-12 py-4 text-lg font-light tracking-wider hover:bg-stone-700 transition-colors border border-stone-800"
          >
            EXPLORE NOW
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light text-center mb-16 text-stone-800 tracking-wide"
          >
            FEATURED
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <div className="bg-gradient-to-br from-amber-200 to-amber-300 h-96 w-full transition-transform duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-light mb-2 text-stone-800 tracking-wide">CERAMICS</h3>
              <p className="text-stone-600 font-light">Handcrafted pieces that celebrate organic forms</p>
              <button className="mt-4 text-stone-800 font-light tracking-wider border-b border-stone-800 hover:border-stone-600 transition-colors">
                SEE ALL
              </button>
            </motion.div>

            {/* Collection 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <div className="bg-gradient-to-br from-red-400 to-red-500 h-96 w-full transition-transform duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-light mb-2 text-stone-800 tracking-wide">FOOTWEAR</h3>
              <p className="text-stone-600 font-light">Contemporary designs with timeless appeal</p>
              <button className="mt-4 text-stone-800 font-light tracking-wider border-b border-stone-800 hover:border-stone-600 transition-colors">
                SEE ALL
              </button>
            </motion.div>

            {/* Collection 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <div className="bg-gradient-to-br from-blue-300 to-blue-400 h-96 w-full transition-transform duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-light mb-2 text-stone-800 tracking-wide">ACCESSORIES</h3>
              <p className="text-stone-600 font-light">Thoughtfully designed for everyday elegance</p>
              <button className="mt-4 text-stone-800 font-light tracking-wider border-b border-stone-800 hover:border-stone-600 transition-colors">
                SEE ALL
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light mb-8 tracking-wide"
          >
            GET EXCLUSIVE NEWS & CONTENT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            By clicking 'SIGN UP,' I represent I am at least the age of twenty-one (21). I have read, 
            understood, and agree to the Terms of Service and Privacy Policy and I agree to receive 
            emails and customer service communications from us via email.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button className="bg-white text-stone-800 px-8 py-4 font-light tracking-wider hover:bg-stone-100 transition-colors">
              SIGN UP
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <nav className="space-y-4">
                <a href="/about" className="block text-xl font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide">ABOUT</a>
                <a href="/contact" className="block text-xl font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide">CONTACT US</a>
                <a href="/refer" className="block text-xl font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide">REFER A FRIEND</a>
                <a href="/accessibility" className="block text-xl font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide">ACCESSIBILITY</a>
                <a href="/faqs" className="block text-xl font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide">FAQS</a>
                <a href="/privacy" className="block text-xl font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide">PRIVACY POLICY</a>
                <a href="/terms" className="block text-xl font-light text-stone-800 hover:text-stone-600 transition-colors tracking-wide">TERMS OF SERVICE</a>
              </nav>
            </div>
            
            <div className="text-right">
              <div className="flex justify-end gap-6 mb-8">
                <Instagram className="text-stone-800 hover:text-stone-600 cursor-pointer transition-colors" size={24} />
                <Twitter className="text-stone-800 hover:text-stone-600 cursor-pointer transition-colors" size={24} />
                <Facebook className="text-stone-800 hover:text-stone-600 cursor-pointer transition-colors" size={24} />
              </div>
              <div className="space-y-2 text-stone-600 font-light">
                <p>Managing Data | Privacy Preferences</p>
                <p>Do Not Sell My Personal Information</p>
                <p>Interest-Based Ads</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-stone-300 text-center">
            <h1 className="text-6xl md:text-8xl font-light text-stone-800 tracking-wider">
              YOUR BRAND
            </h1>
          </div>
        </div>
      </footer>
    </div>
  )
}