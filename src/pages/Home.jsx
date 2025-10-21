import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Türkiye\'nin Web Tasarım',
      highlight: 'Uzmanı IG Yazılım',
      description: 'İstanbul, Ankara, İzmir, Bursa, Antalya ve tüm Türkiye\'de profesyonel web tasarım, mobil uygulama geliştirme ve dijital pazarlama hizmetleri.',
      primaryBtn: 'Hemen Başlayın',
      secondaryBtn: 'Portfolyoyu İncele',
      primaryLink: '/contact',
      secondaryLink: '/portfolio',
      bgColor: 'from-flamingo to-supernova',
      bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    },
    {
      title: 'Kurumsal Web Tasarım',
      highlight: 'E-Ticaret Çözümleri',
      description: 'Responsive web tasarım, mobil uyumlu site yapımı ve SEO optimizasyonu ile işletmenizi dijital dünyada büyütün. 250+ başarılı proje.',
      primaryBtn: 'Hizmetlerimiz',
      secondaryBtn: 'Referanslar',
      primaryLink: '/services',
      secondaryLink: '/portfolio',
      bgColor: 'from-supernova to-hacienda',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    },
    {
      title: 'Yazılım Firması',
      highlight: 'IG Yazılım ile Fark Yaratın',
      description: '8 yıllık tecrübe, 180+ mutlu müşteri. İstanbul merkezli, Türkiye genelinde web sitesi yapımı, mobil app geliştirme ve dijital pazarlama hizmetleri.',
      primaryBtn: 'Bizi Tanıyın',
      secondaryBtn: 'İletişime Geçin',
      primaryLink: '/about',
      secondaryLink: '/contact',
      bgColor: 'from-hacienda to-flamingo',
      bgImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 saniyede bir değişir

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const features = [
    {
      icon: 'fas fa-rocket',
      title: 'Hızlı Çözümler',
      description: 'Modern teknolojilerle hızlı ve etkili çözümler sunuyoruz. Projenizi zamanında teslim ediyoruz.',
      color: 'flamingo',
    },
    {
      icon: 'fas fa-palette',
      title: 'Yaratıcı Tasarım',
      description: 'Benzersiz ve göz alıcı tasarımlarla markanızı öne çıkarıyoruz. Her detay özenle işlenir.',
      color: 'supernova',
    },
    {
      icon: 'fas fa-users',
      title: 'Profesyonel Ekip',
      description: 'Uzman ekibimizle her projede mükemmeliyeti hedefliyoruz. Deneyim ve kalite bir arada.',
      color: 'hacienda',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Tasarım',
      description: 'Her cihazda mükemmel görünüm. Mobil uyumlu, modern ve kullanıcı dostu arayüzler.',
      color: 'tonys-pink',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'SEO Optimizasyonu',
      description: 'Arama motorlarında üst sıralarda yer alın. Görünürlüğünüzü artırın, müşterilerinize ulaşın.',
      color: 'flamingo',
    },
    {
      icon: 'fas fa-headset',
      title: '7/24 Destek',
      description: 'Her zaman yanınızdayız. Sorularınız ve sorunlarınız için kesintisiz destek hizmeti.',
      color: 'supernova',
    },
  ];

  const stats = [
    { number: '250+', label: 'Tamamlanan Proje', icon: 'fas fa-project-diagram' },
    { number: '180+', label: 'Mutlu Müşteri', icon: 'fas fa-smile' },
    { number: '15+', label: 'Ödül', icon: 'fas fa-trophy' },
    { number: '8+', label: 'Yıl Deneyim', icon: 'fas fa-clock' },
  ];

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      position: 'CEO, TechCorp',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'Creative Studio ile çalışmak harika bir deneyimdi. Projemizi mükemmel bir şekilde teslim ettiler.',
      rating: 5,
    },
    {
      name: 'Ayşe Demir',
      position: 'Kurucu, Dijital Ajans',
      image: 'https://i.pravatar.cc/150?img=45',
      text: 'Profesyonel yaklaşımları ve yaratıcı çözümleri ile beklentilerimizin çok üzerinde bir sonuç aldık.',
      rating: 5,
    },
    {
      name: 'Mehmet Kaya',
      position: 'Pazarlama Müdürü',
      image: 'https://i.pravatar.cc/150?img=33',
      text: 'Responsive tasarım ve kullanıcı deneyimi konusunda gerçekten uzmanlar. Kesinlikle tavsiye ediyorum.',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slider Container */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              ></div>
              
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-custom-black opacity-50"></div>
              
              {/* Animated Gradient Elements - Vibrant */}
              <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-br ${slide.bgColor} opacity-40 rounded-full blur-3xl animate-pulse-slow`}></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-flamingo opacity-35 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-supernova opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-tonys-pink opacity-25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-24">
          <div className="flex items-center justify-center">
            {/* Text Content - Centered */}
            <div className="text-white space-y-8 max-w-4xl text-center">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === activeSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 absolute translate-y-10'
                  }`}
                >
                  <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                    {slide.title}
                    <span className="block text-supernova mt-2">{slide.highlight}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mt-6">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Link
                      to={slide.primaryLink}
                      className="bg-white text-flamingo font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      {slide.primaryBtn}
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                    <Link
                      to={slide.secondaryLink}
                      className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-flamingo"
                    >
                      {slide.secondaryBtn}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Dots Only */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            {/* Dots Indicator */}
            <div className="flex space-x-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full shadow-md ${
                    index === activeSlide
                      ? 'w-16 h-4 bg-flamingo shadow-flamingo/50'
                      : 'w-4 h-4 bg-white/50 hover:bg-white/80 hover:scale-125'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern */}
      <section className="relative section-padding bg-custom-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-supernova rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-cape-cod to-custom-black rounded-3xl p-8 h-full border border-gunsmoke/20 hover:border-flamingo/50 transition-all duration-500 overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-flamingo to-supernova opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-flamingo to-supernova rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <i className={`${stat.icon} text-3xl text-white`}></i>
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="relative text-center mb-3">
                    <div className="font-display font-black text-5xl md:text-6xl bg-gradient-to-r from-white via-supernova to-flamingo bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 inline-block">
                      {stat.number}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="relative text-center">
                    <p className="text-gunsmoke group-hover:text-white font-semibold text-sm md:text-base transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-flamingo to-supernova transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-flamingo/20 to-supernova/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-flamingo rounded-full animate-pulse"></div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-flamingo to-supernova"></div>
              <div className="w-3 h-3 bg-supernova rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern */}
      <section className="relative section-padding bg-gradient-to-b from-custom-white via-tonys-pink/5 to-custom-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-flamingo opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-supernova opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-to-r from-flamingo to-supernova text-white rounded-full text-sm font-semibold shadow-lg">
                ⭐ Avantajlarımız
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-custom-black mb-6">
              Neden <span className="gradient-text">Bizi Seçmelisiniz?</span>
            </h2>
            <p className="text-lg md:text-xl text-gunsmoke leading-relaxed">
              Profesyonel ekibimiz ve modern çözümlerimizle işinizi bir üst seviyeye taşıyoruz. 
              Her projede mükemmeliyeti hedefliyoruz.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl p-8 h-full border-2 border-transparent hover:border-flamingo/30 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-flamingo/5 to-supernova/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="relative inline-block">
                      {/* Icon Background with Animation */}
                      <div className={`w-20 h-20 bg-gradient-to-br from-${feature.color} to-supernova rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <i className={`${feature.icon} text-3xl text-white`}></i>
                      </div>
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 bg-${feature.color} rounded-2xl opacity-20 group-hover:scale-125 transition-transform duration-500 -z-10`}></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-custom-black mb-4 group-hover:text-flamingo transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gunsmoke leading-relaxed group-hover:text-custom-black transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className={`h-1 bg-gradient-to-r from-${feature.color} to-supernova transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-flamingo rounded-tr-xl"></div>
                  </div>
                </div>

                {/* Outer Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-supernova/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gunsmoke mb-6 text-lg">
              Daha fazla bilgi almak ister misiniz?
            </p>
            <Link to="/services" className="btn-primary inline-block">
              Tüm Hizmetlerimizi Görün
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern */}
      <section className="relative section-padding bg-gradient-to-br from-flamingo via-supernova to-hacienda overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-tonys-pink rounded-full blur-3xl animate-float"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold shadow-lg border border-white/30">
                💬 Referanslar
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Başarılı projelerimiz ve mutlu müşterilerimizle gurur duyuyoruz.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full border border-white/50 hover:border-white overflow-hidden">
                  {/* Quote Icon Background */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <i className="fas fa-quote-right text-8xl text-flamingo"></i>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex mb-6 justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="transform group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <i className="fas fa-star text-2xl text-supernova drop-shadow-lg"></i>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative mb-6">
                    <p className="text-custom-black leading-relaxed text-center italic text-base md:text-lg">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-flamingo to-supernova mx-auto mb-6 rounded-full"></div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      {/* Image with Ring */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-flamingo to-supernova rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl"
                        />
                      </div>
                      {/* Verified Badge */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-flamingo to-supernova rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                    </div>
                    <h4 className="font-display font-bold text-lg text-custom-black mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gunsmoke font-medium">
                      {testimonial.position}
                    </p>
                  </div>

                  {/* Bottom Shine Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-flamingo to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Card Glow */}
                <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">98%</div>
              <p className="text-white/80 font-medium">Müşteri Memnuniyeti</p>
            </div>
            <div className="w-px h-12 bg-white/30 hidden md:block"></div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">250+</div>
              <p className="text-white/80 font-medium">Tamamlanan Proje</p>
            </div>
            <div className="w-px h-12 bg-white/30 hidden md:block"></div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">180+</div>
              <p className="text-white/80 font-medium">Mutlu Müşteri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section className="relative section-padding bg-custom-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-96 h-96 bg-flamingo opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-supernova opacity-20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-flamingo to-supernova opacity-10 rounded-full blur-3xl"></div>
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #f06236 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Content Box */}
            <div className="relative bg-gradient-to-br from-cape-cod to-custom-black rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-gunsmoke/20 overflow-hidden">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-flamingo rounded-tl-3xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-supernova rounded-br-3xl opacity-30"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-flamingo to-supernova rounded-2xl opacity-20 blur-sm rotate-12 animate-float"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-supernova to-hacienda rounded-full opacity-20 blur-sm animate-pulse-slow"></div>

              <div className="relative text-center space-y-8">
                {/* Badge */}
                <div className="inline-block">
                  <span className="px-6 py-3 bg-gradient-to-r from-flamingo to-supernova text-white rounded-full text-sm font-bold shadow-xl border-2 border-white/20 animate-pulse-slow">
                    🚀 ÜCRETSİZ DANIŞMANLIK
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                  Projenizi Hayata Geçirmeye
                  <span className="block mt-3 bg-gradient-to-r from-flamingo via-supernova to-flamingo bg-clip-text text-transparent animate-pulse-slow">
                    Hazır mısınız?
                  </span>
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                  Ücretsiz danışmanlık için hemen iletişime geçin. Hayalinizdeki projeyi birlikte tasarlayalım.
                  <span className="block mt-2 text-supernova font-semibold">24 saat içinde size dönüş yapıyoruz!</span>
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
                  <Link 
                    to="/contact" 
                    className="group relative bg-gradient-to-r from-flamingo to-supernova text-white font-bold py-5 px-10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-flamingo/50 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Ücretsiz Teklif Alın
                      <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                    </span>
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                  
                  <a 
                    href="tel:+905551234567" 
                    className="group relative bg-white/10 backdrop-blur-md border-2 border-flamingo text-white font-bold py-5 px-10 rounded-full transition-all duration-300 hover:bg-flamingo hover:scale-110 hover:shadow-2xl"
                  >
                    <span className="flex items-center">
                      <i className="fas fa-phone mr-3 group-hover:rotate-12 transition-transform"></i>
                      Bizi Arayın
                    </span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gunsmoke/20 mt-8">
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="fas fa-shield-alt text-supernova text-xl"></i>
                    <span className="text-sm font-medium">Güvenli Ödeme</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="fas fa-clock text-supernova text-xl"></i>
                    <span className="text-sm font-medium">Hızlı Yanıt</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="fas fa-award text-supernova text-xl"></i>
                    <span className="text-sm font-medium">%98 Memnuniyet</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="fas fa-headset text-supernova text-xl"></i>
                    <span className="text-sm font-medium">7/24 Destek</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: 'fas fa-users', label: '180+ Müşteri' },
                { icon: 'fas fa-project-diagram', label: '250+ Proje' },
                { icon: 'fas fa-trophy', label: '15+ Ödül' },
                { icon: 'fas fa-smile', label: '%98 Memnuniyet' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-cape-cod/50 to-custom-black/50 backdrop-blur-sm rounded-2xl p-4 border border-gunsmoke/10 text-center hover:border-flamingo/30 transition-all duration-300 hover:scale-105"
                >
                  <i className={`${stat.icon} text-3xl text-flamingo mb-2`}></i>
                  <p className="text-white font-semibold text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

