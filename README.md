# IG Yazılım - Türkiye'nin Web Tasarım ve Yazılım Firması

İstanbul, Ankara, İzmir ve tüm Türkiye'de profesyonel web tasarım, mobil uygulama geliştirme ve dijital pazarlama hizmetleri. Modern ve yaratıcı multi-page web sitesi. React ve Tailwind CSS ile geliştirilmiştir.

## 🎨 Özellikler

- ✨ Modern ve minimalist tasarım
- 🎨 Turuncu renk teması (#f06236 Flamingo, #fcc809 Supernova)
- 📱 Responsive mobil-first yaklaşım
- 🚀 Smooth animasyonlar ve transitions
- 💫 Interaktif hover efektleri
- 🎯 SEO optimizasyonu
- ⚡ Hızlı performans

## 📄 Sayfalar

- **Ana Sayfa**: Hero section, özellik kartları, istatistikler, referanslar
- **Hizmetler**: Grid layout, ikon kartları, fiyatlandırma
- **Portfolyo**: Galeri, filtreleme sistemi, proje detayları
- **Hakkımızda**: Ekip, hikaye, değerler, timeline
- **İletişim**: Form, harita, iletişim bilgileri, SSS

## 🎨 Renk Paleti

```
Flamingo:     #f06236  (Birincil/Ana renk)
Supernova:    #fcc809  (Vurgu ve highlight)
Black:        #010101  (Metin ve kontrast)
White:        #fdfdfd  (Arka plan)
Cape Cod:     #414342  (İkincil koyu renk)
Gunsmoke:     #838888  (Neutral/gri tonlar)
Tonys Pink:   #e7ac94  (Yumuşak aksenler)
Hacienda:     #8b7813  (Dekoratif detaylar)
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Kurulum Adımları

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **React uygulamasını derleyin:**
```bash
npm run build
```

3. **Sunucuyu başlatın:**
```bash
npm start
```

4. **Tarayıcınızda açın:**
```
http://localhost:3000
```

## 🛠️ Geliştirme Modu

Geliştirme yaparken dosyaları otomatik olarak izlemek için:

```bash
# Terminal 1: Webpack watch mode
npm run watch

# Terminal 2: Server
npm start
```

## 📦 Teknolojiler

- **Frontend**: React 18, React Router DOM 6
- **Styling**: Tailwind CSS 3
- **Build Tool**: Webpack 5, Babel
- **Backend**: Express.js
- **Icons**: Font Awesome 6
- **Fonts**: Inter, Poppins (Google Fonts)

## 📁 Proje Yapısı

```
nodejs/
├── public/
│   ├── index.html          # Ana HTML dosyası
│   └── bundle.js           # Build edilmiş JS dosyası (otomatik oluşur)
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.js              # Ana uygulama
│   ├── index.js            # Giriş noktası
│   └── index.css           # Global stiller ve Tailwind
├── server.js               # Express sunucusu
├── webpack.config.js       # Webpack yapılandırması
├── tailwind.config.js      # Tailwind yapılandırması
├── postcss.config.js       # PostCSS yapılandırması
├── package.json
└── README.md
```

## 🎯 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.js` dosyasındaki `colors` bölümünden renkleri özelleştirebilirsiniz:

```javascript
colors: {
  flamingo: '#f06236',
  supernova: '#fcc809',
  // ...diğer renkler
}
```

### İçerik Güncelleme

Her sayfa `src/pages/` klasöründe ayrı bir dosya olarak bulunur. İçerikleri doğrudan bu dosyaları düzenleyerek güncelleyebilirsiniz.

## 📱 Responsive Tasarım

Tüm sayfalar mobil, tablet ve desktop cihazlarda mükemmel görünecek şekilde optimize edilmiştir.

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Production Build

Production için optimize edilmiş build oluşturmak için:

```bash
npm run build
```

Bu komut minified ve optimize edilmiş `bundle.js` dosyası oluşturur.

## 📄 Lisans

Bu proje özel kullanım içindir.

## 👨‍💻 Geliştirici

Creative Studio - Modern Web Çözümleri

---

**Not**: İlk çalıştırmada mutlaka `npm install` ve `npm run build` komutlarını çalıştırın!

