# Ridgeline Learning – Responsive React Landing Page

A modern, responsive landing page for **Ridgeline Learning**, developed as part of the SkillNexa Web & App Development project assignment.

The project focuses on creating a professional learning-platform landing page with responsive layouts, accessible navigation, reusable React components, program information, and a client-side registration form.

## 1. Project Overview

The objective of this project is to transform the supplied landing-page requirements into a responsive React application using modern frontend technologies.

The website is designed to provide a clear introduction to Ridgeline Learning, showcase its learning programs, communicate its benefits, and allow visitors to submit a local enquiry through a validated registration form.

## 2. Features

- Responsive navigation bar with mobile menu.
- Hero section with learning-focused messaging and artwork.
- Benefits section highlighting the learning experience.
- Programs section displaying available learning programs.
- Client-side registration and enquiry form.
- Required-field and email validation.
- Program selection validation.
- Consent checkbox validation.
- Accessible field-level error messages.
- Local submission confirmation.
- Expandable FAQ section.
- Responsive footer.
- Semantic HTML5 structure.
- Mobile-friendly layouts.

### Registration Form Validation

The registration form uses React state to manage user inputs.

Validation includes:

- Full name must contain between 2 and 80 characters.
- Email address must follow a valid email format.
- A listed learning program must be selected.
- Consent must be provided before submission.
- Validation errors are displayed alongside the relevant fields.
- A confirmation message appears when all validations pass.

**Privacy:** The form operates entirely on the client side. No personal information is transmitted to an external service or stored by the application. A successful submission displays a local confirmation only.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | UI development and component-based architecture |
| Vite 6 | Development server and production build |
| JavaScript | Application functionality and form validation |
| HTML5 | Semantic page structure |
| CSS3 | Responsive styling and layouts |
| Flexbox | Flexible component layouts |
| CSS Grid | Responsive content layouts |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Website deployment |

## 4. Project Structure

```text
ridgeline-learning-landing/
│
├── public/
│   └── images/
│       ├── creative_career.webp
│       ├── creative_problem.webp
│       ├── creative_skills.webp
│       ├── hero_learning.webp
│       └── ridgeline_logo.svg
│
├── src/
│   ├── components/
│   ├── styles/
│   │   └── base.css
│   ├── App.jsx
│   ├── App.module.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 5. Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js 18 or later
- npm
- Git
- Visual Studio Code (recommended)

### Step 1: Clone the repository

```bash
git clone https://github.com/manojkumar2944/ridgeline-learning-landing.git
```

### Step 2: Navigate to the project directory

```bash
cd ridgeline-learning-landing
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

Open the local development URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

## 6. Available Commands

| Command | Description |
|---|---|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates the production build |
| `npm run preview` | Previews the production build locally |

### Production Build

Run:

```bash
npm run build
```

The optimized production files are generated inside the `dist/` directory.

## 7. Responsive Design

The website is intended to support mobile, tablet, laptop, and desktop screen sizes.

The following viewport widths are included in the project testing checklist:

| Device Category | Viewport Width |
|---|---:|
| Small Mobile | 320px |
| Mobile | 390px |
| Tablet | 768px |
| Laptop | 1200px |
| Desktop | 1440px |

Responsive styling uses CSS media queries, Flexbox, and Grid.

## 8. Accessibility

Accessibility considerations implemented in the application include:

- Semantic HTML elements such as header, nav, main, section, article, form and footer.
- Descriptive form labels.
- Accessible mobile navigation controls.
- Keyboard-operable navigation and native FAQ controls.
- Field-level validation messages.
- ARIA attributes for invalid fields and form confirmation.
- Alternative text for meaningful images.

## 9. Deployment

The application is configured for deployment using Vercel.

### Vercel Configuration

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Root Directory | `./` |

### Deployment Process

1. Push the project source code to GitHub.
2. Sign in to Vercel using GitHub.
3. Import the GitHub repository.
4. Configure the Vite build settings.
5. Deploy the application.
6. Verify the generated production URL.

**Live Website:** Add your actual Vercel deployment URL here.

## 10. Testing Checklist

The following checks should be completed before final submission:

- [ ] Application starts successfully using `npm run dev`.
- [ ] Production build completes using `npm run build`.
- [ ] Navigation links work correctly.
- [ ] Mobile navigation opens and closes correctly.
- [ ] All landing-page sections render correctly.
- [ ] Registration form required-field validation works.
- [ ] Invalid email validation works.
- [ ] Program selection validation works.
- [ ] Consent validation works.
- [ ] Successful local confirmation works.
- [ ] FAQ expand/collapse functionality works.
- [ ] Responsive layouts are checked at all five target widths.
- [ ] Chrome and Firefox compatibility is checked.
- [ ] Keyboard accessibility is reviewed.
- [ ] Lighthouse Accessibility score is recorded.
- [ ] Lighthouse Best Practices score is recorded.

Lighthouse scores and browser compatibility results should be added after running the actual tests.

## 11. GitHub Repository

Source Code:

https://github.com/manojkumar2944/ridgeline-learning-landing

## 12. Project Deliverables

The project submission includes:

1. Complete React source code hosted on GitHub.
2. Public website deployment through Vercel.
3. Technical documentation through this README file.

---

**Project:** Ridgeline Learning – Responsive Landing Page

**Development:** React + Vite

**Deployment:** Vercel

**Repository:** GitHub
