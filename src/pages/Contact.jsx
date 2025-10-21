import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setFormStatus({
      type: 'success',
      message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    });
    // Clear status after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Adres',
      info: 'Maslak Mahallesi, Büyükdere Caddesi No:123',
      info2: 'Sarıyer, İstanbul 34398',
      color: 'flamingo',
    },
    {
      icon: 'fas fa-phone',
      title: 'Telefon',
      info: '+90 (555) 123 45 67',
      info2: '+90 (212) 987 65 43',
      color: 'supernova',
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-posta',
      info: 'info@creativestudio.com',
      info2: 'destek@creativestudio.com',
      color: 'hacienda',
    },
    {
      icon: 'fas fa-clock',
      title: 'Çalışma Saatleri',
      info: 'Pazartesi - Cuma: 09:00 - 18:00',
      info2: 'Cumartesi: 10:00 - 15:00',
      color: 'tonys-pink',
    },
  ];

  const services = [
    'Web Tasarım & Geliştirme',
    'Mobil Uygulama Geliştirme',
    'E-Ticaret Çözümleri',
    'Dijital Pazarlama',
    'Marka & Grafik Tasarım',
    'Bakım & Destek',
    'Diğer',
  ];

  const budgetRanges = [
    '5.000₺ - 10.000₺',
    '10.000₺ - 25.000₺',
    '25.000₺ - 50.000₺',
    '50.000₺ - 100.000₺',
    '100.000₺+',
    'Henüz Karar Vermedim',
  ];

  const faqs = [
    {
      question: 'Proje süreniz ne kadar?',
      answer: 'Proje süreleri projenin kapsamına göre değişmektedir. Ortalama bir web sitesi projesi 4-8 hafta arasında tamamlanmaktadır.',
    },
    {
      question: 'Ödeme şekliniz nasıl?',
      answer: 'Projelerimizde genellikle %50 ön ödeme, %50 teslimat sonrası ödeme şeklinde çalışmaktayız. Büyük projelerde taksitli ödeme seçenekleri sunmaktayız.',
    },
    {
      question: 'Proje sonrası destek veriyor musunuz?',
      answer: 'Evet, tüm projelerimizde proje sonrası destek hizmeti sunuyoruz. Destek süreleri paket seçiminize göre değişmektedir.',
    },
    {
      question: 'Hangi teknolojileri kullanıyorsunuz?',
      answer: 'React, Vue.js, Node.js, React Native, Flutter gibi modern teknolojiler kullanarak projelerimizi geliştiriyoruz.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-supernova opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 animate-fadeInUp">
            <h1 className="font-display font-bold text-5xl md:text-6xl">
              İletişim
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Projeniz için ücretsiz danışmanlık almak veya sorularınızı sormak için bizimle iletişime geçin. 
              Size en kısa sürede dönüş yapalım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-10 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover-lift text-center group"
              >
                <div className={`w-16 h-16 bg-${item.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${item.icon} text-2xl text-${item.color}`}></i>
                </div>
                <h3 className="font-display font-bold text-lg text-custom-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gunsmoke text-sm mb-1">{item.info}</p>
                <p className="text-gunsmoke text-sm">{item.info2}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="font-display font-bold text-3xl text-custom-black mb-4">
                  Bize Yazın
                </h2>
                <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
              </div>

              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  <i className={`fas ${formStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2`}></i>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-custom-black font-semibold mb-2">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gunsmoke/30 rounded-lg focus:border-flamingo focus:outline-none transition-colors"
                    placeholder="Örn: Ahmet Yılmaz"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-custom-black font-semibold mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gunsmoke/30 rounded-lg focus:border-flamingo focus:outline-none transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-custom-black font-semibold mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gunsmoke/30 rounded-lg focus:border-flamingo focus:outline-none transition-colors"
                      placeholder="+90 555 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-custom-black font-semibold mb-2">
                    Hizmet Seçimi *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gunsmoke/30 rounded-lg focus:border-flamingo focus:outline-none transition-colors"
                  >
                    <option value="">Hizmet Seçiniz</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-custom-black font-semibold mb-2">
                    Bütçe Aralığınız
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gunsmoke/30 rounded-lg focus:border-flamingo focus:outline-none transition-colors"
                  >
                    <option value="">Bütçe Seçiniz</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-custom-black font-semibold mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gunsmoke/30 rounded-lg focus:border-flamingo focus:outline-none transition-colors resize-none"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-center"
                >
                  Mesaj Gönder
                  <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.7039823843744!2d29.014491315415908!3d41.08568217929242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5f8f0d1e5a3%3A0x5a8d0c7e5c4d8f9a!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%2C%2034398%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Creative Studio Location"
                ></iframe>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="font-display font-bold text-2xl mb-6">
                  Neden Bizi Seçmelisiniz?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-supernova text-xl mr-3 mt-1"></i>
                    <span>Ücretsiz danışmanlık ve proje analizi</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-supernova text-xl mr-3 mt-1"></i>
                    <span>Şeffaf fiyatlandırma, gizli maliyet yok</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-supernova text-xl mr-3 mt-1"></i>
                    <span>Zamanında teslimat garantisi</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-supernova text-xl mr-3 mt-1"></i>
                    <span>Proje sonrası destek hizmeti</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-supernova text-xl mr-3 mt-1"></i>
                    <span>8 yıllık tecrübe ve 250+ başarılı proje</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="font-display font-bold text-2xl text-custom-black mb-6">
                  Sosyal Medya
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-flamingo to-supernova rounded-xl text-white hover:scale-105 transition-transform duration-300"
                  >
                    <i className="fab fa-instagram text-3xl mb-2"></i>
                    <span className="text-sm font-semibold">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl text-white hover:scale-105 transition-transform duration-300"
                  >
                    <i className="fab fa-facebook-f text-3xl mb-2"></i>
                    <span className="text-sm font-semibold">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl text-white hover:scale-105 transition-transform duration-300"
                  >
                    <i className="fab fa-twitter text-3xl mb-2"></i>
                    <span className="text-sm font-semibold">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white hover:scale-105 transition-transform duration-300"
                  >
                    <i className="fab fa-linkedin-in text-3xl mb-2"></i>
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-red-500 to-red-700 rounded-xl text-white hover:scale-105 transition-transform duration-300"
                  >
                    <i className="fab fa-youtube text-3xl mb-2"></i>
                    <span className="text-sm font-semibold">YouTube</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white hover:scale-105 transition-transform duration-300"
                  >
                    <i className="fab fa-behance text-3xl mb-2"></i>
                    <span className="text-sm font-semibold">Behance</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-custom-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Sıkça Sorulan <span className="gradient-text">Sorular</span>
            </h2>
            <p className="text-lg text-gunsmoke">
              Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-cape-cod rounded-xl p-6 hover:bg-gradient-primary transition-all duration-300 group cursor-pointer"
              >
                <summary className="font-display font-bold text-lg text-white flex items-center justify-between cursor-pointer">
                  {faq.question}
                  <i className="fas fa-chevron-down group-open:rotate-180 transition-transform duration-300"></i>
                </summary>
                <p className="text-gunsmoke mt-4 leading-relaxed group-hover:text-white/90">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gunsmoke mb-6">
              Sorunuzun cevabını bulamadınız mı?
            </p>
            <a
              href="mailto:info@creativestudio.com"
              className="btn-primary inline-block"
            >
              Bize E-posta Gönderin
              <i className="fas fa-envelope ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
              Diğer İletişim <span className="gradient-text">Yöntemleri</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a
              href="tel:+905551234567"
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center group border-2 border-transparent hover:border-flamingo transition-all"
            >
              <div className="w-20 h-20 bg-flamingo bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-phone text-3xl text-flamingo"></i>
              </div>
              <h3 className="font-display font-bold text-xl text-custom-black mb-3">
                Telefon ile Arayın
              </h3>
              <p className="text-gunsmoke mb-4">
                Anında destek almak için bizi arayın.
              </p>
              <span className="text-flamingo font-semibold">
                +90 (555) 123 45 67
              </span>
            </a>

            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center group border-2 border-transparent hover:border-green-500 transition-all"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-whatsapp text-3xl text-green-500"></i>
              </div>
              <h3 className="font-display font-bold text-xl text-custom-black mb-3">
                WhatsApp Desteği
              </h3>
              <p className="text-gunsmoke mb-4">
                Hızlı mesajlaşma için WhatsApp'tan yazın.
              </p>
              <span className="text-green-500 font-semibold">
                Mesaj Gönder
              </span>
            </a>

            <a
              href="mailto:info@creativestudio.com"
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center group border-2 border-transparent hover:border-supernova transition-all"
            >
              <div className="w-20 h-20 bg-supernova bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-envelope text-3xl text-supernova"></i>
              </div>
              <h3 className="font-display font-bold text-xl text-custom-black mb-3">
                E-posta Gönderin
              </h3>
              <p className="text-gunsmoke mb-4">
                Detaylı bilgi için e-posta atın.
              </p>
              <span className="text-supernova font-semibold">
                info@creativestudio.com
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

