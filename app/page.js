import styles from "./page.module.css";
import {
  profile,
  skills,
  experience,
  education,
  projects,
  contact,
} from "./data";

export default function Home() {
  return (
    <>
      <header className={styles.nav}>
        <a href="#top" className={styles.brand}>
          {profile.name}
        </a>
        <nav className={styles.links}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <a href="#contact" className={styles.button}>
            Get in touch
          </a>
        </section>

        {/* About */}
        <section id="about" className={styles.section}>
          <h2>About me</h2>
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        {/* Skills & Experience */}
        <section id="experience" className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.tags}>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          <h2>Experience</h2>
          <ol className={styles.timeline}>
            {experience.map((job, i) => (
              <li key={i}>
                <div className={styles.row}>
                  <h3>
                    {job.role} <span>· {job.org}</span>
                  </h3>
                  <span className={styles.dates}>{job.dates}</span>
                </div>
                <p>{job.summary}</p>
              </li>
            ))}
          </ol>

          <h2>Education</h2>
          <ol className={styles.timeline}>
            {education.map((item, i) => (
              <li key={i}>
                <div className={styles.row}>
                  <h3>
                    {item.degree} <span>· {item.school}</span>
                  </h3>
                  <span className={styles.dates}>{item.dates}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <article key={i} className={styles.card}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag, j) => (
                    <li key={j}>{tag}</li>
                  ))}
                </ul>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>I&apos;d love to hear from you. The best way to reach me is by email.</p>
          <div className={styles.contactLinks}>
            {contact.email && (
              <a href={`mailto:${contact.email}`} className={styles.button}>
                Email me
              </a>
            )}
            {contact.github && (
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        © {profile.name}
      </footer>
    </>
  );
}
