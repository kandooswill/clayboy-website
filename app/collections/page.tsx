'use client'

import { useState } from 'react'
import { Menu, ShoppingCart, User, Search, Star, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CollectionsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const categories = ['ALL', 'CERAMICS', 'FOOTWEAR', 'ACCESSORIES']
  
  const products = [
    {
      id: 1,
      name: 'ASHTRAY SET BY SETH',
      price: 98,
      rating: 4.9,
      reviews: 191,
      category: 'CERAMICS',
      colors: ['INDIGO', 'TANGERINE', 'MOSS', 'MIDNIGHT', 'SAND'],
      bgColor: 'from-amber-200 to-amber-300'
    },
    {
      id: 2,
      name: 'CERAMIC BOWL SET',
      price: 125,
      rating: 4.8,
      reviews: 89,
      category: 'CERAMICS',
      colors: ['NATURAL', 'BLACK', 'WHITE'],
      bgColor: 'from-stone-200 to-stone-300'
    },
    {
      id: 3,
      name: 'TAIGA SNEAKERS',
      price: 185,
      rating: 4.7,
      reviews: 324,
      category: 'FOOTWEAR',
      colors: ['WHITE', 'BLACK', 'CREAM'],
      bgColor: 'from-blue-200 to-blue-300'
    },
    {
      id: 4,
      name: 'TAIGA HI SNEAKERS',
      price: 205,
      rating: 4.8,
      reviews: 156,
      category: 'FOOTWEAR',
      colors: ['WHITE/RED', 'BLACK/WHITE', 'CREAM/BROWN'],
      bgColor: 'from-red-300 to-red-400'
    },
    {
      id: 5,
      name: 'WOVEN SCARF',
      price: 75,
      rating: 4.6,
      reviews: 67,
      category: 'ACCESSORIES',
      colors: ['NAVY', 'CHARCOAL', 'CREAM'],
      bgColor: 'from-indigo-200 to-indigo-300'
    },
    {
      id: 6,
      name: 'LEATHER TOTE',
      price: 295,
      rating: 4.9,
      reviews: 234,
      category: 'ACCESSORIES',
      colors: ['TAN', 'BLACK', 'COGNAC'],
      bgColor: 'from-yellow-200 to-yellow-300'
    }
  ]

  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

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

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav className="text-sm text-stone-600 font-light tracking-wide">
            <a href="/" className="hover:text-stone-800 transition-colors">HOME</a>
            <span className="mx-3">/</span>
            <span className="text-stone-800">COLLECTIONS</span>
          </nav>
        </div>

        {/* Page Title */}
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-stone-800 tracking-wide">
            ALL COLLECTIONS
          </h1>
        </div>

        {/* Filter Bar */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-2 text-stone-600">
              <Filter size={20} />
              <span className="font-light">FILTER:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-light tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'bg-stone-800 text-white'
                    : 'bg-white text-stone-800 border border-stone-300 hover:border-stone-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden mb-4">
                  <div className={`bg-gradient-to-br ${product.bgColor} h-80 w-full transition-transform duration-700 group-hover:scale-105`}></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  
                  {/* Quick Add Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-stone-800 px-6 py-2 font-light tracking-wider hover:bg-stone-100 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    QUICK ADD
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-stone-800 tracking-wide group-hover:text-stone-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="text-amber-400 fill-current" size={16} />
                      <span className="text-sm font-light text-stone-600 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm font-light text-stone-500">
                      {product.reviews} REVIEWS
                    </span>
                  </div>

                  {/* Colors */}
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-light text-stone-600 bg-stone-100 px-2 py-1 tracking-wider"
                      >
                        {color}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-light text-stone-800">
                    ${product.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}