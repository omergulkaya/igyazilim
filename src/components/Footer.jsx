import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Hakkımızda', path: '/about' },
      { label: 'Hizmetler', path: '/services' },
      { label: 'Portfolyo', path: '/portfolio' },
      { label: 'İletişim', path: '/contact' },
    ],
    services: [
      { label: 'Web Tasarım', path: '/services' },
      { label: 'Mobil Uygulama', path: '/services' },
      { label: 'Dijital Pazarlama', path: '/services' },
      { label: 'Marka Tasarımı', path: '/services' },
    ],
    social: [
      { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
      { icon: 'fab fa-instagram', url: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
      { icon: 'fab fa-youtube', url: '#', label: 'YouTube', color: 'hover:bg-red-600' },
    ],
  };

  return (
    <footer className="relative bg-custom-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-flamingo rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-supernova rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container-custom py-16 md:py-20 relative z-10">
        {/* Newsletter Section - Minimal */}
        <div className="mb-16 border-t border-white/10 pt-16 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
            IG Yazılım Bülteni
          </h3>
          <p className="text-white/60 mb-6 text-sm">
            Web tasarım ve dijital pazarlama hakkında en son haberler
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-flamingo transition-all text-sm"
            />
            <button className="bg-flamingo text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-flamingo transition-all text-sm">
              Abone Ol
            </button>
          </div>
        </div>

        {/* SEO - Türkiye Şehirleri - Minimal */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <h3 className="font-display font-bold text-xl text-white mb-6 text-center">
            Hizmet Verdiğimiz Şehirler
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {[
              'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Gaziantep', 'Konya',
              'Kocaeli', 'Mersin', 'Diyarbakır', 'Kayseri', 'Eskişehir', 'Şanlıurfa', 'Samsun',
              'Denizli', 'Sakarya', 'Hatay', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Van',
              'Aydın', 'Tekirdağ', 'Balıkesir', 'Muğla', 'Trabzon', 'Elazığ', 'Erzurum', 'Ordu'
            ].map((city, index) => (
              <span
                key={index}
                className="px-3 py-1 text-white/50 hover:text-flamingo transition-colors cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-flamingo to-supernova rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-display font-bold text-2xl">IG</span>
                </div>
                <span className="font-display font-bold text-2xl">IG Yazılım</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed">
              İstanbul, Ankara, İzmir ve tüm Türkiye'de modern web tasarım, mobil uygulama ve dijital pazarlama hizmetleri sunuyoruz.
            </p>
            {/* Social Media */}
            <div>
              <p className="text-sm text-white/50 mb-3">Bizi Takip Edin</p>
              <div className="flex flex-wrap gap-3">
                {footerLinks.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-cape-cod rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 relative inline-block">
              <span className="gradient-text">Şirket</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-flamingo to-supernova rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-flamingo transition-all duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-3 text-flamingo opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 relative inline-block">
              <span className="gradient-text">Hizmetler</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-flamingo to-supernova rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-flamingo transition-all duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-3 text-flamingo opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 relative inline-block">
              <span className="gradient-text">İletişim</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-flamingo to-supernova rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-cape-cod rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-flamingo group-hover:to-supernova transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-flamingo group-hover:text-white"></i>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors pt-2">
                  Mansuroğlu Mah. 288/1 No:29 Ege Sun Plaza, Bayraklı/İzmir
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-cape-cod rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-flamingo group-hover:to-supernova transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-phone text-flamingo group-hover:text-white"></i>
                </div>
                <a href="tel:+905070025649" className="text-white/70 group-hover:text-white transition-colors pt-2">
                  +90 (507) 002 56 49
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-cape-cod rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-flamingo group-hover:to-supernova transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-envelope text-flamingo group-hover:text-white"></i>
                </div>
                <a href="mailto:info@igyazilim.com" className="text-white/70 group-hover:text-white transition-colors pt-2">
                  info@igyazilim.com
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-cape-cod rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-flamingo group-hover:to-supernova transition-all duration-300 flex-shrink-0">
                  <i className="fas fa-clock text-flamingo group-hover:text-white"></i>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors pt-2">
                  Pzt - Cum: 09:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 text-white/50 text-sm">
              <span>© {currentYear} IG Yazılım.</span>
              <span className="hidden md:inline">|</span>
              <span>Tüm hakları saklıdır.</span>
              <span className="hidden md:inline">|</span>
              <span className="text-flamingo">Türkiye'nin Yazılım Firması</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-white/50 hover:text-flamingo text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-white/50 hover:text-flamingo text-sm transition-colors">
                Kullanım Koşulları
              </a>
              <a href="#" className="text-white/50 hover:text-flamingo text-sm transition-colors">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-flamingo to-supernova rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Başa Dön"
      >
        <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
      </button>
    </footer>
  );
};

export default Footer;

