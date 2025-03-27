// Smart Food Waste Tracker - Interactive Elements

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to elements with data-animate attribute
    const animateElements = document.querySelectorAll('[data-animate]');
    
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.dataset.animate);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Floating animation for the logo
    const logo = document.querySelector('header img');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.classList.add('animate-float');
        });
        
        logo.addEventListener('mouseleave', function() {
            this.classList.remove('animate-float');
        });
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-hover');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('animate-pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('animate-pulse');
        });
    });
    
    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        const colors = ['#10B981', '#3B82F6', '#8B5CF6'];
        
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
            
            // Add border top on hover based on index
            this.style.borderTop = `4px solid ${colors[index % colors.length]}`;
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
            
            // Remove border top on leave
            this.style.borderTop = '0';
        });
    });

    // Stat cards hover effect
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('animate-pulse');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('animate-pulse');
        });
    });

    // Add scroll to top button
    const body = document.querySelector('body');
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300 hover:bg-green-600';
    scrollBtn.style.zIndex = 1000;
    body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });

    // Typing effect for main heading if it exists
    const mainHeading = document.querySelector('.main-heading');
    if (mainHeading) {
        // Add subtle animation to the heading
        setTimeout(() => {
            mainHeading.classList.add('animate-fade-in');
        }, 300);
    }

    // Newsletter subscription form
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'text-green-400 mt-2 text-sm';
                successMessage.textContent = 'Thank you for subscribing!';
                this.appendChild(successMessage);
                input.value = '';
                
                // Remove message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }
}); 