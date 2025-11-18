// Salesforce Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', function () {
    // Initialize dynamic time-based theme
    initDynamicTheme();

    // Navigation functionality
    initNavigation();

    // Scroll animations
    initScrollAnimations();

    // Skill bar animations
    initSkillBars();

    // Form handling
    initContactForm();

    // Smooth scrolling for navigation links
    initSmoothScrolling();

    // Typing animation for hero section
    initTypingAnimation();

    // Parallax effects
    initParallaxEffects();

    // Loading animations
    initLoadingAnimations();
});

// Dynamic Time-based Theme System
function initDynamicTheme() {
    const dynamicBackground = document.getElementById('dynamicBackground');
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentTime = currentHour + (currentMinutes / 60);

    // Check for theme override (for testing)
    const themeOverride = sessionStorage.getItem('themeOverride');

    let theme;
    if (themeOverride && ['sunrise', 'morning', 'afternoon', 'sunset', 'dusk', 'night'].includes(themeOverride)) {
        theme = themeOverride;
        // Clear override after use
        sessionStorage.removeItem('themeOverride');
        console.log(`🧪 Theme Override: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`);
    } else {
        // Determine theme based on realistic sun cycle
        if (currentTime >= 6 && currentTime < 8) {
            theme = 'sunrise';  // 6 AM - 8 AM: Sunrise
        } else if (currentTime >= 8 && currentTime < 12) {
            theme = 'morning';  // 8 AM - 12 PM: Morning
        } else if (currentTime >= 12 && currentTime < 17) {
            theme = 'afternoon'; // 12 PM - 5 PM: Afternoon
        } else if (currentTime >= 17 && currentTime < 19.5) {
            theme = 'sunset';   // 5 PM - 7:30 PM: Sunset
        } else if (currentTime >= 19.5 && currentTime < 22) {
            theme = 'dusk';     // 7:30 PM - 10 PM: Dusk
        } else {
            theme = 'night';    // 10 PM - 6 AM: Night with moon
        }

        console.log(`🌅 Portfolio Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)} (${currentHour}:${currentMinutes.toString().padStart(2, '0')})`);
    }

    // Apply the theme
    applyTheme(theme);

    // Update theme colors in CSS variables
    updateThemeColors(theme);
} function applyTheme(theme) {
    const dynamicBackground = document.getElementById('dynamicBackground');
    const body = document.body;

    // Remove existing theme classes
    dynamicBackground.className = 'dynamic-background';
    body.classList.remove('theme-night', 'theme-dawn', 'theme-day', 'theme-sunset',
        'theme-sunrise', 'theme-morning', 'theme-afternoon', 'theme-dusk');

    // Add new theme class
    dynamicBackground.classList.add(theme);
    body.classList.add(`theme-${theme}`);

    // Update document root classes for CSS targeting
    document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeColors(theme) {
    const root = document.documentElement;

    const themes = {
        sunrise: {
            '--primary-bg': 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 50%, #fd79a8 100%)',
            '--secondary-color': '#2d3436',
            '--accent-color': '#6c5ce7',
            '--text-light': '#2d3436',
            '--particle-color': '#fdcb6e'
        },
        morning: {
            '--primary-bg': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #00b894 100%)',
            '--secondary-color': '#2d3436',
            '--accent-color': '#e84393',
            '--text-light': '#2d3436',
            '--particle-color': '#00cec9'
        },
        afternoon: {
            '--primary-bg': 'linear-gradient(135deg, #fdcb6e 0%, #e17055 50%, #74b9ff 100%)',
            '--secondary-color': '#2d3436',
            '--accent-color': '#a29bfe',
            '--text-light': '#2d3436',
            '--particle-color': '#00b894'
        },
        sunset: {
            '--primary-bg': 'linear-gradient(135deg, #fd79a8 0%, #e84393 50%, #a29bfe 100%)',
            '--secondary-color': '#2d3436',
            '--accent-color': '#fdcb6e',
            '--text-light': '#ffffff',
            '--particle-color': '#fab1a0'
        },
        dusk: {
            '--primary-bg': 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #2d3436 100%)',
            '--secondary-color': '#ddd',
            '--accent-color': '#fdcb6e',
            '--text-light': '#ffffff',
            '--particle-color': '#74b9ff'
        },
        night: {
            '--primary-bg': 'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #000000 100%)',
            '--secondary-color': '#ddd',
            '--accent-color': '#fdcb6e',
            '--text-light': '#ffffff',
            '--particle-color': '#74b9ff'
        }
    };

    const currentTheme = themes[theme];
    if (currentTheme) {
        Object.keys(currentTheme).forEach(property => {
            root.style.setProperty(property, currentTheme[property]);
        });
    }
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation highlighting
    window.addEventListener('scroll', highlightActiveNavigation);
    highlightActiveNavigation(); // Initial call
}

// Highlight active navigation based on scroll position
function highlightActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;

        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Trigger skill bar animation when skills section is visible
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }

                // Trigger counter animation when about section is visible
                if (entry.target.classList.contains('about')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToObserve = document.querySelectorAll('section, .project-card, .certification-card, .timeline-item');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// Skill bar animations
function initSkillBars() {
    // Add initial styles for animation
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        bar.setAttribute('data-width', width);
    });
}

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        }, index * 200);
    });
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 50);
    });
}

// Typing animation for hero section
function initTypingAnimation() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';

        let index = 0;
        const typingSpeed = 100;

        function typeText() {
            if (index < text.length) {
                heroName.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, typingSpeed);
            }
        }

        // Start typing animation after a short delay
        setTimeout(typeText, 1000);
    }
}

// Parallax effects for floating elements
function initParallaxEffects() {
    const floatingElements = document.querySelectorAll('.floating-element');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        floatingElements.forEach((element, index) => {
            const speed = parallaxSpeed * (index + 1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Contact form handling
function initContactForm() {
    const form = document.querySelector('.contact-form form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitButton = form.querySelector('.btn-primary');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#E53935' : '#1589EE'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    `;

    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        closeNotification(notification);
    });

    // Auto close after 5 seconds
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

// Close notification function
function closeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Loading animations
function initLoadingAnimations() {
    // Add fade-in animation to elements
    const elementsToAnimate = document.querySelectorAll('.hero-content, .about-content, .skill-category, .project-card, .certification-card, .timeline-item');

    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Utility function for debouncing scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced scroll handling with debouncing
const debouncedScrollHandler = debounce(() => {
    highlightActiveNavigation();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Mouse follow effect for hero section
function initMouseFollowEffect() {
    const heroSection = document.querySelector('.hero');
    const floatingElements = document.querySelectorAll('.floating-element');

    if (heroSection) {
        heroSection.addEventListener('mousemove', function (e) {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                element.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }
}

// Initialize mouse follow effect
initMouseFollowEffect();

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #1589EE, #FF6B35);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function () {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress indicator
initScrollProgress();

// Add keyboard navigation support
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Lazy load images (if any are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Handle profile image loading
initProfileImage();

// Profile image handling function
function initProfileImage() {
    const profileImages = document.querySelectorAll('.profile-photo, .about-profile-img');

    profileImages.forEach(img => {
        // Add loading event listener
        img.addEventListener('load', function () {
            console.log('Profile image loaded successfully');
            // Hide any fallback content
            const avatar = this.closest('.hero-avatar');
            if (avatar) {
                avatar.style.background = 'transparent';
            }
        });

        // Add error event listener
        img.addEventListener('error', function () {
            console.log('Profile image failed to load, using fallback');
            // Show fallback avatar
            const avatar = this.closest('.hero-avatar');
            if (avatar) {
                avatar.style.background = 'linear-gradient(135deg, var(--sf-blue), var(--sf-blue-dark))';
                // Hide the broken image
                this.style.display = 'none';
                // Show fallback icon
                if (!avatar.querySelector('.fallback-icon')) {
                    const fallbackIcon = document.createElement('i');
                    fallbackIcon.className = 'fas fa-user-tie fallback-icon';
                    fallbackIcon.style.cssText = `
                        font-size: 4rem;
                        color: var(--sf-white);
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    `;
                    avatar.appendChild(fallbackIcon);
                }
            }
        });

        // Force check if image is already loaded or has error
        if (img.complete) {
            if (img.naturalWidth === 0) {
                img.dispatchEvent(new Event('error'));
            } else {
                img.dispatchEvent(new Event('load'));
            }
        }
    });
}

// Email functionality using EmailJS with your service
function initEmailJS() {
    // Initialize EmailJS with your public key
    emailjs.init("n-iXT72loogbzOrZG");

    const contactForm = document.getElementById('contactForm');
    const sendButton = document.getElementById('sendButton');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate form
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                showFormMessage('❌ Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFormMessage('❌ Please enter a valid email address.', 'error');
                return;
            }

            // Show loading state with error checking
            const buttonText = sendButton.querySelector('.button-text');
            const buttonLoading = sendButton.querySelector('.button-loading');

            if (buttonText && buttonLoading) {
                buttonText.style.display = 'none';
                buttonLoading.style.display = 'inline-block';
            } else {
                // Fallback: just change button text
                sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            }
            sendButton.disabled = true;

            // Email template parameters matching your exact template variables
            const templateParams = {
                name: name,              // For {{name}} in template
                from_name: name,         // For {{from_name}} in template
                from_email: email,       // For {{from_email}} in template
                subject: subject,        // For {{subject}} in template
                message: message,        // For {{message}} in template
                reply_to: email         // For {{reply_to}} in template
            };

            // Debug: Log the parameters being sent
            console.log('Sending email with params:', templateParams);
            console.log('Using Service ID: service_0e2j15o');
            console.log('Using Template ID: portfolio_contact');

            // Send email using your EmailJS service
            emailjs.send('service_0e2j15o', 'portfolio_contact', templateParams)
                .then(function (response) {
                    console.log('✅ Email sent successfully!', response.status, response.text);
                    showFormMessage('✅ Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
                    contactForm.reset();
                }, function (error) {
                    console.error('❌ Email failed to send:', error);
                    console.error('Error details:', {
                        status: error.status,
                        text: error.text,
                        message: error.message
                    });
                    showFormMessage('❌ Sorry, there was an error sending your message. Error: ' + (error.text || error.message || 'Unknown error'), 'error');
                })
                .finally(function () {
                    // Reset button state
                    if (buttonText && buttonLoading) {
                        buttonText.style.display = 'inline-block';
                        buttonLoading.style.display = 'none';
                    } else {
                        // Fallback: reset button text
                        sendButton.innerHTML = '<span class="button-text">Send Message</span>';
                    }
                    sendButton.disabled = false;
                });
        });
    }
}

// Alternative method using Formspree (simpler setup)
function initFormspree() {
    const contactForm = document.getElementById('contactForm');
    const sendButton = document.getElementById('sendButton');

    if (contactForm) {
        // Update form action to use Formspree
        contactForm.action = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; // You'll need to replace this
        contactForm.method = 'POST';

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show loading state
            const buttonText = sendButton.querySelector('.button-text');
            const buttonLoading = sendButton.querySelector('.button-loading');
            buttonText.style.display = 'none';
            buttonLoading.style.display = 'inline-block';
            sendButton.disabled = true;

            // Create form data
            const formData = new FormData(contactForm);

            // Send to Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        showFormMessage('✅ Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
                        contactForm.reset();
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwnProperty.call(data, 'errors')) {
                                showFormMessage('❌ ' + data["errors"].map(error => error["message"]).join(", "), 'error');
                            } else {
                                showFormMessage('❌ Sorry, there was an error sending your message. Please try again.', 'error');
                            }
                        });
                    }
                })
                .catch(error => {
                    console.log('Error:', error);
                    showFormMessage('❌ Sorry, there was an error sending your message. Please contact me directly at ujwaladndu@gmail.com', 'error');
                })
                .finally(() => {
                    // Reset button state
                    buttonText.style.display = 'inline-block';
                    buttonLoading.style.display = 'none';
                    sendButton.disabled = false;
                });
        });
    }
}

// Simple fallback method using mailto
function initMailtoFallback() {
    const contactForm = document.getElementById('contactForm');
    const sendButton = document.getElementById('sendButton');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate form
            if (!name || !email || !subject || !message) {
                showFormMessage('❌ Please fill in all fields.', 'error');
                return;
            }

            // Create mailto link
            const emailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
            const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:ujwaladndu@gmail.com?subject=${emailSubject}&body=${emailBody}`;

            // Open email client
            window.location.href = mailtoLink;

            showFormMessage('📧 Opening your email client. If it doesn\'t open automatically, please contact me directly at ujwaladndu@gmail.com', 'info');
        });
    }
}

// Show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.innerHTML = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Initialize the contact form with EmailJS
document.addEventListener('DOMContentLoaded', function () {
    // Use EmailJS with your service
    initEmailJS();

    // Initialize Salesforce cursor trail effect
    initSalesforceCursorTrail();
});

// Salesforce Cloud Cursor Trail Effect
function initSalesforceCursorTrail() {
    let mouseX = 0;
    let mouseY = 0;
    let trailElements = [];

    // Track mouse movement
    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Create trail effect every few pixels of movement
        if (Math.random() > 0.7) { // 30% chance to create trail
            createCursorTrail(mouseX, mouseY);
        }
    });

    function createCursorTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';

        // Add random cloud colors
        const colors = [
            'rgba(2, 124, 255, 0.6)',   // Salesforce blue
            'rgba(0, 212, 255, 0.4)',   // Light blue
            'rgba(108, 92, 231, 0.5)',  // Purple
            'rgba(255, 107, 53, 0.4)'   // Orange
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        trail.style.background = `radial-gradient(circle, ${randomColor} 0%, transparent 70%)`;

        document.body.appendChild(trail);
        trailElements.push(trail);

        // Remove trail element after animation
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
            const index = trailElements.indexOf(trail);
            if (index > -1) {
                trailElements.splice(index, 1);
            }
        }, 800);

        // Limit number of trail elements
        if (trailElements.length > 20) {
            const oldTrail = trailElements.shift();
            if (oldTrail.parentNode) {
                oldTrail.parentNode.removeChild(oldTrail);
            }
        }
    }

    // Special effects for hovering over Salesforce elements
    const salesforceElements = document.querySelectorAll('.fab.fa-salesforce, .floating-element, .hero-avatar');
    salesforceElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            // Create burst effect
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createCursorTrail(mouseX + (Math.random() - 0.5) * 30, mouseY + (Math.random() - 0.5) * 30);
                }, i * 50);
            }
        });
    });
}