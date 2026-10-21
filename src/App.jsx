import { useEffect, useState } from "react";
import { listProyek, listTools, profileData } from "./data";
import "./App.css";

const skillGroups = [
  { label: "Frontend", ids: [1, 2, 3, 4, 5] },
  { label: "Backend", ids: [6, 7, 18, 19] },
  { label: "AI & Data", ids: [13, 14, 15, 16, 17] },
  { label: "Tools", ids: [8, 9, 10, 11, 12] },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const socialLinks = [
  { label: "GitHub", value: "⌘", href: profileData.github },
  { label: "LinkedIn", value: "in", href: profileData.linkedin },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [loadProgress, setLoadProgress] = useState(1);

  useEffect(() => {
    let progress = 1;
    let closeTimer;
    const progressTimer = window.setInterval(() => {
      progress = Math.min(progress + 2, 100);
      setLoadProgress(progress);

      if (progress === 100) {
        window.clearInterval(progressTimer);
        closeTimer = window.setTimeout(() => {
          setIntroLeaving(true);
          closeTimer = window.setTimeout(() => setIntroVisible(false), 700);
        }, 250);
      }
    }, 28);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(closeTimer);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal, .reveal-item, .project-card, .contact-card")
        .forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll(".reveal, .reveal-item, .project-card, .contact-card")
      .forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="site-shell">
      {introVisible && (
        <div
          className={introLeaving ? "intro-loader is-leaving" : "intro-loader"}
          role="status"
          aria-label={`Loading portfolio: ${loadProgress}%`}
        >
          <div className="intro-loader-content">
            <span className="intro-loader-kicker">Welcome to my portfolio</span>
            <p className="intro-loader-name">{profileData.name.split(" ").slice(0, -1).join(" ")} <em>{profileData.name.split(" ").at(-1)}</em></p>
            <div className="intro-loader-roles">
              <span>AI Developer</span><i aria-hidden="true" /><span>Full-Stack Developer</span>
            </div>
            <div className="intro-progress-row">
              <span>Loading experience</span><strong>{loadProgress}<small>%</small></strong>
            </div>
            <div className="intro-progress-track" aria-hidden="true"><span style={{ width: `${loadProgress}%` }} /></div>
          </div>
        </div>
      )}

      <nav className="section-nav" aria-label="Section navigation">
        {navigation.map(([label, href]) => (
          <a href={href} key={label} aria-label={`Go to ${label}`}>
            <span>{label}</span><i aria-hidden="true" />
          </a>
        ))}
      </nav>

      <header className="topbar">
        <a className="wordmark" href="#home" aria-label={`${profileData.name} home`}>
          <span className="wordmark-bracket">&lt;</span> KN <span className="wordmark-bracket">/&gt;</span>
        </a>
        <button
          className={`menu-button${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href={`mailto:${profileData.email}`} className="nav-contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow hero-load-item"><span className="status-dot" /> B.Tech Computer Science Student</p>
            <h1 className="hero-load-item">
              {profileData.name.split(" ").slice(0, -1).join(" ")}<br /><em>{profileData.name.split(" ").at(-1)}</em>
            </h1>
            <h2 className="hero-tagline hero-load-item">Building practical solutions with data, code &amp; technology.</h2>
            <p className="hero-intro hero-load-item">{profileData.heroDescription}</p>
            <div className="hero-actions hero-load-item">
              <a className="primary-action" href="#projects"><span>↗</span> View my projects</a>
              <a className="secondary-action" href={`mailto:${profileData.email}`}><span>✉</span> Contact me</a>
            </div>
            <div className="hero-socials hero-load-item">
              <span>Find me on</span>
              {socialLinks.map((social) => (
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} profile`} key={social.label}>{social.value}</a>
              ))}
            </div>
          </div>

          <div className="hero-visual hero-load-item">
            <div className="portrait-frame">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />
              <div className="portrait-fallback" aria-hidden="true">KN</div>
              <div className="portrait-caption">
                <strong>{profileData.name.toUpperCase()}</strong>
                <span>B.Tech · Full-Stack &amp; AI</span>
              </div>
            </div>
            <div className="visual-note note-top">01<br /><small>curious<br />by nature</small></div>
            <div className="visual-note note-bottom">Scroll to discover <span>↓</span></div>
          </div>
        </section>

        <section className="intro-section reveal" id="about">
          <div className="section-index reveal-item">01 / 04</div>
          <div className="intro-content">
            <p className="eyebrow reveal-item">A little about me</p>
            <h2 className="reveal-item">I like the space<br />where <em>technology</em><br />meets possibility.</h2>
            <p className="body-copy reveal-item">{profileData.about}</p>
            <div className="about-stats reveal-item">
              {profileData.stats.map((stat) => (
                <span key={stat.label}><strong>{stat.value}</strong>{stat.label}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section reveal" id="skills">
          <div className="section-heading">
            <div className="section-index reveal-item">02 / 04</div>
            <p className="eyebrow reveal-item">My toolkit</p>
            <h2 className="reveal-item">Built to move<br /><em>between worlds.</em></h2>
          </div>
          <div className="skill-list">
            {skillGroups.map((group, index) => (
              <div className="skill-row reveal-item" key={group.label}>
                <span className="skill-label">0{index + 1} / {group.label}</span>
                <div className="skill-tags">
                  {group.ids.map((id) => {
                    const tool = listTools.find((item) => item.id === id);
                    return tool ? <span key={tool.id}>{tool.nama}</span> : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section reveal" id="projects">
          <div className="section-heading projects-heading">
            <div className="section-index reveal-item">03 / 04</div>
            <p className="eyebrow reveal-item">Selected work</p>
            <h2 className="reveal-item">Ideas, made<br /><em>interactive.</em></h2>
          </div>
          <div className="project-list">
            {listProyek.map((project, index) => (
              <a className="project-card reveal-item" href={project.url} target="_blank" rel="noreferrer" key={project.id}>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="project-category">{project.category || "Full-stack project"}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.subtitle}</p>
                  <div className="project-tags">
                    {(project.tags || ["Web development", "Responsive UI", "Full-stack"]).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="section-index reveal-item">04 / 04</div>
          <p className="eyebrow reveal-item">Have a good idea?</p>
          <h2 className="reveal-item">Let&apos;s make<br /><em>something useful.</em></h2>
          <div className="contact-grid">
            <a className="contact-card reveal-item" href={`mailto:${profileData.email}`}>
              <span className="contact-icon">@</span><span><small>Email</small><strong>{profileData.email}</strong></span><span className="contact-arrow">↗</span>
            </a>
            <a className="contact-card reveal-item" href={profileData.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon">in</span><span><small>LinkedIn</small><strong>Kruthika Naidu</strong></span><span className="contact-arrow">↗</span>
            </a>
            <a className="contact-card reveal-item" href={profileData.github} target="_blank" rel="noreferrer">
              <span className="contact-icon">⌘</span><span><small>GitHub</small><strong>naidukruthika2006</strong></span><span className="contact-arrow">↗</span>
            </a>
            <a className="contact-card reveal-item" href={profileData.instagram} target="_blank" rel="noreferrer">
              <span className="contact-icon">◎</span><span><small>Instagram</small><strong>@kruthika___naidu</strong></span><span className="contact-arrow">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {profileData.name}</span>
        <div>
          <a href={profileData.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profileData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profileData.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <span>Made with curiosity</span>
      </footer>
    </div>
  );
}

export default App;
