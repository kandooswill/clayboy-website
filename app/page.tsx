'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling function
    (window as any).scrollToSection = (sectionId: string) => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth'
      });
    };

    // Reveal on scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Add to cart functionality
    document.querySelectorAll('button').forEach(button => {
      if (button.textContent?.includes('ADD TO CART')) {
        button.addEventListener('click', function() {
          alert('Payment integration coming soon! Contact us directly for now.');
        });
      }
    });

    // Navigation active state
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 100) {
        navbar?.classList.add('bg-black');
      } else {
        navbar?.classList.remove('bg-black');
        navbar?.classList.add('bg-black/90');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .gradient-text {
          background: linear-gradient(135deg, #d4af37, #ffd700, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-bg {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0a0a0a 100%);
        }
        
        .ceramic-shadow {
          box-shadow: 0 25px 50px -12px rgba(212, 175, 55, 0.25);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        .product-hover {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-hover:hover {
          transform: translateY(-10px) scale(1.02);
        }
        
        .golden-border {
          border: 2px solid transparent;
          background: linear-gradient(135deg, #d4af37, #ffd700) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: subtract;
        }
      `}</style>

      <div className="bg-black text-white font-inter">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="font-playfair text-2xl font-bold gradient-text">CLAYBOY</div>
              <div className="hidden md:flex space-x-8 font-medium">
                <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
                <a href="#collection" className="hover:text-yellow-400 transition-colors">Collection</a>
                <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
              </div>
              <button className="md:hidden text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-playfair text-6xl md:text-8xl font-black leading-tight">
                    <span className="gradient-text">DIVINE</span><br/>
                    <span className="text-white">CERAMICS</span>
                  </h1>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    Handcrafted luxury sculptures merging pop culture with sacred art. 
                    Each piece is a limited edition masterpiece.
                  </p>
                </div>
                <div className="flex space-x-6">
                  <button onClick={() => (window as any).scrollToSection('collection')} className="golden-border px-8 py-4 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    VIEW COLLECTION
                  </button>
                  <button onClick={() => (window as any).scrollToSection('about')} className="border border-gray-600 px-8 py-4 font-semibold hover:border-yellow-400 transition-colors">
                    OUR STORY
                  </button>
                </div>
                <div className="flex space-x-8 text-sm text-gray-400">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">12</div>
                    <div>Limited Pieces</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">100%</div>
                    <div>Handcrafted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">∞</div>
                    <div>Uniqueness</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="floating-animation">
                  <div className="w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl absolute -top-20 -right-20"></div>
                  <div className="ceramic-shadow bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-full flex items-center justify-center mb-6">
                        <div className="text-6xl">🏺</div>
                      </div>
                      <h3 className="font-playfair text-2xl font-bold mb-2">Sacred Pop</h3>
                      <p className="text-gray-400">Where divinity meets culture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="font-playfair text-5xl font-bold mb-6">
                <span className="gradient-text">Limited</span> Collection
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Each sculpture is meticulously crafted in limited quantities. 
                Own a piece of cultural fusion artistry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="product-hover ceramic-shadow bg-gray-800 rounded-2xl overflow-hidden reveal-on-scroll">
                <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                  <div className="text-8xl">🙏</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl font-bold">Divine Pop</h3>
                    <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">3/10 LEFT</span>
                  </div>
                  <p className="text-gray-400 mb-4">Sacred geometry meets street art aesthetic</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold gradient-text">$2,400</span>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="product-hover ceramic-shadow bg-gray-800 rounded-2xl overflow-hidden reveal-on-scroll">
                <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-8xl">🕉️</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl font-bold">Cosmic Buddha</h3>
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">SOLD OUT</span>
                  </div>
                  <p className="text-gray-400 mb-4">Enlightenment in contemporary form</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold gradient-text">$3,200</span>
                    <button disabled className="bg-gray-600 text-gray-400 px-4 py-2 rounded font-semibold cursor-not-allowed">
                      SOLD OUT
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="product-hover ceramic-shadow bg-gray-800 rounded-2xl overflow-hidden reveal-on-scroll">
                <div className="aspect-square bg-gradient-to-br from-purple-400/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-8xl">⚡</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl font-bold">Thunder God</h3>
                    <span className="bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">NEW</span>
                  </div>
                  <p className="text-gray-400 mb-4">Ancient power, modern interpretation</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold gradient-text">$2,800</span>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="golden-border px-8 py-4 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                VIEW ALL PIECES
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal-on-scroll">
                <h2 className="font-playfair text-5xl font-bold mb-8">
                  <span className="gradient-text">Crafting</span><br/>
                  <span className="text-white">Sacred Stories</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    CLAYBOY was born from a vision to bridge the ancient and the contemporary, 
                    the sacred and the popular. Each piece tells a story that transcends time 
                    and culture.
                  </p>
                  <p>
                    Our ceramics are handcrafted using traditional techniques passed down through 
                    generations, infused with contemporary artistic vision that speaks to today&apos;s 
                    cultural landscape.
                  </p>
                  <p>
                    Every sculpture is a limited edition, ensuring that your piece remains as 
                    unique as the inspiration behind it.
                  </p>
                </div>
                <div className="mt-8">
                  <button className="golden-border px-8 py-4 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    MEET THE ARTIST
                  </button>
                </div>
              </div>
              <div className="reveal-on-scroll">
                <div className="ceramic-shadow bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                      <div className="text-gray-400">Years Crafting</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                      <div className="text-gray-400">Pieces Created</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                      <div className="text-gray-400">Happy Collectors</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                      <div className="text-gray-400">Passion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
            <h3 className="font-playfair text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-8">Be the first to know about new releases and exclusive pieces</p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400"
              />
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-300 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="font-playfair text-2xl font-bold gradient-text mb-4">CLAYBOY</div>
                <p className="text-gray-400">Handcrafted luxury ceramics where divine meets contemporary.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-gray-400">
                  <div><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></div>
                  <div><a href="#collection" className="hover:text-yellow-400 transition-colors">Collection</a></div>
                  <div><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <div>hello@clayboy.com</div>
                  <div>+1 (555) 123-4567</div>
                  <div>Instagram @clayboy</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <div className="space-y-2 text-gray-400">
                  <div><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></div>
                  <div><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></div>
                  <div><a href="#" className="hover:text-yellow-400 transition-colors">Shipping Info</a></div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 CLAYBOY. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}