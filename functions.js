// Custom Cursor
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top = outlineY + 'px';
    requestAnimationFrame(animateOutline);
}
animateOutline();

// Cursor effects on hover
document.querySelectorAll('a, button, .card').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'scale(2)';
        cursorOutline.style.transform = 'scale(1.5)';
    });
    elem.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'scale(1)';
        cursorOutline.style.transform = 'scale(1)';
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('light-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Create floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            element.textContent = target;
        }
    };
    updateCounter();
};

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(animateCounter);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((card, i) => {
        card.classList.remove('active');
        dots[i].classList.remove('active');
    });
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Team members data
let currentMemberId = 1;
const members = {
    1: { 
        name: 'Charlie Barozo', 
        bio: 'Passionate designer crafting intuitive experiences with attention to detail and user-centered approach. Specializing in creating beautiful, functional interfaces that users love.', 
        projects: ['E-commerce Redesign', 'Mobile App UI', 'Brand Identity System', 'Dashboard Interface'], 
        links: ['https://github.com/Charlie', 'https://linkedin.com/in/Charlie', 'https://dribbble.com/Charlie'] 
    },
    2: { 
        name: 'Lawrence Agacanas', 
        bio: 'Code wizard optimizing modern web tech to build fast, responsive, and beautiful applications. Expert in React, JavaScript, and cutting-edge frontend technologies.', 
        projects: ['React Dashboard', 'PWA Site', 'Component Library', 'E-commerce Platform'], 
        links: ['https://github.com/Agcanas', 'https://twitter.com/Agcanas', 'https://codepen.io/Agcanas'] 
    },
    3: { 
        name: 'Ro Ann Abaday', 
        bio: 'Backend expert in scalable systems, microservices, and cloud architecture. Building robust APIs and distributed systems that power modern applications.', 
        projects: ['Node.js API', 'Python ML Tool', 'Docker Deployment', 'Cloud Infrastructure'], 
        links: ['https://github.com/Ann', 'https://Ann.dev', 'https://stackoverflow.com/users/Ann'] 
    },
    4: { 
        name: 'Maxie Balot', 
        bio: 'Agile leader driving team success through effective communication and strategic planning. Transforming ideas into successful products with proven methodologies.', 
        projects: ['Agile Transformation', 'Product Roadmap', 'Team Scaling', 'Sprint Planning'], 
        links: ['https://linkedin.com/in/Max', 'https://max.com', 'https://twitter.com/maxxx'] 
    },
    5: { 
        name: 'Ronald Aguilar', 
        bio: 'DevOps engineer specializing in cloud infrastructure and automation. Building reliable, scalable systems with modern CI/CD practices and containerization.', 
        projects: ['AWS Infrastructure', 'Kubernetes Setup', 'CI/CD Pipeline', 'Monitoring System'], 
        links: ['https://github.com/Ronald', 'https://linkedin.com/in/aguilar', 'https://hub.docker.com/u/Ro4Agui'] 
    },
    6: { 
        name: 'Jomark Alejo', 
        bio: 'Data scientist turning complex data into actionable insights. Expert in machine learning, statistical analysis, and building predictive models that drive business decisions.', 
        projects: ['Predictive Analytics', 'NLP Chatbot', 'Recommendation System', 'Data Visualization'], 
        links: ['https://github.com/omark', 'https://kaggle.com/omark.A', 'https://medium.com/@omark'] 
    }
};

// Smooth scroll to team section
function scrollToTeam() {
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
}

// Open modal with member details
function openModal(id) {
    currentMemberId = id;
    updateModal();
    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigate between team members in modal
function navigateModal(direction) {
    currentMemberId += direction;
    if (currentMemberId < 1) currentMemberId = 6;
    if (currentMemberId > 6) currentMemberId = 1;
    updateModal();
}

// Update modal content
function updateModal() {
    const member = members[currentMemberId];
    document.getElementById('modalContent').innerHTML = `
        <h2>${member.name}</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">${member.bio}</p>
        <h4><i class="fas fa-briefcase" style="margin-right: 0.5rem;"></i>Featured Projects:</h4>
        <ul>${member.projects.map(p => `<li><i class="fas fa-check-circle" style="color: #ff6b6b; margin-right: 0.5rem;"></i>${p}</li>`).join('')}</ul>
        <h4><i class="fas fa-link" style="margin-right: 0.5rem;"></i>Connect:</h4>
        <ul>${member.links.map(l => `<li><i class="fas fa-external-link-alt" style="color: #ffa500; margin-right: 0.5rem;"></i><a href="${l}" target="_blank">${l}</a></li>`).join('')}</ul>
    `;
}

// Filter team members by skill
function filterMembers() {
    const query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        const skills = Array.from(card.querySelectorAll('.skill-badge'))
            .map(badge => badge.textContent.toLowerCase())
            .join(' ');
        card.style.display = skills.includes(query) || !query ? 'block' : 'none';
    });
}

// Close modal when clicking outside
window.onclick = (e) => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
};

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('modal');
    if (modal.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            navigateModal(-1);
        } else if (e.key === 'ArrowRight') {
            navigateModal(1);
        }
    }
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

console.log('🚀 Crafted Minds Portfolio loaded successfully!');