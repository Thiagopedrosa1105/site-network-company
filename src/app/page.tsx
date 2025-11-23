"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Code, Smartphone, Layout, Server, ArrowRight, CheckCircle2, Globe, Users, Award, Mail, Phone, MapPin, Linkedin, Github, Twitter, Sparkles, Zap, Rocket, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function NetworkCompany() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    // Substitua pelo seu número de WhatsApp no formato internacional (sem + e sem espaços)
    // Exemplo: 5511999999999 para Brasil ou 18585550123 para USA
    const phoneNumber = '18583498953'
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Network Company.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const services = [
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Institutional Websites",
      description: "Professional websites that represent your brand with elegance and functionality.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      description: "Native and hybrid applications for iOS and Android with exceptional user experience.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Landing Pages",
      description: "High-converting pages optimized for lead generation and sales.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Custom Systems",
      description: "Tailored solutions for business management, automation, and digital transformation.",
      gradient: "from-emerald-400 to-teal-600"
    }
  ]

  const portfolio = [
    { name: "E-commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop" },
    { name: "Healthcare App", category: "Mobile App", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" },
    { name: "Financial Dashboard", category: "System", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
    { name: "Real Estate Landing", category: "Landing Page", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" },
    { name: "Restaurant App", category: "Mobile App", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" },
    { name: "SaaS Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" }
  ]

  const clients = [
    "TechCorp", "InnovateLab", "Digital Solutions", "StartupHub", "CloudBase", "DataFlow"
  ]

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "200+", label: "Projects Delivered" },
    { number: "150+", label: "Happy Clients" },
    { number: "98%", label: "Satisfaction Rate" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-green-500/70 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Network Company
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-lg border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="block hover:text-cyan-400 transition-colors">About</a>
              <a href="#services" className="block hover:text-cyan-400 transition-colors">Services</a>
              <a href="#portfolio" className="block hover:text-cyan-400 transition-colors">Portfolio</a>
              <a href="#contact" className="block hover:text-cyan-400 transition-colors">Contact</a>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">5 Years of Innovation & Excellence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              We are a technology development company based in San Diego, USA, with Brazilian roots. 
              We create cutting-edge websites, apps, and systems that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 text-lg px-8 py-6 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 text-lg px-8 py-6 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">About Us</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Innovation Meets
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Founded in Brazil and now expanding in the United States, Network Company has been 
                delivering exceptional digital solutions for 5 years. We combine technical expertise 
                with creative innovation to help businesses thrive in the digital age.
              </p>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our team of experienced developers, designers, and strategists work together to create 
                solutions that not only meet but exceed expectations. From startups to established 
                enterprises, we've helped over 150 clients achieve their digital goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Track Record</h3>
                    <p className="text-gray-400">200+ successful projects delivered on time and within budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Team</h3>
                    <p className="text-gray-400">Skilled professionals with expertise in latest technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Client-Focused</h3>
                    <p className="text-gray-400">98% client satisfaction rate with ongoing support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400/20 to-red-500/20 border border-orange-400/30 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Our Services</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What We
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Create For You
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs, 
              from concept to deployment and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Portfolio</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Latest
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our portfolio of innovative projects that have helped businesses 
              achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-cyan-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Trusted By</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Amazing
              <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-center justify-center hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <span className="text-lg font-semibold text-gray-400 hover:text-cyan-400 transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Your Digital Presence?
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with innovative 
            technology solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 text-lg px-10 py-6 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-105">
              Get Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 text-lg px-10 py-6 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-pink-300">Contact Us</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Let's Start
                <span className="block bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Something Great
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8">
                Get in touch with us today and let's discuss how we can bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-400">San Diego, California, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-400">contact@networkcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="text-green-400 hover:text-green-300 transition-colors underline"
                    >
                      Click to chat with us
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (619) 609-6887</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-slate-950 border-slate-800 focus:border-cyan-500 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-slate-950 border-slate-800 focus:border-cyan-500 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <Input 
                      placeholder="Website, App, System..." 
                      className="bg-slate-950 border-slate-800 focus:border-cyan-500 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={5}
                      className="bg-slate-950 border-slate-800 focus:border-cyan-500 text-white resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 py-6 text-lg">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Network Company
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming ideas into digital reality since 2019.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Landing Pages</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Custom Systems</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Network Company. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
