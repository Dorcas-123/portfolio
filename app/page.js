import styles from "./page.module.css";
import ImageSlot from "./ImageSlot";
import { profile, projects, community, contact } from "./data";

// Card background colors, used in turn: lavender, peach, mint, yellow.
const cardColors = [styles.lavender, styles.peach, styles.mint, styles.yellow];

export default function Home() {
  const hasContact = contact.email || contact.linkedin;

  return (
    <>
      <header className={styles.navWrap}>
        <div className={styles.nav}>
          <a href="#top" className={styles.brand} aria-label={`${profile.name}, back to top`}>
            {profile.initials}
          </a>
          <nav className={styles.links}>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#community">Community</a>
            {hasContact && <a href="#contact">Contact</a>}
          </nav>
        </div>
      </header>

      <main id="top" className={styles.main}>
        {/* Introduction */}
        <section className={styles.hero}>
          <Doodles />
          <div className={styles.heroText}>
            <p className={styles.hello}>Hi, I’m</p>
            <h1>{profile.name}</h1>
            <p className={styles.tagline}>{profile.tagline}</p>
            <p className={styles.intro}>{profile.intro}</p>
            <a href="#work" className={styles.button}>
              See my work
            </a>
          </div>
          <ImageSlot image={profile.image} variant="portrait" priority />
        </section>

        {/* About */}
        <section id="about" className={styles.section}>
          <SectionTitle>About</SectionTitle>
          <div className={styles.aboutCard}>
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className={styles.section}>
          <SectionTitle>Selected work</SectionTitle>
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <article key={i} className={`${styles.card} ${cardColors[i % cardColors.length]}`}>
                <ImageSlot image={project.image} variant="cardImage" />
                {project.status && <span className={styles.status}>{project.status}</span>}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.contribution && (
                  <p className={styles.contribution}>
                    <strong>My contribution:</strong> {project.contribution}
                  </p>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className={styles.cardButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel || "Learn more"} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Community & leadership */}
        <section id="community" className={styles.section}>
          <SectionTitle>Community &amp; leadership</SectionTitle>
          <ul className={styles.community}>
            {community.items.map((item, i) => (
              <li key={i}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          <ImageSlot image={community.image} variant="communityImage" />
        </section>

        {/* Contact */}
        {hasContact && (
          <section id="contact" className={styles.section}>
            <SectionTitle>Say hello</SectionTitle>
            <div className={styles.contactLinks}>
              {contact.email && (
                <a href={`mailto:${contact.email}`} className={styles.button}>
                  {contact.email}
                </a>
              )}
              {contact.linkedin && (
                <a href={contact.linkedin} className={styles.pill} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>© {profile.name}</footer>
    </>
  );
}

// A section heading with a hand-drawn squiggle underneath.
function SectionTitle({ children }) {
  return (
    <h2 className={styles.sectionTitle}>
      {children}
      <svg viewBox="0 0 120 12" aria-hidden="true" className={styles.squiggle}>
        <path
          d="M2 7 C 12 1, 22 11, 32 6 S 52 1, 62 6 S 82 11, 92 6 S 110 2, 118 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </h2>
  );
}

// Decorative hand-drawn-style shapes behind the introduction.
function Doodles() {
  return (
    <div className={styles.doodles} aria-hidden="true">
      <svg className={styles.blob} viewBox="0 0 200 200">
        <path
          d="M45 30 C 80 5, 150 15, 170 55 S 175 150, 125 172 S 30 175, 22 120 S 15 50, 45 30 Z"
          fill="var(--lavender)"
        />
      </svg>
      <svg className={styles.sun} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="22" fill="var(--yellow)" />
        <g stroke="var(--yellow-ink)" strokeWidth="4" strokeLinecap="round">
          <path d="M50 8 L50 18" />
          <path d="M50 82 L50 92" />
          <path d="M8 50 L18 50" />
          <path d="M82 50 L92 50" />
          <path d="M20 20 L27 27" />
          <path d="M73 73 L80 80" />
          <path d="M20 80 L27 73" />
          <path d="M73 27 L80 20" />
        </g>
      </svg>
      <svg className={styles.sparkle} viewBox="0 0 60 60">
        <path
          d="M30 4 C 32 22, 38 28, 56 30 C 38 32, 32 38, 30 56 C 28 38, 22 32, 4 30 C 22 28, 28 22, 30 4 Z"
          fill="var(--peach)"
          stroke="var(--peach-ink)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <svg className={styles.loop} viewBox="0 0 160 60">
        <path
          d="M4 40 C 30 10, 50 10, 52 32 C 54 52, 30 50, 40 30 C 52 8, 90 8, 100 30 S 140 50, 156 18"
          fill="none"
          stroke="var(--mint-ink)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
