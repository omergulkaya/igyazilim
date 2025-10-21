import React from 'react';
import { Link } from 'react-router-dom';

const BrandingDesign = () => {
  const services = [
    { icon: 'fas fa-paint-brush', title: 'Logo Tasarım', desc: 'Kurumsal kimliğinizi yansıtan özgün logo' },
    { icon: 'fas fa-palette', title: 'Kurumsal Kimlik', desc: 'Marka rehberi ve kurumsal tasarım' },
    { icon: 'fas fa-print', title: 'Baskı Tasarımları', desc: 'Kartvizit, broşür, katalog tasarımı' },
    { icon: 'fas fa-images', title: 'Sosyal Medya Tasarım', desc: 'Görseller ve içerik tasarımı' },
    { icon: 'fas fa-box', title: 'Ambalaj Tasarımı', desc: 'Ürün ambalaj ve etiket tasarımı' },
    { icon: 'fas fa-bullhorn', title: 'Reklam Tasarımı', desc: 'Banner, afiş ve reklam görselleri' },
  ];

  const brandingProcess = [
    { step: '01', title: 'Keşif', desc: 'Marka analizi ve pazar araştırması', icon: 'fas fa-search' },
    { step: '02', title: 'Strateji', desc: 'Marka stratejisi ve konumlandırma', icon: 'fas fa-chess' },
    { step: '03', title: 'Tasarım', desc: 'Görsel kimlik ve logo tasarımı', icon: 'fas fa-pencil-ruler' },
    { step: '04', title: 'Uygulama', desc: 'Tüm materyallerde uygulaması', icon: 'fas fa-check-circle' },
  ];

  const designTypes = [
    { name: 'Logo & Amblem', icon: 'fas fa-copyright' },
    { name: 'Kartvizit', icon: 'fas fa-id-card' },
    { name: 'Antetli Kağıt', icon: 'fas fa-file-alt' },
    { name: 'Zarf Tasarımı', icon: 'fas fa-envelope' },
    { name: 'Broşür', icon: 'fas fa-book-open' },
    { name: 'Katalog', icon: 'fas fa-book' },
    { name: 'Afiş & Banner', icon: 'fas fa-ad' },
    { name: 'Sosyal Medya', icon: 'fas fa-share-alt' },
  ];

  const portfolio = [
    { category: 'Logo', count: '150+' },
    { category: 'Kurumsal Kimlik', count: '80+' },
    { category: 'Baskı Tasarım', count: '200+' },
    { category: 'Dijital Tasarım', count: '300+' },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-custom-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-flamingo text-white rounded-full text-sm font-semibold">
                Marka & Grafik Tasarım
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Markanızı Öne Çıkaran Tasarımlar
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Profesyonel logo, kurumsal kimlik ve grafik tasarım hizmetleri ile markanıza değer katıyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-flamingo text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-flamingo transition-all">
                Tasarım Talebi
              </Link>
              <Link to="/portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-custom-black transition-all">
                Portfolyo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Tasarım <span className="text-flamingo">Hizmetlerimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-flamingo hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-flamingo bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-flamingo`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gunsmoke">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Marka Oluşturma <span className="text-flamingo">Süreci</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingProcess.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-flamingo rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-3xl text-white`}></i>
                </div>
                <div className="text-5xl font-display font-bold text-flamingo opacity-20 mb-4">{item.step}</div>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gunsmoke">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Tasarım <span className="text-flamingo">Çeşitleri</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designTypes.map((type, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-flamingo hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${type.icon} text-2xl text-flamingo`}></i>
                </div>
                <h3 className="font-semibold">{type.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <i className="fas fa-palette text-9xl text-flamingo opacity-20"></i>
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
                Neden <span className="text-flamingo">Bizi Seçmelisiniz?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-flamingo rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-award text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Deneyimli Ekip</h3>
                    <p className="text-gunsmoke">8 yıllık tecrübe ve 500+ başarılı proje</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-flamingo rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-lightbulb text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Özgün Tasarımlar</h3>
                    <p className="text-gunsmoke">Her proje için özel ve benzersiz çözümler</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-flamingo rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-sync text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Revizyon Hakkı</h3>
                    <p className="text-gunsmoke">Sınırsız revizyon ile tam memnuniyet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-flamingo rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Hızlı Teslimat</h3>
                    <p className="text-gunsmoke">3-5 iş günü içinde hızlı teslimat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="section-padding bg-custom-black text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Tasarım <span className="text-flamingo">Portföyümüz</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-flamingo mb-2">{item.count}</div>
                <div className="text-gray-300 text-lg">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
            Markanızı Güçlendirelim
          </h2>
          <p className="text-xl text-gunsmoke mb-8 max-w-2xl mx-auto">
            Profesyonel tasarım hizmetleri için hemen iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-flamingo text-white px-10 py-4 rounded-full font-bold hover:bg-custom-black transition-all">
              Tasarım Talebi
            </Link>
            <a href="tel:+905070025649" className="border-2 border-custom-black text-custom-black px-10 py-4 rounded-full font-bold hover:bg-custom-black hover:text-white transition-all">
              Bizi Arayın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingDesign;

