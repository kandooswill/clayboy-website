export default function Home() {
  return (
    // Copy the HTML content from the artifact above<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CLAYBOY - Handcrafted Luxury Ceramics</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
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
    </style>
</head>
<body class="bg-black text-white font-inter">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="font-playfair text-2xl font-bold gradient-text">CLAYBOY</div>
                <div class="hidden md:flex space-x-8 font-medium">
                    <a href="#home" class="hover:text-yellow-400 transition-colors">Home</a>
                    <a href="#collection" class="hover:text-yellow-400 transition-colors">Collection</a>
                    <a href="#about" class="hover:text-yellow-400 transition-colors">About</a>
                    <a href="#contact" class="hover:text-yellow-400 transition-colors">Contact</a>
                </div>
                <button class="md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 z-10">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h1 class="font-playfair text-6xl md:text-8xl font-black leading-tight">
                            <span class="gradient-text">DIVINE</span><br>
                            <span class="text-white">CERAMICS</span>
                        </h1>
                        <p class="text-xl text-gray-300 font-light leading-relaxed">
                            Handcrafted luxury sculptures merging pop culture with sacred art. 
                            Each piece is a limited edition masterpiece.
                        </p>
                    </div>
                    <div class="flex space-x-6">
                        <button onclick="scrollToSection('collection')" class="golden-border px-8 py-4 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                            VIEW COLLECTION
                        </button>
                        <button onclick="scrollToSection('about')" class="border border-gray-600 px-8 py-4 font-semibold hover:border-yellow-400 transition-colors">
                            OUR STORY
                        </button>
                    </div>
                    <div class="flex space-x-8 text-sm text-gray-400">
                        <div>
                            <div class="text-2xl font-bold text-yellow-400">12</div>
                            <div>Limited Pieces</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-yellow-400">100%</div>
                            <div>Handcrafted</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-yellow-400">∞</div>
                            <div>Uniqueness</div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="floating-animation">
                        <div class="w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl absolute -top-20 -right-20"></div>
                        <div class="ceramic-shadow bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative">
                            <div class="text-center">
                                <div class="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-full flex items-center justify-center mb-6">
                                    <div class="text-6xl">🏺</div>
                                </div>
                                <h3 class="font-playfair text-2xl font-bold mb-2">Sacred Pop</h3>
                                <p class="text-gray-400">Where divinity meets culture</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Collection Section -->
    <section id="collection" class="py-20 bg-gray-900">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16 reveal-on-scroll">
                <h2 class="font-playfair text-5xl font-bold mb-6">
                    <span class="gradient-text">Limited</span> Collection
                </h2>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                    Each sculpture is meticulously crafted in limited quantities. 
                    Own a piece of cultural fusion artistry.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Product 1 -->
                <div class="product-hover ceramic-shadow bg-gray-800 rounded-2xl overflow-hidden reveal-on-scroll">
                    <div class="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                        <div class="text-8xl">🙏</div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-playfair text-xl font-bold">Divine Pop</h3>
                            <span class="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">3/10 LEFT</span>
                        </div>
                        <p class="text-gray-400 mb-4">Sacred geometry meets street art aesthetic</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold gradient-text">$2,400</span>
                            <button class="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 2 -->
                <div class="product-hover ceramic-shadow bg-gray-800 rounded-2xl overflow-hidden reveal-on-scroll">
                    <div class="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-600/20 flex items-center justify-center">
                        <div class="text-8xl">🕉️</div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-playfair text-xl font-bold">Cosmic Buddha</h3>
                            <span class="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">SOLD OUT</span>
                        </div>
                        <p class="text-gray-400 mb-4">Enlightenment in contemporary form</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold gradient-text">$3,200</span>
                            <button disabled class="bg-gray-600 text-gray-400 px-4 py-2 rounded font-semibold cursor-not-allowed">
                                SOLD OUT
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 3 -->
                <div class="product-hover ceramic-shadow bg-gray-800 rounded-2xl overflow-hidden reveal-on-scroll">
                    <div class="aspect-square bg-gradient-to-br from-purple-400/20 to-pink-600/20 flex items-center justify-center">
                        <div class="text-8xl">⚡</div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-playfair text-xl font-bold">Thunder God</h3>
                            <span class="bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">NEW</span>
                        </div>
                        <p class="text-gray-400 mb-4">Ancient power, modern interpretation</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold gradient-text">$2,800</span>
                            <button class="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <button class="golden-border px-8 py-4 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    VIEW ALL PIECES
                </button>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-black">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div class="reveal-on-scroll">
                    <h2 class="font-playfair text-5xl font-bold mb-8">
                        <span class="gradient-text">Crafting</span><br>
                        <span class="text-white">Sacred Stories</span>
                    </h2>
                    <div class="space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            CLAYBOY was born from a vision to bridge the ancient and the contemporary, 
                            the sacred and the popular. Each piece tells a story that transcends time 
                            and culture.
                        </p>
                        <p>
                            Our ceramics are handcrafted using traditional techniques passed down through 
                            generations, infused with contemporary artistic vision that speaks to today's 
                            cultural landscape.
                        </p>
                        <p>
                            Every sculpture is a limited edition, ensuring that your piece remains as 
                            unique as the inspiration behind it.
                        </p>
                    </div>
                    <div class="mt-8">
                        <button class="golden-border px-8 py-4 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                            MEET THE ARTIST
                        </button>
                    </div>
                </div>
                <div class="reveal-on-scroll">
                    <div class="ceramic-shadow bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
                        <div class="grid grid-cols-2 gap-6 text-center">
                            <div>
                                <div class="text-3xl font-bold gradient-text mb-2">5+</div>
                                <div class="text-gray-400">Years Crafting</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold gradient-text mb-2">100+</div>
                                <div class="text-gray-400">Pieces Created</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold gradient-text mb-2">50+</div>
                                <div class="text-gray-400">Happy Collectors</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold gradient-text mb-2">∞</div>
                                <div class="text-gray-400">Passion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10">
        <div class="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
            <h3 class="font-playfair text-3xl font-bold mb-4">Stay Connected</h3>
            <p class="text-gray-400 mb-8">Be the first to know about new releases and exclusive pieces</p>
            <div class="flex max-w-md mx-auto">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400"
                >
                <button class="bg-yellow-400 text-black px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-300 transition-colors">
                    SUBSCRIBE
                </button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="py-12 bg-gray-900 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <div class="font-playfair text-2xl font-bold gradient-text mb-4">CLAYBOY</div>
                    <p class="text-gray-400">Handcrafted luxury ceramics where divine meets contemporary.</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Quick Links</h4>
                    <div class="space-y-2 text-gray-400">
                        <div><a href="#home" class="hover:text-yellow-400 transition-colors">Home</a></div>
                        <div><a href="#collection" class="hover:text-yellow-400 transition-colors">Collection</a></div>
                        <div><a href="#about" class="hover:text-yellow-400 transition-colors">About</a></div>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Contact</h4>
                    <div class="space-y-2 text-gray-400">
                        <div>hello@clayboy.com</div>
                        <div>+1 (555) 123-4567</div>
                        <div>Instagram @clayboy</div>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Legal</h4>
                    <div class="space-y-2 text-gray-400">
                        <div><a href="#" class="hover:text-yellow-400 transition-colors">Privacy Policy</a></div>
                        <div><a href="#" class="hover:text-yellow-400 transition-colors">Terms of Service</a></div>
                        <div><a href="#" class="hover:text-yellow-400 transition-colors">Shipping Info</a></div>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 CLAYBOY. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

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

        // Add to cart functionality (placeholder)
        document.querySelectorAll('button').forEach(button => {
            if (button.textContent.includes('ADD TO CART')) {
                button.addEventListener('click', function() {
                    alert('Payment integration coming soon! Contact us directly for now.');
                });
            }
        });

        // Navigation active state
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-black');
            } else {
                navbar.classList.remove('bg-black');
                navbar.classList.add('bg-black/90');
            }
        });
    </script>
</body>
</html>
  )
}