import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Tümü', icon: 'fas fa-th' },
    { id: 'web', label: 'Web Tasarım', icon: 'fas fa-laptop-code' },
    { id: 'mobile', label: 'Mobil Uygulama', icon: 'fas fa-mobile-alt' },
    { id: 'ecommerce', label: 'E-Ticaret', icon: 'fas fa-shopping-cart' },
    { id: 'branding', label: 'Marka Tasarımı', icon: 'fas fa-paint-brush' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern E-Ticaret Platformu',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
      client: 'TechStore',
      year: '2024',
      description: 'Kullanıcı dostu arayüz ve güçlü ödeme sistemleriyle tam entegre e-ticaret çözümü.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'Kurumsal Web Sitesi',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      client: 'Global Corp',
      year: '2024',
      description: 'Profesyonel ve modern kurumsal web sitesi tasarımı ve geliştirmesi.',
      tags: ['React', 'Tailwind CSS', 'SEO'],
      link: '#',
    },
    {
      id: 3,
      title: 'Fitness Mobil Uygulaması',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      client: 'FitLife',
      year: '2023',
      description: 'Kullanıcı takip sistemi ve kişiselleştirilmiş antrenman programları içeren mobil uygulama.',
      tags: ['React Native', 'Firebase', 'Health Kit'],
      link: '#',
    },
    {
      id: 4,
      title: 'Restoran Marka Kimliği',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
      client: 'Gourmet Kitchen',
      year: '2024',
      description: 'Kapsamlı marka kimliği tasarımı, logo ve kurumsal materyal çalışmaları.',
      tags: ['Adobe XD', 'Illustrator', 'Brand Identity'],
      link: '#',
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      client: 'DataFlow',
      year: '2024',
      description: 'Veri görselleştirme ve analitik araçları içeren SaaS platformu dashboard tasarımı.',
      tags: ['Vue.js', 'Chart.js', 'REST API'],
      link: '#',
    },
    {
      id: 6,
      title: 'Emlak Mobil Uygulaması',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      client: 'HomeSeeker',
      year: '2023',
      description: 'Harita entegrasyonlu, gelişmiş filtreleme özellikleriyle emlak arama uygulaması.',
      tags: ['Flutter', 'Google Maps', 'Firebase'],
      link: '#',
    },
    {
      id: 7,
      title: 'Moda E-Ticaret',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      client: 'Fashion Hub',
      year: '2024',
      description: 'Şık tasarım ve güçlü stok yönetimiyle moda e-ticaret platformu.',
      tags: ['Next.js', 'Shopify', 'Analytics'],
      link: '#',
    },
    {
      id: 8,
      title: 'Startup Logo & Kimlik',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800',
      client: 'InnoTech',
      year: '2023',
      description: 'Teknoloji startup\'ı için modern ve minimal logo tasarımı ve marka rehberi.',
      tags: ['Logo Design', 'Brand Guide', 'Typography'],
      link: '#',
    },
    {
      id: 9,
      title: 'Eğitim Platformu',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
      client: 'EduLearn',
      year: '2024',
      description: 'Video dersler ve sınav sistemi içeren kapsamlı online eğitim platformu.',
      tags: ['React', 'Video.js', 'LMS'],
      link: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Portfolyo
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Başarılı projelerimizi keşfedin. Her biri benzersiz çözümler ve yaratıcı yaklaşımlarla hayata geçirildi.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-gradient-primary text-white shadow-lg scale-105'
                    : 'bg-white text-custom-black border-2 border-gunsmoke hover:border-flamingo'
                }`}
              >
                <i className={category.icon}></i>
                <span>{category.label}</span>
                {activeFilter === category.id && (
                  <span className="bg-white text-flamingo rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift card-glow cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-custom-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="bg-white text-flamingo px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Detayları Gör
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-primary text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-custom-black mb-2 group-hover:text-flamingo transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gunsmoke mb-4">
                    <i className="fas fa-user mr-2"></i>
                    {project.client}
                  </p>
                  <p className="text-gunsmoke mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-tonys-pink bg-opacity-20 text-flamingo px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <i className="fas fa-folder-open text-6xl text-gunsmoke mb-4"></i>
              <h3 className="font-display font-bold text-2xl text-custom-black mb-2">
                Proje Bulunamadı
              </h3>
              <p className="text-gunsmoke">
                Bu kategoride henüz proje bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="font-display font-bold text-4xl md:text-5xl">250+</div>
              <div className="text-white/90">Tamamlanan Proje</div>
            </div>
            <div className="space-y-2">
              <div className="font-display font-bold text-4xl md:text-5xl">180+</div>
              <div className="text-white/90">Mutlu Müşteri</div>
            </div>
            <div className="space-y-2">
              <div className="font-display font-bold text-4xl md:text-5xl">15+</div>
              <div className="text-white/90">Kazanılan Ödül</div>
            </div>
            <div className="space-y-2">
              <div className="font-display font-bold text-4xl md:text-5xl">98%</div>
              <div className="text-white/90">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
              Kullandığımız <span className="gradient-text">Teknolojiler</span>
            </h2>
            <p className="text-lg text-gunsmoke">
              En son ve en iyi teknolojilerle projelerinizi geliştiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: 'fab fa-react', color: 'text-blue-500' },
              { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
              { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-green-600' },
              { name: 'Angular', icon: 'fab fa-angular', color: 'text-red-600' },
              { name: 'WordPress', icon: 'fab fa-wordpress', color: 'text-blue-600' },
              { name: 'Shopify', icon: 'fab fa-shopify', color: 'text-green-700' },
              { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-500' },
              { name: 'PHP', icon: 'fab fa-php', color: 'text-purple-600' },
              { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-red-500' },
              { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-400' },
              { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-500' },
              { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-center group"
              >
                <i className={`${tech.icon} text-5xl ${tech.color} mb-3 group-hover:animate-pulse`}></i>
                <p className="font-semibold text-custom-black">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-custom-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-supernova rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Bir Sonraki Projemiz
              <span className="block gradient-text">Sizin Olabilir!</span>
            </h2>
            <p className="text-xl text-gunsmoke">
              Hayalinizdeki projeyi birlikte gerçekleştirelim. Ücretsiz danışmanlık için hemen iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Projenizi Başlatın
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-flamingo text-flamingo font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-flamingo hover:text-white">
                Hizmetlerimizi Görün
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-custom-black hover:bg-flamingo hover:text-white transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-custom-black to-transparent p-8">
                <h2 className="font-display font-bold text-3xl text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-white/80">
                  <i className="fas fa-user mr-2"></i>
                  {selectedProject.client} • {selectedProject.year}
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gunsmoke text-lg mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-custom-black mb-3">
                  Kullanılan Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-primary text-white px-4 py-2 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  Projeyi Görüntüle
                  <i className="fas fa-external-link-alt ml-2"></i>
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary flex-1 text-center"
                >
                  Benzer Proje İstiyorum
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

