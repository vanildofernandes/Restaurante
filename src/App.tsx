/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Pizza, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  UtensilsCrossed,
  Heart,
  MessageSquare,
  MessageCircle
} from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/351916024561"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
        Fale connosco
      </span>
    </motion.a>
  );
};

const FullMenu = ({ onBack }: { onBack: () => void }) => {
  const menuData = [
    {
      category: "Clássicas",
      items: [
        { name: "Kids", desc: "Molho, Fiambre, Azeitonas e Queijo (Forma de Coelho)", prices: ["7.5€", "---", "---"], img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200" },
        { name: "Mista", desc: "Molho de tomate, fiambre selecionado e queijo mozzarella", prices: ["8.5€", "10.5€", "12.5€"], img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=200" },
        { name: "Rústica", desc: "Molho, chourição artesanal, azeitonas, pimentos frescos e queijo", prices: ["9€", "11.5€", "14€"], img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=200" },
        { name: "Carbonara", desc: "Molho, bacon crocante, cebola, cogumelos, natas e queijo", prices: ["9.5€", "13€", "16€"], img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200" },
        { name: "Tropical", desc: "Molho, fiambre, cogumelos, ananás, camarão e queijo", prices: ["11€", "14.5€", "17.5€"], img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=200" },
        { name: "Peperoni", desc: "Molho de tomate, peperoni picante, orégãos e queijo", prices: ["9€", "11.5€", "14€"], img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=200" },
        { name: "Calzone Tradicional", desc: "Pizza fechada com molho, fiambre, bacon e queijo", prices: ["---", "10.5€", "---"], img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=200" },
        { name: "Calzone Barbecue", desc: "Pizza fechada com molho BBQ, bacon, frango e queijo", prices: ["---", "12€", "---"], img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=200" },
      ]
    },
    {
      category: "Carne e Peixe",
      items: [
        { name: "Ressaca", desc: "Molho, carne picada, pimentos, cogumelos e queijo", prices: ["11€", "14.5€", "17.5€"], img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200" },
        { name: "Mexicana", desc: "Molho, fiambre, carne picada, azeitonas, tabasco e queijo", prices: ["11€", "14.5€", "17.5€"], img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=200" },
        { name: "Poio", desc: "Molho, chourição, fiambre, bacon, cogumelos e queijo", prices: ["11.5€", "16€", "19€"], img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=200" },
        { name: "Kebab", desc: "Molho, carne de kebab, milho, cebola roxa e queijo", prices: ["10€", "14€", "17€"], img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=200" },
        { name: "Do Mar", desc: "Molho, delícias do mar, camarão, pimentos, cebola e queijo", prices: ["10€", "14.5€", "17.5€"], img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=200" },
      ]
    },
    {
      category: "Vegetarianas",
      items: [
        { name: "Margherita", desc: "Molho, Mozzarella e Orégãos", prices: ["7€", "9.5€", "11.5€"], img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=200" },
      ]
    },
    {
      category: "Best Sellers",
      items: [
        { name: "Carbonara", desc: "Molho, bacon crocante, cebola, cogumelos, natas e queijo", prices: ["9.5€", "13€", "16€"], img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200" },
        { name: "Macho", desc: "Molho, Chourição, Fiambre, Bacon, Cogumelos, Cebola e Queijo", prices: ["10€", "14€", "17€"], img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=200" },
        { name: "Frango", desc: "Molho, Frango, Ananás, Milho, Natas e Queijo", prices: ["10€", "14€", "17€"], img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=200" },
        { name: "Havaiana", desc: "Molho, Fiambre, Cogumelos, Ananás e Queijo", prices: ["9€", "12.5€", "15.5€"], img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=200" },
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-32 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-pizza-red font-bold hover:gap-4 transition-all"
        >
          ← Voltar ao Início
        </button>

        <div className="text-left mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4">Menu de Pizzas</h1>
          <div className="flex justify-start gap-8 md:gap-16 text-sm font-bold text-gray-400 uppercase tracking-widest mt-8">
            <div className="text-center">
              <p>PEQ.</p>
              <p className="font-normal text-[10px]">24cm</p>
            </div>
            <div className="text-center">
              <p>MED.</p>
              <p className="font-normal text-[10px]">32cm</p>
            </div>
            <div className="text-center">
              <p>GRD.</p>
              <p className="font-normal text-[10px]">40cm</p>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {menuData.map((section) => (
            <div key={section.category}>
              <h2 className="inline-block bg-[#4A6741] text-white px-6 py-2 text-xl font-bold mb-8 rounded-sm">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        <img 
                          src={item.img || `https://picsum.photos/seed/${item.name.replace(/\s+/g, '').toLowerCase()}pizza/100/100`} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#4A6741]">{item.name}</h3>
                        <p className="text-sm text-gray-500 italic leading-tight">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 md:gap-16 text-right font-bold text-gray-800 min-w-[180px] justify-end">
                      {item.prices.map((price, i) => (
                        <span key={i} className="w-12">{price}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#4A6741] text-white p-6 rounded-sm text-center">
            <h4 className="text-xl font-bold mb-2">Sopa do Dia</h4>
            <p className="text-sm opacity-80">(Todos os dias)</p>
          </div>
          <div className="bg-[#4A6741] text-white p-6 rounded-sm text-center">
            <h4 className="text-xl font-bold mb-2">Prato do Dia</h4>
            <p className="text-sm opacity-80">(1 prato diferente todos os sábados)</p>
          </div>
          <div className="bg-[#4A6741] text-white p-6 rounded-sm text-center">
            <h4 className="text-xl font-bold mb-2">Lasanha</h4>
            <p className="text-sm opacity-80">(sextas e sábados)</p>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-400 italic">
          * Extra legumes: 1.50€ | 1.80€ | 2€ <br />
          * Extra proteínas: 1.80€ | 2€ | 2.50€ <br />
          * A troca de ingredientes só se aplica entre ingredientes da mesma categoria
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = ({ onShowMenu }: { onShowMenu: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Contactos', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Pizza className={`${isScrolled ? 'text-pizza-red' : 'text-white'} w-8 h-8 transition-colors`} />
          <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-pizza-dark' : 'text-white'}`}>
            Zé Manel <span className={isScrolled ? 'text-pizza-red' : 'text-white/90'}>Pizzas</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => {
                if (link.name === 'Menu') {
                  e.preventDefault();
                  onShowMenu();
                }
              }}
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-pizza-dark hover:text-pizza-red' : 'text-white hover:text-white/70'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+351916024561"
            className="bg-pizza-red text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
          >
            Encomendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors ${isScrolled ? 'text-pizza-dark' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-pizza-red text-white py-3 rounded-xl font-bold">
              Encomendar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
          alt="Pizza artesanal" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-6">
            As pizzas que toda a gente <span className="italic text-pizza-red">recomenda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-lg">
            Sabor caseiro, atendimento rápido e clientes felizes. O segredo está na massa e no carinho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu"
              className="bg-pizza-red hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-red-900/40 flex items-center justify-center gap-2"
            >
              Ver Menu <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badges removed as per request */}
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=1000" 
                alt="Zé Manel a preparar pizza" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-pizza-red text-white p-8 rounded-3xl shadow-xl hidden sm:block">
              <p className="text-4xl font-serif font-bold mb-1">20+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Anos de Tradição</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Um negócio local, focado em <span className="text-pizza-red">qualidade e sabor</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O Zé Manel Pizzas & Companhia nasceu da paixão pela cozinha tradicional e pelo desejo de servir a nossa comunidade com o que há de melhor. Somos um negócio familiar onde cada cliente é tratado como um amigo.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Aqui, não fazemos apenas pizzas; criamos momentos de conforto. Utilizamos ingredientes frescos, selecionados localmente, e uma massa de fermentação lenta que faz toda a diferença no sabor e na digestão.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-beige p-3 rounded-xl">
                  <Heart className="text-pizza-red" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Familiar</h4>
                  <p className="text-sm text-gray-500">Ambiente acolhedor e próximo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pizza-beige p-3 rounded-xl">
                  <UtensilsCrossed className="text-pizza-red" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Qualidade</h4>
                  <p className="text-sm text-gray-500">Ingredientes frescos todos os dias.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuHighlights = ({ onShowFullMenu }: { onShowFullMenu: () => void }) => {
  const items = [
    { 
      name: 'Pizza Carbonara', 
      desc: 'Molho, bacon crocante, cebola, cogumelos, natas e queijo', 
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
      tag: 'Best Seller'
    },
    { 
      name: 'Pizza Frango', 
      desc: 'Molho, frango, ananás, milho, natas e queijo', 
      img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=600',
      tag: 'Best Seller'
    },
    { 
      name: 'Pizza Havaiana', 
      desc: 'Molho, fiambre, cogumelos, ananás e queijo', 
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
      tag: 'Best Seller'
    },
    { 
      name: 'Pizza Pepperoni', 
      desc: 'Molho de tomate, mozzarella e fatias generosas de pepperoni.', 
      img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600',
      tag: 'Clássico'
    },
    { 
      name: 'Lasanhas Caseiras', 
      desc: 'Receita tradicional da avó, gratinada na perfeição.', 
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: 'Pratos do Dia', 
      desc: 'Variedade diária com o sabor autêntico da comida caseira.', 
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600' 
    }
  ];

  return (
    <section id="menu" className="py-24 bg-pizza-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Destaques do Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Uma seleção cuidada para satisfazer todos os desejos. Do forno para a sua mesa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {items.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-pizza-red transition-colors">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onShowFullMenu}
            className="inline-flex items-center gap-2 text-pizza-red font-bold hover:gap-4 transition-all"
          >
            Ver Menu Completo <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Ana Laranjeiro",
      text: "As melhores pizzas… atendimento super simpático e rápido! Venham experimentar, não se vai arrepender de todo…",
      rating: 5
    },
    {
      name: "Mariana Moço",
      text: "Atendimento top 🔝 Pizzas, lasanhas, pratos do dia, tudo excelente! Os meus filhos adoram o pão de alho.",
      rating: 5
    },
    {
      name: "Sandrina Felizardo",
      text: "As pizzas são deliciosas e o atendimento top!",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">O que dizem os nossos clientes</h2>
            <p className="text-gray-600 text-lg">
              A satisfação de quem nos visita é a nossa maior recompensa.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-pizza-beige px-6 py-3 rounded-2xl">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="font-bold">4.9 no Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-pizza-beige/50 p-8 rounded-3xl relative"
            >
              <MessageSquare className="absolute top-6 right-8 text-pizza-red/10 w-12 h-12" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pizza-red rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-pizza-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pizza-red/20 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pizza-red/20 blur-[100px] translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Faça a sua encomenda hoje</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Venha experimentar as nossas pizzas ou peça para entregar em sua casa. Qualidade garantida em cada fatia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+351916024561" className="bg-pizza-red hover:bg-red-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-xl shadow-red-900/40 flex items-center justify-center">
              Ligar Agora
            </a>
            <button className="bg-white text-pizza-dark hover:bg-gray-100 px-12 py-5 rounded-full text-xl font-bold transition-all">
              Ver Localização
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Pizza className="text-pizza-red w-8 h-8" />
              <span className="font-serif text-xl font-bold tracking-tight">Zé Manel <span className="text-pizza-red">Pizzas</span></span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              O sabor da tradição em cada pizza. Negócio local focado na satisfação dos nossos clientes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-pizza-beige rounded-full flex items-center justify-center text-pizza-dark hover:bg-pizza-red hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pizza-beige rounded-full flex items-center justify-center text-pizza-dark hover:bg-pizza-red hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <Phone size={20} className="text-pizza-red shrink-0" />
                <a href="tel:+351916024561" className="hover:text-pizza-red transition-colors">916 024 561</a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin size={20} className="text-pizza-red shrink-0" />
                <span>R. Mousinho de Albuquerque,<br />2485-019 Mira de Aire</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Horário</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex justify-between">
                <span>Terça - Quinta</span>
                <span className="font-medium">12:00 - 22:30</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta - Sábado</span>
                <span className="font-medium">12:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="font-medium">18:00 - 22:30</span>
              </li>
              <li className="flex justify-between text-pizza-red font-bold">
                <span>Segunda</span>
                <span>Encerrado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Receba as nossas promoções e pratos do dia.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="O seu email" 
                className="bg-pizza-beige border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-pizza-red outline-none text-sm"
              />
              <button className="bg-pizza-red text-white p-2 rounded-xl">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Zé Manel Pizzas & Companhia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pizza-red">Privacidade</a>
            <a href="#" className="hover:text-pizza-red">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'menu'>('home');

  useEffect(() => {
    if (view === 'menu') {
      window.scrollTo(0, 0);
    }
  }, [view]);

  return (
    <div className="min-h-screen selection:bg-pizza-red selection:text-white">
      <Navbar onShowMenu={() => setView('menu')} />
      
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            <About />
            <MenuHighlights onShowFullMenu={() => setView('menu')} />
            <Reviews />
            <CTA />
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FullMenu onBack={() => setView('home')} />
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppButton />
    </div>
  );
}
