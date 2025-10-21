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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-custom-black">
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
              <div className="absolute inset-0 bg-custom-black opacity-70"></div>
              
              {/* Subtle Orange Accents */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-flamingo opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-flamingo opacity-10 rounded-full blur-2xl"></div>
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
                  <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
                    {slide.title}
                    <span className="block text-flamingo mt-2">{slide.highlight}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mt-6">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Link
                      to={slide.primaryLink}
                      className="bg-flamingo text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-flamingo"
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

        </div>
      </section>

      {/* Stats Section - Professional */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center"
              >
                {/* Icon */}
                <div className="mb-6 inline-block">
                  <div className="w-16 h-16 bg-flamingo/10 rounded-2xl flex items-center justify-center group-hover:bg-flamingo transition-all duration-300">
                    <i className={`${stat.icon} text-2xl text-flamingo group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                </div>
                
                {/* Number */}
                <div className="mb-3">
                  <div className="font-display font-bold text-5xl text-custom-black group-hover:text-flamingo transition-colors duration-300">
                    {stat.number}
                  </div>
                </div>
                
                {/* Label */}
                <p className="text-gunsmoke text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Professional */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Neden <span className="text-flamingo">Bizi Seçmelisiniz?</span>
            </h2>
            <p className="text-lg text-gunsmoke max-w-2xl mx-auto">
              Profesyonel ekibimiz ve modern çözümlerimizle işinizi bir üst seviyeye taşıyoruz.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-flamingo hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-flamingo rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-display font-bold text-xl text-custom-black mb-3 group-hover:text-flamingo transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gunsmoke leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Professional */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Müşterilerimiz <span className="text-flamingo">Ne Diyor?</span>
            </h2>
            <p className="text-lg text-gunsmoke max-w-2xl mx-auto">
              Başarılı projelerimiz ve mutlu müşterilerimizle gurur duyuyoruz.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white border border-transparent hover:border-flamingo hover:shadow-xl transition-all duration-300"
              >
                {/* Stars Rating */}
                <div className="flex mb-4 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-flamingo text-sm"></i>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-custom-black leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-custom-black group-hover:text-flamingo transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gunsmoke">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 md:p-16 shadow-lg border border-gray-200">
            {/* Heading */}
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-custom-black mb-6">
              Projenizi Hayata Geçirmeye <span className="text-flamingo">Hazır mısınız?</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gunsmoke mb-10 max-w-2xl mx-auto">
              Ücretsiz danışmanlık için hemen iletişime geçin. Hayalinizdeki projeyi birlikte tasarlayalım.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                to="/contact" 
                className="group bg-flamingo text-white font-bold px-12 py-4 rounded-full hover:bg-custom-black hover:shadow-xl transition-all duration-300"
              >
                Ücretsiz Teklif Alın
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform inline-block"></i>
              </Link>
              
              <a 
                href="tel:+905070025649" 
                className="group border-2 border-custom-black text-custom-black font-bold px-12 py-4 rounded-full hover:bg-custom-black hover:text-white transition-all duration-300"
              >
                <i className="fas fa-phone mr-3"></i>
                0507 002 56 49
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200 flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 text-gunsmoke">
                <i className="fas fa-shield-alt text-flamingo"></i>
                <span className="text-sm font-medium">Güvenli Ödeme</span>
              </div>
              <div className="flex items-center space-x-2 text-gunsmoke">
                <i className="fas fa-clock text-flamingo"></i>
                <span className="text-sm font-medium">24 Saat Yanıt</span>
              </div>
              <div className="flex items-center space-x-2 text-gunsmoke">
                <i className="fas fa-award text-flamingo"></i>
                <span className="text-sm font-medium">%98 Memnuniyet</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

