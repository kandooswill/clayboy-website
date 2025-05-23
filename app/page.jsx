export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold text-xl">🏺</span>
            </div>
            <h1 className="text-2xl font-bold">ClayBoy Ceramics</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-amber-200 transition-colors">About</a>
            <a href="#gallery" className="hover:text-amber-200 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-amber-200 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Handcrafted Clay
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
              Masterpieces
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the ancient art of pottery reimagined for modern living. Each piece tells a story of earth, fire, and human creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Collection
            </button>
            <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300">
              Watch Process
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">The Art of Clay</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For over two decades, I've been shaping clay into functional art that brings warmth and character to everyday life. Each piece is hand-thrown on the potter's wheel, using techniques passed down through generations of ceramic artists.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My work draws inspiration from both traditional forms and contemporary design, creating pieces that honor the past while speaking to modern sensibilities.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Handcrafted Excellence</h4>
                  <p className="text-gray-600">Every piece is unique, created with passion and precision</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl p-8 transform rotate-3 shadow-lg">
                <div className="bg-white rounded-xl p-6 transform -rotate-3">
                  <div className="w-full h-64 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">🏺</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sunset Vase", description: "Hand-thrown ceramic with gradient glaze", price: "$85" },
              { name: "Morning Bowl Set", description: "Perfect for your daily rituals", price: "$120" },
              { name: "Earth Pitcher", description: "Rustic charm meets modern function", price: "$95" },
              { name: "Meditation Cups", description: "Set of 4 minimalist tea cups", price: "$65" },
              { name: "Garden Planter", description: "Large vessel for your green friends", price: "$150" },
              { name: "Serving Platter", description: "Statement piece for entertaining", price: "$110" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-200 transition-colors duration-300">
                  <span className="text-4xl">🏺</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-2">{item.name}</h4>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-700 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in commissioning a custom piece or learning more about my work? I'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
              <p className="text-gray-600">hello@clayboy.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Studio</h4>
              <p className="text-gray-600">123 Artisan Lane<br />Potter's District</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-bold">🏺</span>
            </div>
            <span className="text-xl font-bold">ClayBoy Ceramics</span>
          </div>
          <p className="text-amber-100 mb-4">Handcrafted with love, fired with passion</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-amber-200 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Facebook</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Pinterest</a>
          </div>
          <p className="text-amber-200 text-sm">© 2024 ClayBoy Ceramics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}