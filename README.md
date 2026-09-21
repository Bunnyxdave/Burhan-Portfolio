<div align="center">

<!-- <img src="images/logo-transparent-png.png" alt="Burhan portfolio logo" width="110"> -->

# Burhan's Portfolio

### Computer Science & Engineering Graduate | Full-Stack Developer in Training

Responsive personal portfolio built with semantic HTML, modern CSS, and vanilla JavaScript.

<p>
  <a href="https://github.com/Bunnyxdave/Burhan-Portfolio"><strong>View repository</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="portfolio.html"><strong>Open portfolio</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="projects.html"><strong>Explore projects</strong></a>
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Design-8A5A44?style=flat-square" alt="Responsive design">
</p>

</div>

<p align="center">
  <img src="images/burhan-portrait.jpg" alt="Portrait of Mohammed Ahmed Burhanuddin Nayeem" width="260">
</p>

## About the project

This repository contains a polished, responsive portfolio for **Mohammed Ahmed Burhanuddin Nayeem**, a Computer Science and Engineering graduate based in Hyderabad, Telangana. It brings together a professional introduction, technical skills, education, tutoring experience, selected projects, and direct contact links in a compact static website.

The project has no framework, build process, package manager, or server-side dependency. It is intentionally lightweight and can be opened directly in a browser or deployed to any static hosting service.

## What is included

<table>
<tr>
<td width="50%">

### Personal presentation

- Hero introduction with profile image
- About and quick-facts sections
- Education and development timeline
- Contact links, location, GitHub, and LinkedIn

</td>
<td width="50%">

### Developer-focused content

- Skills overview across web, backend, data, and AI
- Four selected project areas
- Direct links to related GitHub repositories
- Responsive layout for mobile, tablet, and desktop

</td>
</tr>
</table>

## Page map

<table>
<tr>
<th>Page</th>
<th>Open</th>
<th>What you will find</th>
</tr>
<tr>
<td><strong>Home</strong></td>
<td><a href="portfolio.html">portfolio.html</a></td>
<td>Introduction, skills, selected projects, location, and contact CTA</td>
</tr>
<tr>
<td><strong>About</strong></td>
<td><a href="About.html">About.html</a></td>
<td>Background, technologies, tutoring experience, education, and training</td>
</tr>
<tr>
<td><strong>Projects</strong></td>
<td><a href="projects.html">projects.html</a></td>
<td>Project details, technology tags, repository rail, and GitHub links</td>
</tr>
<tr>
<td><strong>Responsive test</strong></td>
<td><a href="responsive-test.html">responsive-test.html</a></td>
<td>Viewport indicators and a manual cross-device testing checklist</td>
</tr>
</table>

## Selected work

<table>
<tr>
<td width="50%">

### MDFDP - Fraud Detection Platform

A modular Python and FastAPI application concept for fraud-detection workflows, with an emphasis on understandable validation, data flow, and prediction features.

**Stack:** Python · FastAPI · Web UI

<a href="https://github.com/Bunnyxdave/MDFDP">View repository →</a>

</td>
<td width="50%">

### Machine Learning Projects

An exploration of time-series approaches and machine-learning techniques for stock-price prediction, data preparation, model testing, and presenting insights.

**Stack:** Python · Pandas · Scikit-learn

<a href="https://github.com/Bunnyxdave/ML-projects">View repository →</a>

</td>
</tr>
<tr>
<td width="50%">

### JavaScript Projects

A browser-based QR code generator that creates scannable codes and supports downloadable PNG output without a heavy application stack.

**Stack:** JavaScript · HTML · CSS

<a href="https://github.com/Bunnyxdave/JavaScript-beginners">View repository →</a>

</td>
<td width="50%">

### MERN Stack Development

This portfolio project demonstrates responsive front-end structure, accessible navigation, reusable styling patterns, and a framework-free implementation.

**Stack:** HTML · CSS · JavaScript

<a href="https://github.com/Bunnyxdave/MERNSTACK-TDC">View related repository →</a>

</td>
</tr>
</table>

## Technology stack

| Layer | Tools and concepts |
| --- | --- |
| Markup | HTML5, semantic landmarks, accessible navigation |
| Styling | CSS3, Grid, Flexbox, fluid typography, media queries, gradients |
| Interaction | Vanilla JavaScript, mobile menu toggle, smooth scrolling |
| Responsive design | Mobile, tablet, desktop, reduced-motion support |
| Portfolio focus | React, Next.js, Node.js, Express.js, MongoDB, Python, FastAPI, Flask, Pandas, Scikit-learn |

## Visual and interaction details

- Warm dark visual system with translucent panels and high-contrast accent colors.
- Sticky navigation with a compact hamburger menu at smaller widths.
- Responsive grids that collapse cleanly from multi-column desktop layouts to single-column mobile layouts.
- Profile image treatment, project cards, timeline sections, tags, and repository links.
- `prefers-reduced-motion` handling for users who request less animation.
- Semantic page structure, image alternative text, viewport metadata, and `aria-expanded` menu state.

## Run locally

### Option 1: Open directly

Open [`portfolio.html`](portfolio.html) in a browser and use the navigation to explore the site.

### Option 2: Use a local server

Serving the folder over HTTP gives the closest experience to deployment:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000/portfolio.html](http://localhost:8000/portfolio.html).

To inspect responsive behavior, open [responsive-test.html](responsive-test.html) and resize the browser window.

## Project structure

```text
.
├── portfolio.html                    # Home page
├── About.html                        # About page
├── projects.html                     # Projects page
├── responsive-test.html              # Responsive testing utility
├── style.css                         # Shared styles and responsive rules
├── about.css                         # About page styles
├── projects.css                      # Projects page styles
├── script.js                         # Responsive navigation behavior
├── hover.js                          # Retained legacy hover interaction
├── RESPONSIVE_IMPLEMENTATION_SUMMARY.md
└── images/
    ├── bg.jpeg
    ├── burhan-portrait.jpg
    └── logo-transparent-png.png
```

The three main pages share `style.css`. Page-specific styles are kept in `about.css` and `projects.css`. The current HTML pages load `script.js`; `hover.js` is retained for reference but is not referenced by the current pages.

## Customize it

1. Update the content and links in the HTML pages.
2. Change shared colors, spacing, typography, and breakpoints in `style.css`.
3. Adjust About page sections in `about.css` and project layouts in `projects.css`.
4. Replace the files in `images/` or update their HTML paths.
5. Update the GitHub, LinkedIn, email, and location links before publishing your own version.

## Deployment

This project is ready for static hosting. Suitable options include:

- GitHub Pages
- Netlify
- Vercel
- Any web server that serves static HTML, CSS, JavaScript, and image files

No compilation or dependency installation is required.

## Contact

<div align="center">

<a href="mailto:mdburhan152004@gmail.com"><strong>Email Mohammed</strong></a>
&nbsp;&nbsp;·&nbsp;&nbsp;
<a href="https://github.com/Bunnyxdave"><strong>GitHub</strong></a>
&nbsp;&nbsp;·&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/md-burhan-770867353"><strong>LinkedIn</strong></a>

<br><br>

Made with HTML, CSS, JavaScript, and a focus on clear digital experiences.

</div>
