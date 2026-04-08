import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export interface Section {
  id: string
  name: string
  hide?: boolean
}

function Nav({ sections }: { sections: Section[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((entry) => entry.isIntersecting)
        if (entry) {
          setActiveSection(
            sections.find((section) => section.id === entry.target.id),
          )
        }
      },
      // Tripwire centered vertically across the viewport
      {
        rootMargin: '-50% 0px',
      },
    )

    sections
      .map((section) => document.getElementById(section.id))
      .filter((element) => !!element)
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img width={34} src="/icon.png" />
          <span className="logo-text">Westside Consulting</span>
        </motion.div>

        <div className="nav-links desktop-nav">
          {sections
            .filter((section) => !section.hide)
            .map((section, i) => (
              <motion.button
                key={section.id}
                className={`nav-link ${activeSection?.id === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {section.name}
              </motion.button>
            ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
      >
        {sections
          .filter((section) => !section.hide)
          .map((section) => (
            <button
              key={section.id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(section.id)}
            >
              {section.name}
            </button>
          ))}
      </motion.div>
    </nav>
  )
}

export default Nav
