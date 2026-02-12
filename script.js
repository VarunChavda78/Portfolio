// Theme toggle with localStorage persistence
(function setupThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }
  function updateIcon() {
    const isDark = (root.getAttribute('data-theme') || '').toLowerCase() === 'dark';
    toggle.querySelector('.icon').textContent = isDark ? '🌙' : '☀️';
  }
  toggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });
  updateIcon();
})();

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
(function setupMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!mobileMenuToggle || !navLinks) return;
  
  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu when clicking on a link
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      navLinks.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

// Projects data (edit this to add your own projects)
const projects = [
  {
    title: 'Strapi Application - on AWS ECS Fargate',
    description: 'Containerized Strapi CMS with Docker & Docker Compose, configured to use Amazon RDS PostgreSQL as the external database.Provisioned complete AWS infrastructure using Terraform — including ECS cluster, task definitions, Application Load Balancer, RDS PostgreSQL, IAM roles, and networking resources.Built CI/CD pipelines with GitHub Actions, automating Docker image builds, pushes to ECR, and manual Terraform deployments.Deployed Strapi on AWS ECS Fargate with Application Load Balancer for scalability and availability.Integrated CloudWatch monitoring (logs, alarms, dashboards) for ECS service observability.Optimized deployment costs using FARGATE_SPOT capacity provider.',
    tech: ['Terraform', 'GitHub Actions', 'Docker', 'AWS ECS Fargate', 'AWS RDS PostgreSQL', 'AWS IAM', 'AWS VPC', 'AWS Application Load Balancer', 'AWS CloudWatch'],
    href: 'https://github.com/VarunChavda78/Strapi_ECS_CloudWatch'
  },
  {
    title: 'Skill Spring Freelance Network',
    description: 'Using Django Rest_Framework and React JS. Developed a full-stack freelancing platform using React for the front-end and Django for the back-end. Implemented features like talent search, project proposals, and JWT-based authentication for secure user access. Dockerized and deployed it on AWS EC2 with a Load Balancer and NGINX as a reverse proxy',
    tech: ['React js', 'Django Rest_Framework'],
    href: 'https://github.com/VarunChavda78/Skill-Spring-Freelance-Network'
  }
];

// Render projects
(function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map((p) => {
    const tech = p.tech.map((t) => `<span class="badge">${t}</span>`).join('');
    return `
      <article class="card">
        <a href="${p.href}" target="_blank" rel="noopener">
          <div class="thumb">${p.title}</div>
        </a>
        <div class="body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="meta">${tech}</div>
        </div>
      </article>
    `;
  }).join('');
})();


