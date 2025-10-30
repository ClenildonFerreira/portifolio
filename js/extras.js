// Funcionalidades extras e exemplos de dados para o portfólio

// Dados de exemplo para projetos (para quando você quiser adicionar mais detalhes)
const portfolioData = [
    {
        id: 1,
        title: "E-commerce Moderno",
        category: "web",
        description: "Plataforma completa de vendas online com carrinho, pagamentos e gestão de produtos",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "images/projeto1.jpg",
        link: "https://exemplo-ecommerce.com",
        github: "https://github.com/usuario/ecommerce",
        featured: true
    },
    {
        id: 2,
        title: "App de Delivery",
        category: "mobile",
        description: "Aplicativo completo para delivery com rastreamento em tempo real",
        technologies: ["React Native", "Firebase", "Google Maps"],
        image: "images/projeto2.jpg",
        link: "https://play.google.com/store/apps/details?id=com.exemplo",
        github: "https://github.com/usuario/delivery-app",
        featured: true
    },
    {
        id: 3,
        title: "Identidade Corporativa",
        category: "branding",
        description: "Rebranding completo de empresa incluindo logo, papelaria e site",
        technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
        image: "images/projeto3.jpg",
        link: "https://behance.net/gallery/exemplo",
        featured: false
    }
];

// Dados de exemplo para depoimentos (testimonials)
const testimonials = [
    {
        id: 1,
        name: "Maria Silva",
        position: "CEO, TechCorp",
        company: "TechCorp Solutions",
        text: "Trabalho excepcional! A equipe entregou exatamente o que precisávamos, no prazo e com qualidade superior.",
        rating: 5,
        image: "images/cliente1.jpg"
    },
    {
        id: 2,
        name: "João Santos",
        position: "Diretor de Marketing",
        company: "Digital Plus",
        text: "Profissionais competentes e criativos. Nosso ROI aumentou 300% após o projeto.",
        rating: 5,
        image: "images/cliente2.jpg"
    },
    {
        id: 3,
        name: "Ana Costa",
        position: "Fundadora",
        company: "StartupXYZ",
        text: "Superaram nossas expectativas. Recomendo para qualquer empresa que busca resultados.",
        rating: 5,
        image: "images/cliente3.jpg"
    }
];

// Dados para skills/habilidades
const skills = [
    { name: "HTML5/CSS3", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React.js", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Python", level: 75, category: "backend" },
    { name: "UI/UX Design", level: 88, category: "design" },
    { name: "Photoshop", level: 82, category: "design" },
    { name: "SEO/Marketing", level: 78, category: "marketing" }
];

// Função para criar seção de depoimentos (pode ser adicionada ao HTML)
function createTestimonialsSection() {
    const testimonialsHTML = `
        <section class="testimonials" id="depoimentos">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">O Que Nossos Clientes Dizem</h2>
                    <p class="section-subtitle">Depoimentos reais de clientes satisfeitos</p>
                </div>
                
                <div class="testimonials-grid">
                    ${testimonials.map(testimonial => `
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="testimonial-stars">
                                    ${'★'.repeat(testimonial.rating)}
                                </div>
                                <p class="testimonial-text">"${testimonial.text}"</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-image">
                                    <img src="${testimonial.image}" alt="${testimonial.name}" 
                                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="author-placeholder" style="display: none;">
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                                <div class="author-info">
                                    <h4>${testimonial.name}</h4>
                                    <p>${testimonial.position}</p>
                                    <span>${testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    return testimonialsHTML;
}

// Função para criar seção de habilidades
function createSkillsSection() {
    const skillsHTML = `
        <section class="skills" id="habilidades">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Habilidades</h2>
                    <p class="section-subtitle">Tecnologias e ferramentas que dominamos</p>
                </div>
                
                <div class="skills-categories">
                    <div class="skills-category">
                        <h3>Frontend</h3>
                        <div class="skills-list">
                            ${skills.filter(skill => skill.category === 'frontend').map(skill => `
                                <div class="skill-item">
                                    <div class="skill-header">
                                        <span class="skill-name">${skill.name}</span>
                                        <span class="skill-percentage">${skill.level}%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width: ${skill.level}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="skills-category">
                        <h3>Backend</h3>
                        <div class="skills-list">
                            ${skills.filter(skill => skill.category === 'backend').map(skill => `
                                <div class="skill-item">
                                    <div class="skill-header">
                                        <span class="skill-name">${skill.name}</span>
                                        <span class="skill-percentage">${skill.level}%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width: ${skill.level}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="skills-category">
                        <h3>Design</h3>
                        <div class="skills-list">
                            ${skills.filter(skill => skill.category === 'design').map(skill => `
                                <div class="skill-item">
                                    <div class="skill-header">
                                        <span class="skill-name">${skill.name}</span>
                                        <span class="skill-percentage">${skill.level}%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width: ${skill.level}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    return skillsHTML;
}

// Função para animar as barras de progresso quando visíveis
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.transition = 'width 1.5s ease-in-out';
                    progressBar.style.width = targetWidth;
                }, 200);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Função para criar modal de detalhes do projeto
function createProjectModal(project) {
    const modalHTML = `
        <div class="modal" id="project-modal-${project.id}">
            <div class="modal-content">
                <button class="modal-close" onclick="closeModal('project-modal-${project.id}')">&times;</button>
                
                <div class="modal-header">
                    <h2>${project.title}</h2>
                    <div class="project-badges">
                        ${project.technologies.map(tech => `<span class="badge">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-body">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="image-placeholder" style="display: none;">
                            <i class="fas fa-image"></i>
                        </div>
                    </div>
                    
                    <div class="project-details">
                        <h3>Sobre o Projeto</h3>
                        <p>${project.description}</p>
                        
                        <h3>Tecnologias Utilizadas</h3>
                        <ul>
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                        
                        <div class="project-links">
                            ${project.link ? `<a href="${project.link}" target="_blank" class="btn btn-primary">Ver Projeto</a>` : ''}
                            ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-secondary">Ver Código</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modalHTML;
}

// Função para abrir modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Função para fechar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Função para criar carousel de depoimentos
function createTestimonialsCarousel() {
    let currentTestimonial = 0;
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    // Auto-rotate testimonials
    setInterval(nextTestimonial, 5000);
    
    return { nextTestimonial, prevTestimonial, showTestimonial };
}

// Função para adicionar efeito de digitação
function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Função para contar números animados
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Função para lazy loading de imagens
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
}

// Função para smooth scroll personalizado
function smoothScrollTo(target, duration = 1000) {
    const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
    const targetPosition = targetElement.offsetTop - 80; // 80px para compensar o header
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}

// Função para verificar se o elemento está visível
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar classe quando elemento fica visível
function addClassOnScroll(selector, className, offset = 0) {
    const elements = document.querySelectorAll(selector);
    
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - offset;
            
            if (isVisible && !element.classList.contains(className)) {
                element.classList.add(className);
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on load
}

// Função para criar efeito de parallax
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    window.addEventListener('scroll', updateParallax);
}

// Exportar funções para uso global
window.PortfolioExtras = {
    portfolioData,
    testimonials,
    skills,
    createTestimonialsSection,
    createSkillsSection,
    animateSkillBars,
    createProjectModal,
    openModal,
    closeModal,
    createTestimonialsCarousel,
    typeWriterEffect,
    animateCounters,
    setupLazyLoading,
    smoothScrollTo,
    isElementInViewport,
    addClassOnScroll,
    initParallax
};

// Inicializar funcionalidades extras quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Configurar lazy loading
    setupLazyLoading();
    
    // Adicionar animações nos elementos quando ficarem visíveis
    addClassOnScroll('.service-card', 'animate-slide-up', 100);
    addClassOnScroll('.feature-item', 'animate-slide-left', 100);
    addClassOnScroll('.portfolio-item', 'animate-slide-up', 100);
    
    // Inicializar parallax se houver elementos com data-parallax
    if (document.querySelector('[data-parallax]')) {
        initParallax();
    }
    
    console.log('✨ Funcionalidades extras carregadas com sucesso!');
});