'use client'

import { useState } from 'react'
import { Menu, ShoppingCart, User, Search, Star, Plus, Minus, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('SAND')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = {
    name: 'ASHTRAY SET BY SETH',
    price: 98,
    rating: 4.9,
    reviews: 191,
    description: "Seth used his pottery skills to design the perfect ashtray that also comes with a saucer and a matching vase for flowers.",
    story: `Seth did not make each one of these ashtrays (his ceramics studio is literally in a garage and not built for mass production), but he did work closely with our fabricator to produce this set and ensure it was up to his standards, which are quite high when it comes to ashtrays.

Each item will have variance in color. The images you see here may not reflect the exact item you receive with your order.`,
    colors: [
      { name: 'INDIGO', bgColor: 'from-indigo-400 to-indigo-500' },
      { name: 'TANGERINE', bgColor: 'from-orange-400 to-orange-500' },
      { name: 'MOSS', bgColor: 'from-green-400 to-green-500' },
      { name: 'MIDNIGHT', bgColor: 'from-slate-700 to-slate-800' },
      { name: 'SAND', bgColor: 'from-amber-200 to-amber-300' }
    ],
    features: [
      'Designed by Seth',
      'Crafted to his incredibly specific guidelines for the perfect ashtray set',
      'Deep well ceramic ashtray with a notch',
      'Saucer for the ashtray that can be another ashtray if you want',
      'Matching vase for flowers because flowers are lovely'
    ],
    materials: [
      'High-fired ceramic',
      'Food-safe glaze',
      'Hand-finished details'
    ],
    dimensions: [
      'Ashtray: 6" diameter x 2" height',
      'Saucer: 7" diameter x 1" height', 
      'Vase: 4" diameter x 8" height'
    ],
    images: [
      { bgColor: 'from-amber-200 to-amber-300' },
      { bgColor: 'from-amber-300 to-amber-400' },
      { bgColor: 'from-stone-200 to-amber-200' }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
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

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
            
        </div>