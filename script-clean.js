console.log('Astro Durga Prasad Website Loaded Successfully ✨');

// Function to create flower
function createFlower(x, y) {
    const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '🌷', '🏵️', '💐', '🌹'];
    const currentTime = Date.now();
    
    // Throttle flower creation
    if (currentTime - (window.lastFlowerTime || 0) < 100) {
        return;
    }
    
    window.lastFlowerTime = currentTime;
    
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
        if (flower.parentNode) {
            flower.remove();
        }
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Custom Success Alert Function
function showSuccessAlert() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(5px);
    `;
    
    // Create alert box
    const alertBox = document.createElement('div');
    alertBox.style.cssText = `
        background: linear-gradient(135deg, #000000 0%, #1a0000 50%, #330000 100%);
        border: 3px solid #ff8c00;
        border-radius: 20px;
        padding: 40px 30px;
        text-align: center;
        max-width: 450px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: alertSlideIn 0.5s ease-out;
        position: relative;
    `;
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes alertSlideIn {
            0% {
                transform: scale(0.7) translateY(-50px);
                opacity: 0;
            }
            100% {
                transform: scale(1) translateY(0);
                opacity: 1;
            }
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
        @keyframes fadeOut {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.9); }
        }
    `;
    document.head.appendChild(style);
    
    alertBox.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px; animation: bounce 2s infinite;">🙏</div>
        <h2 style="color: #ff8c00; font-family: 'Cinzel', serif; font-size: 1.8rem; margin-bottom: 16px; text-shadow: 0 0 10px rgba(255, 140, 0, 0.5);">
            Thank You!
        </h2>
        <p style="color: #ffffff; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">
            Your consultation request has been received successfully.
        </p>
        <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.95rem; margin-bottom: 25px;">
            We will contact you within <strong style="color: #ff8c00;">24 hours</strong> via email or phone.
        </p>
        <div style="background: rgba(255, 140, 0, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 25px; border: 1px solid rgba(255, 140, 0, 0.3);">
            <p style="color: #ff8c00; font-size: 0.9rem; margin: 0;">
                📞 For urgent matters: <strong>+1 (630) 666-9744</strong>
            </p>
        </div>
        <button onclick="closeSuccessAlert()" style="
            background: linear-gradient(135deg, #dc143c 0%, #ff4500 50%, #ff8c00 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s ease;
            box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Continue
        </button>
    `;
    
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
    
    // Store reference for closing
    window.currentAlert = overlay;
    
    // Auto close after 10 seconds
    setTimeout(() => {
        if (window.currentAlert) {
            closeSuccessAlert();
        }
    }, 10000);
}

// Function to close the alert
function closeSuccessAlert() {
    if (window.currentAlert) {
        window.currentAlert.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (window.currentAlert && window.currentAlert.parentNode) {
                window.currentAlert.parentNode.removeChild(window.currentAlert);
            }
            window.currentAlert = null;
        }, 300);
    }
}

// Simple form submission (works without EmailJS)
document.addEventListener('DOMContentLoaded', function() {
    const consultationForm = document.getElementById('consultationForm');
    
    if (consultationForm) {
        console.log('Consultation form found');
        
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                country: document.getElementById('country').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form Data:', formData);
            
            // Simulate processing time
            setTimeout(() => {
                // Show success alert
                showSuccessAlert();
                
                // Reset form
                consultationForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                
                console.log('Form submission completed successfully');
            }, 2000);
        });
    }
});


// Stats Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString() + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString() + suffix;
        }
    };
    
    updateCounter();
}

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (stat.textContent === '0') {
                    animateCounter(stat);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats section
document.addEventListener('DOMContentLoaded', function() {
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        statsObserver.observe(statsGrid);
    }
});
