document.addEventListener('DOMContentLoaded', () => {
  // ─── Year ───
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ─── Scroll Reveal ───
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  // ─── Mobile Nav Toggle ───
  const navToggle = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse =
          bootstrap.Collapse.getInstance(navbarCollapse) ||
          new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  // ─── Active Nav Highlighting ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => navObserver.observe(section));

  // ─── Scroll-to-Top Button ───
  const scrollTopBtn = document.querySelector('.scroll-top');

  const toggleScrollTop = () => {
    if (!scrollTopBtn) return;
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  };

  toggleScrollTop();
  window.addEventListener('scroll', toggleScrollTop, { passive: true });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── Contact Form ───
  const contactForm = document.getElementById('contact-form');
  const feedbackEl = document.getElementById('form-feedback');

  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous feedback
    if (feedbackEl) {
      feedbackEl.textContent = '';
      feedbackEl.className = 'form-feedback';
    }

    // Basic validation
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email-field');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    let hasError = false;

    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      input?.classList.remove('error');
      if (!input?.value.trim()) {
        input?.classList.add('error');
        hasError = true;
      }
    });

    if (emailInput && emailInput.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        hasError = true;
        if (feedbackEl) {
          feedbackEl.textContent = 'Please enter a valid email address.';
          feedbackEl.className = 'form-feedback error-msg';
        }
        return;
      }
    }

    if (hasError) {
      if (feedbackEl) {
        feedbackEl.textContent = 'Please fill in all required fields.';
        feedbackEl.className = 'form-feedback error-msg';
      }
      return;
    }

    // Build mailto link and open it
    const name = nameInput?.value.trim() ?? '';
    const email = emailInput?.value.trim() ?? '';
    const subject = subjectInput?.value.trim() ?? '';
    const message = messageInput?.value.trim() ?? '';

    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:ggovind164@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
    window.location.href = mailtoLink;

    // Show feedback
    if (feedbackEl) {
      feedbackEl.textContent = 'Opening your email client to send the message...';
      feedbackEl.className = 'form-feedback success';
    }

    // Reset form after short delay
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Message Ready';
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        contactForm.reset();
        if (feedbackEl) {
          feedbackEl.textContent = '';
          feedbackEl.className = 'form-feedback';
        }
      }, 3000);
    }
  });

  // ─── Header scroll effect ───
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });
});
