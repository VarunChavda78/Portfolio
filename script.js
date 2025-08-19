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

// Projects data (edit this to add your own projects)
const projects = [
  {
    title: 'Skill Spring Freelance Network',
    description: 'Using Django Rest_Framework and React JS. Developed a full-stack freelancing platform using React for the front-end and Django for the back-end. Implemented features like talent search, project proposals, and JWT-based authentication for secure user access. Dockerized and deployed it on AWS EC2 with a Load Balancer and NGINX as a reverse proxy',
    tech: ['React js', 'Django Rest_Framework'],
    href: 'https://github.com/VarunChavda78/Skill-Spring-Freelance-Network'
  },
  {
    title: 'Ace Bank',
    description: 'Using Django Rest_Framework and React JS. Designed and developed a secure banking system using React and Django, featuring user account management, fixed deposit handling, and real-time balance updates. Integrated Django REST framework for seamless API interactions. Dockerized and deployed it on AWS EC2 with a Load Balancer and NGINX as a reverse proxy',
    tech: ['React', 'Django Rest_Framework'],
    href: 'https://github.com/VarunChavda78/Ace-Bank'
  },
  {
    title: 'Music Player System',
    description: 'Using Python',
    tech: ['Python'],
    href: 'https://github.com/VarunChavda78/Music-Player-System'
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


