# Kirubashankar G Portfolio

## 📌 Project Overview

This repository contains a professional personal portfolio website for **Kirubashankar G**, a Full Stack Developer and Computer Science Engineering student. The application is built as a responsive single-page React website that presents profile information, education, technical skills, internship experience, projects, certifications, resume download, and contact details.

The portfolio is designed for recruiters, developers, and collaborators who want to quickly understand the author's background, skills, project work, and professional links.

## ✨ Key Features

| Feature | Description |
|---|---|
| Responsive Portfolio UI | Mobile-friendly single-page layout built with React, Bootstrap, and custom CSS. |
| Fixed Navigation Bar | Smooth section navigation for Home, About, Skills, Internship, Projects, Certifications, and Contact. |
| Hero/Profile Section | Introduces the developer with profile image, role summary, resume download, and contact call-to-action. |
| About Section | Highlights education, career goal, technical interests, and academic details. |
| Skills Showcase | Categorized skill cards for frontend, backend, database, and tools. |
| Internship Experience | Displays full stack internship details, learned technologies, and project link. |
| Projects Carousel | Bootstrap carousel presenting featured full-stack projects and GitHub links. |
| Certifications Gallery | Displays certificate images with protected right-click behavior. |
| Contact Footer | Shows email, phone, location, LinkedIn, GitHub, and back-to-top navigation. |
| Scroll Animations | Uses AOS for smooth reveal animations across sections. |

## 🧱 Complete Project Architecture

```text
portfolio/
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- assets/
|   |   |-- certificates/
|   |   |   |-- cloud.jpg
|   |   |   |-- iot.jpg
|   |   |   |-- paper.jpg
|   |   |   `-- workshop.jpg
|   |   |-- images/
|   |   |   `-- profile.jpg
|   |   `-- Kirubashankar_G_Resume.pdf
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Certifications.jsx
|   |   |-- Footer.jsx
|   |   |-- Home.jsx
|   |   |-- Internship.jsx
|   |   |-- Navbar.jsx
|   |   |-- Projects.jsx
|   |   |-- ScrollToTop.jsx
|   |   `-- Skills.jsx
|   |-- styles/
|   |   |-- About.css
|   |   |-- Certifications.css
|   |   |-- Footer.css
|   |   |-- Home.css
|   |   |-- Internship.css
|   |   |-- Navbar.css
|   |   |-- Projects.css
|   |   `-- Skills.css
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
`-- vite.config.js
```

## 📁 Folder and File Responsibilities

| Path | Purpose |
|---|---|
| `public/` | Stores static public files served directly by Vite. |
| `public/favicon.svg` | Browser tab icon for the portfolio. |
| `public/icons.svg` | Public SVG icon asset. |
| `src/` | Main source code for the React application. |
| `src/assets/` | Static application assets such as images, certificates, and resume PDF. |
| `src/assets/certificates/` | Certificate images displayed in the Certifications section. |
| `src/assets/images/profile.jpg` | Profile image used in the Home section. |
| `src/assets/Kirubashankar_G_Resume.pdf` | Downloadable resume file. |
| `src/components/` | Reusable React components for each portfolio section. |
| `src/styles/` | Component-specific CSS files. |
| `src/App.jsx` | Root application component that assembles all portfolio sections. |
| `src/main.jsx` | React entry point; loads Bootstrap, AOS styles, and renders the app. |
| `src/index.css` | Global styles, theme variables, scroll behavior, layout defaults, and page background. |
| `src/App.css` | App-level scroll and section spacing styles. |
| `index.html` | HTML template used by Vite. |
| `package.json` | Project metadata, dependencies, and npm scripts. |
| `vite.config.js` | Vite configuration with React and React Compiler Babel preset. |
| `eslint.config.js` | ESLint configuration for JavaScript and React files. |

## 🧩 Important Modules

| Module | Responsibility |
|---|---|
| `Navbar.jsx` | Renders the fixed top navigation, mobile toggle, section links, and scroll-state styling. |
| `Home.jsx` | Displays hero content, profile image, developer summary, resume download, and contact link. |
| `About.jsx` | Presents personal introduction, education details, CGPA, and graduation timeline. |
| `Skills.jsx` | Shows categorized skill cards using React Icons. |
| `Internship.jsx` | Displays internship experience, technologies learned, and related GitHub project. |
| `Projects.jsx` | Shows featured projects in a Bootstrap carousel with technology badges and repository links. |
| `Certifications.jsx` | Renders certification cards from local image assets. |
| `Footer.jsx` | Provides contact information, social profile links, copyright text, and back-to-top action. |
| `ScrollToTop.jsx` | Reserved component file for scroll-to-top behavior; currently empty. |
| `App.jsx` | Controls page composition and initializes AOS animations. |
| `main.jsx` | Mounts the React app and imports global third-party styles/scripts. |

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React 19, JSX, HTML5, CSS3, Bootstrap 5, React Icons, AOS, Swiper |
| Backend | Not applicable in this repository; this is currently a static frontend portfolio. |
| Database | Not applicable in this repository; no database connection is used. |
| Authentication | Not applicable in this repository; no login or authentication flow is implemented. |
| Tools | Git, GitHub, VS Code, ESLint, npm |
| Build Tool | Vite |

## 🔄 Project Workflow

This portfolio currently works as a static single-page frontend application:

1. The browser loads `index.html`.
2. Vite serves the React entry point from `src/main.jsx`.
3. `main.jsx` imports Bootstrap, AOS, and renders `App.jsx` into the root DOM node.
4. `App.jsx` initializes animation behavior and renders each major section in order.
5. `Navbar.jsx` provides fixed navigation links to page sections using anchor IDs.
6. Visitors can browse the portfolio sections: Home, About, Skills, Internship, Projects, Certifications, and Contact.
7. Visitors can download the resume from the Home section.
8. Visitors can open linked GitHub projects, LinkedIn profile, and GitHub profile from the portfolio.

> Note: The current project does **not** include a login flow, backend service, API calls, database, or authentication module.

## 📦 Prerequisites

Before running this project, install:

| Requirement | Recommended Version |
|---|---|
| Node.js | 20.x or later |
| npm | 10.x or later |
| Git | Latest stable version |
| Code Editor | VS Code or any modern editor |

## ⚙️ Installation and Setup

Clone the repository:

```bash
git clone https://github.com/kirubashankarganesan/portfolio.git
```

Navigate into the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

## ▶️ Running the Application

### Frontend Development Server

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal. By default, Vite usually runs at:

```text
http://localhost:5173
```

### Frontend Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Backend Server

This repository does not contain a backend application. No backend server is required to run the portfolio.

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds the app for production. |
| `npm run preview` | Serves the production build locally for preview. |
| `npm run lint` | Runs ESLint checks across the project. |

## 🔐 Environment Variables

No environment variables are required for the current version of this portfolio.

| Variable | Required | Description |
|---|---|---|
| Not applicable | No | The current app does not use environment variables. |

## 🌐 API Structure

No API routes are currently implemented in this repository.

The portfolio is a client-side React application that uses local assets and external profile/project links. If a backend is added in the future, API documentation can follow this structure:

```text
GET    /api/profile
GET    /api/projects
GET    /api/certifications
POST   /api/contact
```

## 🗄️ Database

No database is used in the current repository.

| Entity/Table | Status | Purpose |
|---|---|---|
| Users | Not implemented | Could support authentication in a future version. |
| Projects | Not implemented | Could store portfolio project data dynamically. |
| Certifications | Not implemented | Could store certification metadata dynamically. |
| ContactMessages | Not implemented | Could store contact form submissions. |

## 🧭 Usage Guide

1. Open the portfolio in a browser.
2. Use the navigation bar to jump between sections.
3. Review the developer profile, skills, internship experience, projects, and certifications.
4. Click **Download Resume** to download the resume PDF.
5. Use project buttons to visit GitHub repositories.
6. Use the footer links to connect through LinkedIn or GitHub.

## 🖼️ Screenshots

Add screenshots of the live application in this section.

| Section | Screenshot |
|---|---|
| Home | `Add screenshot here` |
| About | `Add screenshot here` |
| Skills | `Add screenshot here` |
| Internship | `Add screenshot here` |
| Projects | `Add screenshot here` |
| Certifications | `Add screenshot here` |
| Contact | `Add screenshot here` |

Example:

```md
![Home Section](./screenshots/home.png)
```

## 🚀 Future Enhancements

| Enhancement | Description |
|---|---|
| Contact Form | Add a working contact form with email service or backend API integration. |
| Dynamic Project Data | Store projects in JSON, CMS, or database instead of hardcoding content in components. |
| Admin Dashboard | Add protected admin functionality to manage projects, skills, and certificates. |
| Backend Integration | Add Spring Boot or Node.js backend for contact messages and portfolio data. |
| Database Support | Use MySQL or another database to store portfolio content dynamically. |
| Dark Mode Toggle | Add manual theme switching for better user preference control. |
| SEO Improvements | Add meta tags, Open Graph data, sitemap, and structured data. |
| Testing | Add component and end-to-end tests using Vitest and Playwright or Cypress. |
| Deployment Pipeline | Configure GitHub Actions for linting, building, and deployment. |
| Accessibility Audit | Improve keyboard navigation, ARIA labels, contrast checks, and semantic markup. |

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

```bash
git checkout -b feature/your-feature-name
npm run lint
npm run build
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

Then open a pull request with a clear description of the changes.

## 📄 License

This project is currently not distributed with a specific license file.

If you plan to use, modify, or distribute this project, add a license such as MIT, Apache-2.0, or another license that matches your intended usage.

Suggested license:

```text
MIT License
```

## 👤 Author

| Detail | Information |
|---|---|
| Name | Kirubashankar G |
| Role | Full Stack Developer |
| Location | Coimbatore, Tamil Nadu |
| Email | kirubashankarg2005@gmail.com |
| GitHub | [kirubashankarganesan](https://github.com/kirubashankarganesan) |
| LinkedIn | [Kirubashankar G](https://www.linkedin.com/in/kirubashankar-g-5613422a4/) |

## ✅ Conclusion

This portfolio project provides a clean and professional presentation of Kirubashankar G's skills, education, internship experience, projects, certifications, and contact information. Built with React, Vite, Bootstrap, and modern frontend tooling, it is easy to run locally, customize, and deploy as a personal developer portfolio.
