import React from "react";

import { useEffect, useState } from "react";

const programs = [
  {
    id: "foundations",
    duration: "6 weeks",
    level: "Beginner",
    title: "Foundations of Digital Work",
    description:
      "Build confident digital workflows and everyday problem-solving skills.",
    art: "foundations",
  },
  {
    id: "creative",
    duration: "8 weeks",
    level: "All levels",
    title: "Creative Problem Solving",
    description:
      "Turn open-ended challenges into practical, testable ideas.",
    art: "creative",
  },
  {
    id: "career",
    duration: "10 weeks",
    level: "Intermediate",
    title: "Career-Ready Projects",
    description:
      "Create a polished body of work with structured milestones.",
    art: "career",
  },
];

const faqs = [
  {
    question: "Are the programs beginner-friendly?",
    answer:
      "Yes. Each program states its recommended starting level, so you can choose the right place to begin.",
  },
  {
    question: "How is progress tracked?",
    answer:
      "Through practical milestones and mentor feedback.",
  },
];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Ridgeline Learning home">
      <img src="/images/ridgeline_logo.svg" alt="Ridgeline Learning" />
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Logo />

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#benefits" onClick={closeMenu}>Why Ridgeline</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#faqs" onClick={closeMenu}>FAQs</a>
          <a className="nav-cta" href="#get-started" onClick={closeMenu}>
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroArtwork() {
  return (
    <svg
      className="hero-artwork"
      viewBox="0 0 520 360"
      role="img"
      aria-label="Illustration of a learning dashboard, graduation cap and rising landscape"
    >
      <circle cx="424" cy="64" r="40" fill="#F2B865" />
      <path d="M0 270 C90 190 150 190 235 240 S390 300 520 190 V360 H0Z" fill="#9ED4C9" />
      <path d="M0 300 C100 225 170 230 260 285 S430 360 520 235 V360 H0Z" fill="#197C86" />
      <path d="M0 300 C100 225 170 230 260 285 S430 360 520 235" fill="none" stroke="#197C86" strokeWidth="2" />

      <rect x="84" y="72" width="272" height="180" rx="14" fill="#FFFFFF" stroke="#BFD8D6" strokeWidth="4" />
      <rect x="100" y="88" width="240" height="25" rx="7" fill="#142C40" />
      <circle cx="117" cy="100" r="4.5" fill="#F2B865" />
      <circle cx="133" cy="100" r="4.5" fill="#70C1B3" />
      <rect x="116" y="136" width="94" height="13" rx="6" fill="#197C86" />
      <rect x="116" y="160" width="154" height="8" rx="4" fill="#C6D9D6" />
      <rect x="116" y="176" width="130" height="8" rx="4" fill="#C6D9D6" />
      <rect x="116" y="198" width="80" height="32" rx="7" fill="#F2B865" />
      <path d="M250 220 L276 186 L296 207 L318 160 L345 220Z" fill="#67B9AA" />
      <circle cx="300" cy="148" r="16" fill="#F2B865" />

      <rect x="365" y="155" width="84" height="86" rx="14" fill="#142C40" />
      <path d="M385 192 L407 177 L430 192 L407 207Z" fill="#F2B865" />
      <path d="M391 201 V211 Q407 226 423 211 V201" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero-section page-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Learn with direction</p>
        <h1 id="hero-title">Build skills. Find your next horizon.</h1>
        <p className="hero-description">
          Practical, mentor-guided online programs to help ambitious learners
          move from ideas to real results.
        </p>
        <a className="button button-primary" href="#programs">
          Explore programs
        </a>
        <p className="hero-proof">
          Small cohorts <span>•</span> Weekly guidance <span>•</span> Portfolio-first learning
        </p>
      </div>
      <div className="hero-visual">
        <HeroArtwork />
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      number: "01",
      title: "Learn by doing",
      description: "Practice with short projects, not passive lectures.",
    },
    {
      number: "02",
      title: "Guidance that sticks",
      description: "Get checkpoints and thoughtful mentor feedback.",
    },
    {
      number: "03",
      title: "Progress you can show",
      description: "Build a portfolio of tangible outcomes.",
    },
  ];

  return (
    <section className="section page-container" id="benefits">
      <div className="section-heading">
        <h2>A clearer path to practical learning</h2>
        <p>Build confidence through projects, helpful feedback and steady progress.</p>
      </div>

      <div className="benefit-grid">
        {items.map((item) => (
          <article className="benefit-card" key={item.number}>
            <span className="number-tile">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgramArtwork({ type }) {
  return (
    <div className={`program-art program-art-${type}`}>
      {type === "foundations" && (
        <svg viewBox="0 0 260 170" aria-hidden="true">
          <circle cx="215" cy="38" r="25" fill="#F2B865" />
          <rect x="36" y="42" width="150" height="95" rx="9" fill="#FFFFFF" />
          <rect x="51" y="59" width="103" height="9" rx="4" fill="#142C40" />
          <rect x="51" y="78" width="75" height="6" rx="3" fill="#A5C9C4" />
          <rect x="51" y="91" width="92" height="6" rx="3" fill="#A5C9C4" />
          <path d="M54 119 L80 99 L101 111 L127 85 L153 112" fill="none" stroke="#197C86" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {type === "creative" && (
        <svg viewBox="0 0 260 170" aria-hidden="true">
          <circle cx="213" cy="39" r="25" fill="#F2B865" />
          <rect x="61" y="36" width="137" height="111" rx="11" fill="#142C40" />
          <rect x="79" y="54" width="99" height="12" rx="4" fill="#FFFFFF" />
          <rect x="79" y="78" width="78" height="7" rx="3" fill="#9ED4C9" />
          <rect x="79" y="93" width="55" height="7" rx="3" fill="#9ED4C9" />
          <path d="M151 112 L164 124 L186 99" fill="none" stroke="#F2B865" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {type === "career" && (
        <svg viewBox="0 0 260 170" aria-hidden="true">
          <circle cx="213" cy="39" r="25" fill="#F2B865" />
          <rect x="34" y="57" width="180" height="94" rx="10" fill="#197C86" />
          <rect x="53" y="43" width="142" height="31" rx="7" fill="#142C40" />
          <rect x="69" y="86" width="103" height="48" rx="6" fill="#FFFFFF" />
          <path d="M80 121 L101 103 L119 113 L148 91 L161 100" fill="none" stroke="#197C86" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

function Programs() {
  return (
    <section className="section page-container" id="programs">
      <div className="section-heading">
        <h2>Choose the next step that fits you</h2>
      </div>

      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.id}>
            <ProgramArtwork type={program.art} />
            <p className="program-meta">
              {program.duration} <span>·</span> {program.level}
            </p>
            <h3>{program.title}</h3>
            <p className="program-description">{program.description}</p>
            <a className="program-link" href="#get-started">
              Enquire about this program <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    program: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors = {};
    const cleanName = values.name.trim();

    if (cleanName.length < 2 || cleanName.length > 80) {
      nextErrors.name = "Enter a name between 2 and 80 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!programs.some((program) => program.id === values.program)) {
      nextErrors.program = "Please select one of the listed programs.";
    }

    if (!values.consent) {
      nextErrors.consent = "Please confirm your consent to continue.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues({ name: "", email: "", program: "", consent: false });
    }
  }

  return (
    <section className="registration-section page-container" id="get-started">
      <div className="registration-panel">
        <div className="registration-copy">
          <p className="eyebrow eyebrow-light">Your next step starts here</p>
          <h2>Start with a conversation</h2>
          <p>
            Tell us what you want to learn. We'll display a confirmation on
            this page after your form passes validation.
          </p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="full-name">Full name</label>
            <input
              id="full-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={values.name}
              onChange={updateField}
              minLength={2}
              maxLength={80}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="email-address">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={updateField}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="program-interest">Program interest</label>
            <select
              id="program-interest"
              name="program"
              value={values.program}
              onChange={updateField}
              aria-invalid={Boolean(errors.program)}
              aria-describedby={errors.program ? "program-error" : undefined}
            >
              <option value="">Select a program</option>
              {programs.map((program) => (
                <option value={program.id} key={program.id}>
                  {program.title}
                </option>
              ))}
            </select>
            {errors.program && <p className="field-error" id="program-error">{errors.program}</p>}
          </div>

          <div className="form-bottom">
            <div className="consent-field">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={values.consent}
                onChange={updateField}
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <label htmlFor="consent">I agree to be contacted about my enquiry.</label>
            </div>
            {errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}

            <button className="button button-gold" type="submit">
              Send enquiry
            </button>
          </div>

          {submitted && (
            <p className="form-success" role="status" aria-live="polite">
              Thanks for your interest. Your enquiry has been checked on this
              page. No message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section page-container" id="faqs">
      <div className="section-heading">
        <h2>Frequently asked questions</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details className="faq-item" key={faq.question}>
            <summary>
              <span>{faq.question}</span>
              <span className="faq-symbol" aria-hidden="true">+</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-container">
        <Logo />
        <p>
          Your enquiry is checked locally on this page. No message is sent and
          no form information is stored.
        </p>
        <p className="copyright">© 2026 Ridgeline Learning. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Programs />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
