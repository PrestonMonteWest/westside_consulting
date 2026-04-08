import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Code,
  Server,
  Database,
  Globe,
  ArrowRight,
  Terminal,
  Cpu,
  Mail,
  ChevronDown,
} from 'lucide-react'
import './App.css'
import Nav, { type Section } from './components/Nav'
import LinkedIn from './components/LinkedIn'
import GitHub from './components/GitHub'

const services = [
  {
    icon: <Code size={32} />,
    title: 'Frontend Development',
    description:
      'Modern, responsive web applications built with Angular, React, and TypeScript. Component-driven architecture with a focus on performance and user experience.',
    tech: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: <Server size={32} />,
    title: 'Backend Development',
    description:
      'Scalable server-side solutions using Node.js and NestJS. RESTful APIs, GraphQL, gRPC, and microservices architecture.',
    tech: ['NestJS', 'Node.js', 'Express', 'gRPC'],
  },
  {
    icon: <Database size={32} />,
    title: 'Database & Infrastructure',
    description:
      'Database design, optimization, and cloud infrastructure setup. Docker containerization and CI/CD pipeline implementation.',
    tech: ['PostgreSQL', 'MongoDB', 'Docker', 'Azure'],
  },
  {
    icon: <Globe size={32} />,
    title: 'Full-Stack Solutions',
    description:
      'End-to-end application development from concept to deployment. Complete ownership of the technical stack.',
    tech: ['Full-Stack', 'AWS', 'Linux', 'DevOps'],
  },
]
const techStack = [
  {
    category: 'Frontend',
    items: ['Angular 18+', 'React', 'TypeScript', 'RxJS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['NestJS', 'Node.js', 'Express', 'gRPC-Web'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'Docker', 'Linux', 'CI/CD'],
  },
  {
    category: 'Auth & Security',
    items: ['Azure AD B2C', 'OAuth 2.0', 'JWT', 'RBAC'],
  },
]

function App() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections: Section[] = [
    { id: 'hero', name: 'Hero', hide: true },
    { id: 'services', name: 'Services' },
    { id: 'tech', name: 'Tech' },
    { id: 'about', name: 'About' },
    { id: 'contact', name: 'Contact' },
  ]

  return (
    <div className="app">
      {/* Animated background */}
      <motion.div className="background-gradient" style={{ y: backgroundY }} />
      <div className="grid-overlay" />

      <Nav sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Terminal size={16} />
            <span>Full-Stack Web Development</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Modern
            <br />
            <span className="gradient-text">Web Applications</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Custom web development with 7+ years of experience. Angular, React,
            NestJS, and Node.js expertise—from concept to deployment.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
              <ArrowRight size={18} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection('services')}
            >
              View Services
            </button>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <ChevronDown size={24} className="bounce" />
          </motion.div>
        </div>

        {/* Floating code elements */}
        <div className="floating-elements">
          <motion.div
            className="floating-card card-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <code>{'const app = NestFactory.create()'}</code>
          </motion.div>
          <motion.div
            className="floating-card card-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <code>{'<Component props={data} />'}</code>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">What I Do</span>
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              End-to-end web development tailored to your requirements. The only
              constraints are time and budget.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tech">
                  {service.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="tech-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Technology</span>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">
              Modern tools and frameworks for building scalable, maintainable
              applications.
            </p>
          </motion.div>

          <div className="tech-grid">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                className="tech-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="tech-category-title">
                  <Cpu size={18} />
                  {category.category}
                </h3>
                <div className="tech-items">
                  {category.items.map((item) => (
                    <span key={item} className="tech-item">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">About</span>
              <h2 className="section-title">Preston West</h2>
              <p>
                Full-stack TypeScript engineer with over 7 years of web
                development experience and 10+ years in software development
                overall. I specialize in building greenfield web applications
                end-to-end—frontend, backend, and infrastructure.
              </p>
              <p>
                Recent work includes developing an international Angular 18
                application for WorkSmart Autosteer at Kubota, featuring
                gRPC-Web integration and Azure AD B2C authentication. I bring
                deep experience with Angular, React, NestJS, and Node.js across
                Azure, AWS, Docker, and Linux environments.
              </p>
              <p>
                Westside Consulting was founded in September 2025 to provide
                contract and consulting services focused on custom web
                application development. Whether you need a complete application
                built from scratch or expertise on an existing project, I
                deliver production-ready solutions.
              </p>
              <div className="about-links">
                <a
                  href="https://www.linkedin.com/company/westside-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <LinkedIn />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/prestonmontewest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <GitHub />
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-card">
                <span className="stat-number">7+</span>
                <span className="stat-label">Years Web Dev</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Software</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">Full</span>
                <span className="stat-label">Stack Expertise</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">TX</span>
                <span className="stat-label">Based</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Let's Build Something</h2>
            <p className="contact-subtitle">
              Available for contract and consulting engagements. Reach out to
              discuss your project requirements.
            </p>

            <div className="contact-methods">
              <a
                href="mailto:prestonmontewest@gmail.com"
                className="contact-card"
              >
                <Mail size={24} />
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  prestonmontewest@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/westside-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <LinkedIn />
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img width={34} src="/icon.png" />
            <span>Westside Consulting LLC</span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Westside Consulting LLC. Texas, USA.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
