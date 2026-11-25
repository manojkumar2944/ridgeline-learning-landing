
import React, { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfaT94jIXI0ZTozWtyhA9PbfMEZNu5PYo5hTWnvXZwsX-ViaQ/formResponse";

const programs = [
  {
    id: "foundations",
    title: "Foundations of Digital Work",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "Build practical digital skills and develop confidence with the tools used in today's workplace.",
    number: "01",
  },
  {
    id: "creative",
    title: "Creative Problem Solving",
    duration: "8 weeks",
    level: "All levels",
    description:
      "Learn to approach challenges with curiosity, structure and creative thinking.",
    number: "02",
  },
  {
    id: "career",
    title: "Career-Ready Projects",
    duration: "10 weeks",
    level: "Intermediate",
    description:
      "Turn your learning into practical projects that demonstrate what you can do.",
    number: "03",
  },
];

const faqs = [
  {
    question: "Who are the programs designed for?",
    answer:
      "Our programs are designed for learners who want to build practical skills, explore new ideas and make progress with clear guidance.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "Not for every program. Foundations of Digital Work is beginner-friendly. Each program lists its recommended experience level so you can choose a suitable starting point.",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">R</span>
          <span className="brand-name">
            RIDGELINE
            <small>LEARNING</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#why-ridgeline" onClick={closeMenu}>
            Why Ridgeline
          </a>
          <a href="#programs" onClick={closeMenu}>
            Programs
          </a>
          <a href="#faqs" onClick={closeMenu}>
            FAQs
          </a>
          <a
            className="nav-cta"
            href="#get-started"
            onClick={closeMenu}
          >
            Get started <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-sun" />
      <div className="art-circle art-circle-one" />
      <div className="art-circle art-circle-two" />
      <svg
        className="mountain-art"
        viewBox="0 0 620 430"
        role="presentation"
      >
        <path
          d="M0 350 L145 115 L230 235 L340 55 L620 350 Z"
          fill="#197C86"
        />
        <path
          d="M145 115 L190 190 L145 170 L112 210 Z"
          fill="#F8F5EE"
        />
        <path
          d="M340 55 L405 160 L340 130 L300 180 Z"
          fill="#F8F5EE"
        />
        <path
          d="M0 350 L210 235 L320 350 Z"
          fill="#142C40"
          opacity="0.85"
        />
        <path
          d="M230 350 L430 190 L620 350 Z"
          fill="#142C40"
        />
        <path
          d="M0 350 Q170 300 310 350 T620 350 L620 430 L0 430 Z"
          fill="#E8F4F1"
        />
        <path
          d="M70 350 Q190 300 310 350"
          fill="none"
          stroke="#197C86"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div className="art-note">
        <span className="note-dot" />
        Your next horizon starts here.
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            LEARN WITH DIRECTION
          </span>

          <h1>
            Build skills.
            <br />
            Find your <span>next horizon.</span>
          </h1>

          <p>
            Learning should lead somewhere. Build practical
            skills, get thoughtful guidance and create work
            that shows what you can do.
          </p>

          <a className="primary-button" href="#programs">
            Explore programs <span aria-hidden="true">→</span>
          </a>

          <div className="confidence-line">
            <span>Small cohorts</span>
            <i />
            <span>Weekly guidance</span>
            <i />
            <span>Portfolio-first learning</span>
          </div>
        </div>

        <HeroArtwork />
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      number: "01",
      title: "Learn by doing",
      description:
        "Build understanding through practical activities and meaningful projects.",
    },
    {
      number: "02",
      title: "Guidance that sticks",
      description:
        "Get regular direction and feedback as you move through your learning journey.",
    },
    {
      number: "03",
      title: "Progress you can show",
      description:
        "Create work that makes your skills and progress easier to demonstrate.",
    },
  ];

  return (
    <section className="benefits-section" id="why-ridgeline">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">THE RIDGELINE APPROACH</span>
          <h2>Make learning mean something.</h2>
          <p>
            A clearer path from learning something new to
            putting it into practice.
          </p>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.number}>
              <span className="card-number">{benefit.number}</span>
              <div className="benefit-icon" aria-hidden="true">
                {benefit.number === "01"
                  ? "✳"
                  : benefit.number === "02"
                    ? "↗"
                    : "◈"}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="program-heading">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR STARTING POINT</span>
            <h2>Programs built for progress.</h2>
            <p>
              Choose a learning path that matches where you
              are and where you want to go.
            </p>
          </div>
          <span className="program-count">03 LEARNING PATHS</span>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.id}>
              <div className="program-card-top">
                <span>{program.number} / PROGRAM</span>
                <span className="program-arrow">↗</span>
              </div>

              <h3>{program.title}</h3>
              <p>{program.description}</p>

              <div className="program-meta">
                <span>{program.duration}</span>
                <span>{program.level}</span>
              </div>

              <a
                className="text-link"
                href={`#get-started`}
              >
                Enquire about this program <span>→</span>
              </a>
            </article>
          ))}
        </div>
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
  const [isSending, setIsSending] = useState(false);

  const updateField = (field, value) => {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
      submit: "",
    }));

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};
    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();

    if (trimmedName.length < 2 || trimmedName.length > 80) {
      newErrors.name =
        "Please enter a name between 2 and 80 characters.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    const validPrograms = programs.map((program) => program.id);

    if (!validPrograms.includes(values.program)) {
      newErrors.program = "Please select a program.";
    }

    if (!values.consent) {
      newErrors.consent =
        "Please agree before submitting your enquiry.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const selectedProgram = programs.find(
      (program) => program.id === values.program
    );

    const formData = new URLSearchParams();

    formData.append("entry.1696497651", values.name.trim());
    formData.append("entry.469946661", values.email.trim());
    formData.append(
      "entry.2009948020",
      selectedProgram.title
    );
    formData.append(
      "entry.1739055178",
      "I agree to be contacted about my enquiry."
    );

    setIsSending(true);
    setSubmitted(false);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      setSubmitted(true);

      setValues({
        name: "",
        email: "",
        program: "",
        consent: false,
      });
    } catch (error) {
      console.error("Google Forms submission error:", error);

      setErrors({
        submit:
          "We couldn't send your enquiry. Please check your connection and try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="registration-section" id="get-started">
      <div className="container registration-grid">
        <div className="registration-copy">
          <span className="eyebrow">TAKE THE NEXT STEP</span>
          <h2>
            Your next chapter
            <br />
            starts with a <span>conversation.</span>
          </h2>
          <p>
            Tell us a little about yourself and the program
            you're interested in. We'll use your enquiry to
            understand how to guide your next step.
          </p>

          <div className="registration-points">
            <div>
              <span className="check-mark">✓</span>
              A clear starting point
            </div>
            <div>
              <span className="check-mark">✓</span>
              Guidance on your next step
            </div>
            <div>
              <span className="check-mark">✓</span>
              Programs focused on practical learning
            </div>
          </div>
        </div>

        <div className="form-card">
          <div className="form-heading">
            <span className="eyebrow">ENQUIRY FORM</span>
            <h3>Let's get started.</h3>
            <p>Complete the details below to send your enquiry.</p>
          </div>

          {submitted ? (
            <div className="form-success" role="status">
              <div className="success-icon">✓</div>
              <h3>Thank you for your interest!</h3>
              <p>
                Your enquiry request has been sent to Google
                Forms. Google does not provide this page with
                a confirmation of receipt, so please check the
                linked Google Sheet to verify that your enquiry
                arrived.
              </p>
              <button
                className="secondary-button"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "name-error" : undefined
                  }
                />
                {errors.name && (
                  <span className="field-error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                />
                {errors.email && (
                  <span className="field-error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="program">Program interest</label>
                <select
                  id="program"
                  name="program"
                  value={values.program}
                  onChange={(event) =>
                    updateField("program", event.target.value)
                  }
                  aria-invalid={Boolean(errors.program)}
                  aria-describedby={
                    errors.program ? "program-error" : undefined
                  }
                >
                  <option value="">Choose a program</option>
                  {programs.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.title}
                    </option>
                  ))}
                </select>
                {errors.program && (
                  <span
                    className="field-error"
                    id="program-error"
                  >
                    {errors.program}
                  </span>
                )}
              </div>

              <div className="consent-field">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={(event) =>
                    updateField("consent", event.target.checked)
                  }
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={
                    errors.consent ? "consent-error" : undefined
                  }
                />
                <label htmlFor="consent">
                  I agree to be contacted about my enquiry.
                </label>
              </div>

              {errors.consent && (
                <span
                  className="field-error consent-error"
                  id="consent-error"
                >
                  {errors.consent}
                </span>
              )}

              {errors.submit && (
                <p className="field-error submit-error" role="alert">
                  {errors.submit}
                </p>
              )}

              <button
                className="primary-button submit-button"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send my enquiry"}
                {!isSending && <span aria-hidden="true">→</span>}
              </button>

              <p className="form-privacy">
                Your details will be submitted to Google Forms
                and stored in the linked Google Sheet so your
                enquiry can be reviewed and responded to.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" id="faqs">
      <div className="container faq-grid">
        <div className="section-heading">
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2>Questions before you begin?</h2>
          <p>
            A little more clarity before you take your next step.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                <span>{faq.question}</span>
                <span className="faq-symbol">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">R</span>
            <span className="brand-name">
              RIDGELINE
              <small>LEARNING</small>
            </span>
          </a>

          <p>
            Build skills. Find your next horizon.
          </p>

          <a className="footer-top-link" href="#home">
            Back to top ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ridgeline Learning. All rights reserved.</span>
          <span>
            Enquiry details are submitted through Google Forms
            and stored in the linked Google Sheet.
          </span>
        </div>
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
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
