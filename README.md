# Govind G — Personal Developer Portfolio

A personal portfolio website built as a faithful recreation of a reference design, personalized with my own content, projects, and professional information.

**Live Site:** https://govindg7040.github.io/govind-portfolio

---

## About

This portfolio showcases my background as an AI Engineer, Generative AI Developer, and Python Developer. It includes my professional experience, technical skills, featured projects, education, and contact information.

---

## Project Structure

```
govind-portfolio/
├── index.html              ← Main HTML file
├── css/
│   └── style.css           ← All styles
├── js/
│   └── script.js           ← Scroll reveal, nav, contact form
├── assets/
│   ├── profile.jpg         ← Profile photograph
│   └── Govind_G_Resume.pdf ← Resume PDF
└── README.md
```

---

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/GovindG7040/govind-portfolio.git
   cd govind-portfolio
   ```

2. Open `index.html` in your browser directly, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   # Then open: http://localhost:8000
   ```

---

## How to Update Content

### Replace Profile Picture
- Replace `assets/profile.jpg` with your new photograph.
- Keep the same filename (`profile.jpg`), or update the `src` in `index.html`:
  ```html
  <img src="assets/your-new-photo.jpg" alt="Portrait of Govind G" />
  ```

### Replace Resume
- Replace `assets/Govind_G_Resume.pdf` with your updated PDF.
- Keep the same filename, or update the `href` in `index.html`:
  ```html
  <a href="assets/Your_New_Resume.pdf" target="_blank" download>Download Resume</a>
  ```

### Update Personal Information
- Edit `index.html` directly.
- Search for the section you want to change (e.g., `#about`, `#experience`, `#contact`).
- Update the text content.

### Update Project Links
- In `index.html`, find the project card for the project you want to update.
- Change the `href` attribute on the GitHub button:
  ```html
  <a href="https://github.com/GovindG7040/your-repo" target="_blank">GitHub</a>
  ```

### Update Contact Information
- In `index.html`, update the contact links section:
  ```html
  <a href="mailto:your-email@example.com">your-email@example.com</a>
  <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
  ```
- In `js/script.js`, update the mailto address on line with `ggovind164@gmail.com`.

---

## Deployment (GitHub Pages)

1. Push all files to the `main` branch of your GitHub repository.
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select **Deploy from a branch**.
4. Select **main** branch and **/ (root)** folder.
5. Click **Save**.
6. Your site will be live at: `https://yourusername.github.io/govind-portfolio`

> **Note:** It may take 1–5 minutes for GitHub Pages to deploy after pushing.

---

## Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Custom design system with CSS variables
- **JavaScript (ES6+)** — Scroll animations, nav, form handling
- **Bootstrap 5.3** — Grid, responsive utilities, navbar
- **Google Fonts** — Inter typeface
- **GitHub Pages** — Static site hosting

---

## Sections

1. **Hero** — Name, title, introduction, profile photo, CTA buttons
2. **Professional Snapshot** — Five key competency cards
3. **About Me** — Background and professional interests
4. **Experience** — AI Engineer Trainee at KiksAR Technologies
5. **Technical Skills** — Organized skill groups with badges
6. **Featured Projects** — RAG Assistant and Cricket Shot Detection
7. **Work Highlight** — Deep dive into the RAG pipeline architecture
8. **Current Focus** — Active learning and development areas
9. **Education** — MCA, BCA, Diploma credentials
10. **Career Interests** — Target roles
11. **Contact** — Email, phone, LinkedIn, GitHub, and contact form

---

## License

This portfolio is for personal use. The code structure is adapted from a reference design for educational purposes.
