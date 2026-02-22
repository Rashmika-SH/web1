// Force page to start from top on load/refresh
(function() {
    // Immediately scroll to top
    window.scrollTo(0, 0);
    
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
})();

// Additional scroll to top on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Scroll to top on page refresh/load
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Alternative method - scroll to top when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 0);
});

// Force scroll to top on page refresh (for browsers that maintain scroll position)
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Optimize hero image loading
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    heroImage.addEventListener('load', () => {
        heroImage.classList.add('loaded');
    });
    
    // If image is already cached and loaded
    if (heroImage.complete) {
        heroImage.classList.add('loaded');
    }
}

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animated counter for stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.parentElement.querySelector('.stat-label').textContent.includes('%') ? '%' : '+');
        }
    };

    updateCounter();
};

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stat-number') && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.service-card, .testimonial-card, .blog-card, .feature-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Observe stat numbers
document.querySelectorAll('.stat-number').forEach(el => {
    observer.observe(el);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Testimonial Slider
let currentSlide = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlider() {
    // For mobile view, show one card at a time
    if (window.innerWidth <= 768) {
        testimonialCards.forEach((card, index) => {
            card.style.display = index === currentSlide ? 'block' : 'none';
        });
    } else {
        // For desktop, show all cards
        testimonialCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : testimonialCards.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide < testimonialCards.length - 1 ? currentSlide + 1 : 0;
        updateSlider();
    });
}

// Update slider on window resize
window.addEventListener('resize', updateSlider);
updateSlider();

// Form submission
const consultationForm = document.getElementById('consultationForm');

if (consultationForm) {
    consultationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(consultationForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = consultationForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Remove any existing messages
            const existingMessage = consultationForm.querySelector('.success-message, .error-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you! Your consultation request has been received. We will contact you within 24 hours.';
            consultationForm.appendChild(successMessage);
            
            // Reset form
            consultationForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('loading');
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }, 1500);
        
        // In production, replace the setTimeout with actual API call:
        /*
        try {
            const response = await fetch('/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you! Your consultation request has been received.';
                consultationForm.appendChild(successMessage);
                consultationForm.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Something went wrong. Please try again or contact us directly.';
            consultationForm.appendChild(errorMessage);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('loading');
        }
        */
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simulate subscription (replace with actual API call)
        alert(`Thank you for subscribing with ${email}! You'll receive weekly horoscopes and astrology insights.`);
        newsletterForm.reset();
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
    }
});

// Lazy loading for images (when you add actual images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
});

console.log('Astro Durga Prasad Website Loaded Successfully ✨');

// Flower dropping animation on cursor movement
const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '🌷', '🏵️', '💐', '🌹'];
let lastFlowerTime = 0;
const flowerDelay = 100; // Milliseconds between flowers

// Function to create flower
function createFlower(x, y) {
    const currentTime = Date.now();
    
    // Throttle flower creation
    if (currentTime - lastFlowerTime < flowerDelay) {
        return;
    }
    
    lastFlowerTime = currentTime;
    
    // Create flower element
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    
    // Position at cursor/touch point
    flower.style.left = x + 'px';
    flower.style.top = y + 'px';
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    flower.style.setProperty('--drift', drift + 'px');
    
    // Random rotation
    const rotation = Math.random() * 360;
    flower.style.setProperty('--rotation', rotation + 'deg');
    
    // Random animation duration
    const duration = 2 + Math.random() * 2;
    flower.style.animationDuration = duration + 's';
    
    document.body.appendChild(flower);
    
    // Remove flower after animation
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Desktop: Mouse move
document.addEventListener('mousemove', (e) => {
    createFlower(e.pageX, e.pageY);
});

// Mobile: Touch move
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        createFlower(touch.pageX, touch.pageY);
    }
});

// Mobile: Scroll event (create flowers at random positions)
let lastScrollTime = 0;
const scrollFlowerDelay = 200;

window.addEventListener('scroll', () => {
    const currentTime = Date.now();
    
    if (currentTime - lastScrollTime < scrollFlowerDelay) {
        return;
    }
    
    lastScrollTime = currentTime;
    
    // Create flower at random position on screen
    const x = Math.random() * window.innerWidth;
    const y = window.scrollY + Math.random() * window.innerHeight;
    
    createFlower(x, y);
});

// Service card image modal
const serviceImages = document.querySelectorAll('.service-card .service-image img');

// Create modal element
const modal = document.createElement('div');
modal.className = 'image-modal';
modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <button class="modal-close">&times;</button>
        <img src="" alt="" class="modal-image">
    </div>
`;
document.body.appendChild(modal);

const modalImage = modal.querySelector('.modal-image');
const modalClose = modal.querySelector('.modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');

// Open modal when service image is clicked
serviceImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
        e.preventDefault();
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
};

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
