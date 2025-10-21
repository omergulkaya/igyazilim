// IG Yazılım - Main JavaScript File

$(document).ready(function() {
    
    // Loading Animation
    setTimeout(function() {
        $('.loading-overlay').fadeOut(500);
    }, 1000);

    // Navbar Scroll Effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-custom').addClass('scrolled');
        } else {
            $('.navbar-custom').removeClass('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'easeInOutExpo');
        }
    });

    // Mobile Navigation Toggle
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('show');
    });

    // Close mobile menu when clicking on a link
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-collapse').removeClass('show');
    });

    // Active Navigation Link
    function updateActiveNav() {
        var scrollPos = $(window).scrollTop() + 100;
        $('.nav-link-custom').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link-custom').removeClass('active');
                currLink.addClass('active');
            }
        });
    }

    $(window).scroll(updateActiveNav);

    // Counter Animation
    function animateCounters() {
        $('.stat-number').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // Trigger counter animation when in viewport
    function checkCounters() {
        $('.stat-number').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                if (!$(this).hasClass('animated')) {
                    $(this).addClass('animated');
                    animateCounters();
                }
            }
        });
    }

    $(window).scroll(checkCounters);

    // Parallax Effect
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        var parallax = $('.parallax-element');
        var speed = 0.5;
        parallax.css('transform', 'translateY(' + (scrolled * speed) + 'px)');
    });

    // AOS (Animate On Scroll) Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Typed.js Effect for Hero Text
    if (typeof Typed !== 'undefined' && $('#typed-text').length) {
        new Typed('#typed-text', {
            strings: [
                'Dijital Pazarlama',
                'SEO Optimizasyonu', 
                'Google Ads Yönetimi',
                'Sosyal Medya Pazarlama',
                'Web Analitik'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Particles.js Background
    if (typeof particlesJS !== 'undefined' && $('#particles-js').length) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#f06236'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.1,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#f06236',
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Form Validation and Submission
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        var form = $(this);
        var formData = form.serialize();
        
        // Add loading state
        form.find('button[type="submit"]').html('<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...');
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(function() {
            form.find('button[type="submit"]').html('<i class="fas fa-check"></i> Gönderildi!');
            form[0].reset();
            
            // Show success message
            Swal.fire({
                title: 'Başarılı!',
                text: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
                icon: 'success',
                confirmButtonColor: '#f06236'
            });
            
            setTimeout(function() {
                form.find('button[type="submit"]').html('<i class="fas fa-paper-plane"></i> Mesaj Gönder');
            }, 3000);
        }, 2000);
    });

    // Tilt.js Effect for Cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.card-custom'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.2
        });
    }

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        // Hero Animation
        gsap.timeline()
            .from('.hero-title', { duration: 1, y: 100, opacity: 0, ease: 'power3.out' })
            .from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5')
            .from('.hero-buttons', { duration: 1, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.3');

        // Floating Elements Animation
        gsap.to('.floating-element-1', {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
        });

        gsap.to('.floating-element-2', {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: 1
        });

        gsap.to('.floating-element-3', {
            y: -25,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: 2
        });

        // ScrollTrigger for sections
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray('.card-custom').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    delay: i * 0.2,
                    ease: 'power3.out'
                });
            });
        }
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.card-custom, .stat-item').forEach(el => {
        observer.observe(el);
    });

    // Page Transitions
    function pageTransition() {
        $('body').addClass('page-transition');
        setTimeout(function() {
            $('body').removeClass('page-transition');
        }, 500);
    }

    // Preloader
    $(window).on('load', function() {
        $('.loading-overlay').fadeOut(1000);
    });

    // Custom Cursor (Optional)
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }

    // Back to Top Button
    const backToTop = $('<button class="back-to-top"><i class="fas fa-arrow-up"></i></button>');
    $('body').append(backToTop);

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    });

    backToTop.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // Performance Optimization
    let ticking = false;
    function updateOnScroll() {
        updateActiveNav();
        checkCounters();
        ticking = false;
    }

    $(window).scroll(function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

});

// Utility Functions
function showNotification(message, type = 'success') {
    const notification = $(`
        <div class="notification notification-${type}">
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            ${message}
        </div>
    `);
    
    $('body').append(notification);
    
    setTimeout(() => {
        notification.addClass('show');
    }, 100);
    
    setTimeout(() => {
        notification.removeClass('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Page Load Performance
window.addEventListener('load', function() {
    // Remove loading class from body
    document.body.classList.remove('loading');
    
    // Initialize lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
