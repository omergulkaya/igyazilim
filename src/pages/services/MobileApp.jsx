import React from 'react';
import { Link } from 'react-router-dom';

const MobileApp = () => {
  const features = [
    { icon: 'fab fa-apple', title: 'iOS Geliştirme', desc: 'Swift ve Objective-C ile native iOS uygulamaları' },
    { icon: 'fab fa-android', title: 'Android Geliştirme', desc: 'Kotlin ve Java ile native Android uygulamaları' },
    { icon: 'fas fa-sync', title: 'Cross-Platform', desc: 'React Native ve Flutter ile çapraz platform' },
    { icon: 'fas fa-plug', title: 'API Entegrasyonu', desc: 'Backend ve üçüncü parti API entegrasyonları' },
    { icon: 'fas fa-bell', title: 'Push Notification', desc: 'Anlık bildirim sistemi entegrasyonu' },
    { icon: 'fas fa-chart-line', title: 'Analitik', desc: 'Kullanıcı davranış analizi ve raporlama' },
  ];

  const platforms = [
    { name: 'iOS', icon: 'fab fa-apple', color: 'text-gray-800' },
    { name: 'Android', icon: 'fab fa-android', color: 'text-green-600' },
    { name: 'React Native', icon: 'fab fa-react', color: 'text-blue-500' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt', color: 'text-blue-400' },
  ];

  const services = [
    { title: 'Native Uygulama', desc: 'Platform özelinde optimize edilmiş uygulamalar', icon: 'fas fa-mobile' },
    { title: 'Hibrit Uygulama', desc: 'Tek kod tabanı ile iOS ve Android', icon: 'fas fa-code-branch' },
    { title: 'UI/UX Tasarım', desc: 'Kullanıcı dostu arayüz tasarımı', icon: 'fas fa-palette' },
    { title: 'Bakım & Güncelleme', desc: 'Sürekli destek ve yeni özellikler', icon: 'fas fa-wrench' },
    { title: 'Store Yayınlama', desc: 'App Store ve Play Store yayınlama', icon: 'fas fa-cloud-upload-alt' },
    { title: 'Test & QA', desc: 'Kapsamlı test ve kalite güvence', icon: 'fas fa-check-circle' },
  ];

  const benefits = [
    'Müşterilerinize 7/24 erişim',
    'Marka bilinirliğini artırma',
    'Müşteri sadakati oluşturma',
    'Satışları artırma',
    'Rekabet avantajı',
    'Veri toplama ve analiz',
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-custom-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-flamingo text-white rounded-full text-sm font-semibold">
                Mobil Uygulama Geliştirme
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              iOS ve Android Mobil Uygulama Geliştirme
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Native ve cross-platform teknolojiler ile işletmeniz için profesyonel mobil uygulamalar geliştiriyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-flamingo text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-flamingo transition-all">
                Proje Başlat
              </Link>
              <Link to="/portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-custom-black transition-all">
                Referanslar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Desteklediğimiz <span className="text-flamingo">Platformlar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <i className={`${platform.icon} text-6xl ${platform.color} mb-4`}></i>
                <h3 className="font-display font-bold text-xl">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Mobil Uygulama <span className="text-flamingo">Özelliklerimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-flamingo hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-flamingo bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-3xl text-flamingo`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gunsmoke">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Sunduğumuz <span className="text-flamingo">Hizmetler</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-flamingo rounded-xl flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gunsmoke">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
                Mobil Uygulama <span className="text-flamingo">Avantajları</span>
              </h2>
              <p className="text-lg text-gunsmoke mb-8">
                Mobil uygulama ile işletmenizi bir üst seviyeye taşıyın. Müşterilerinizle daha güçlü bağlar kurun.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <div className="w-8 h-8 bg-flamingo rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <i className="fas fa-mobile-alt text-9xl text-flamingo opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-custom-black text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Mobil Uygulamanızı Geliştirmeye Başlayalım
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Fikrinizi gerçeğe dönüştürmek için bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-flamingo text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-flamingo transition-all">
              Proje Görüşmesi
            </Link>
            <a href="tel:+905070025649" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-custom-black transition-all">
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;

