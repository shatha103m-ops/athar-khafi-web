:root {
  --bg: #0c0c0f;
  --surface: #15151b;
  --surface-alt: #111116;
  --text: #f3efe6;
  --muted: #b6b0a4;
  --gold: #d4af37;
  --gold-hover: #e5c454;
  --border: rgba(212, 175, 55, 0.25);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, "Segoe UI", Tahoma, sans-serif;
  background-color: #0c0c0f;
  color: #f3efe6;
  line-height: 1.7;
}

.container {
  width: min(1040px, 92%);
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(12, 12, 15, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
}

.brand {
  color: var(--gold);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
}

.main-nav {
  display: flex;
  gap: 1.25rem;
}

.main-nav a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.95rem;
}

.main-nav a:hover {
  color: var(--gold);
}

.menu-toggle {
  display: none;
  background: var(--surface);
  color: var(--gold);
  border: 1px solid var(--gold);
  border-radius: 8px;
  padding: 0.35rem 0.7rem;
  font-size: 1.15rem;
  line-height: 1;
  cursor: pointer;
}

section[id] {
  scroll-margin-top: 76px;
}

.hero {
  padding: 5rem 0 4rem;
  text-align: center;
  background: radial-gradient(circle at top, rgba(212, 175, 55, 0.16), transparent 65%);
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--gold);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  color: var(--gold);
  margin-bottom: 0.75rem;
}

.hero-subtitle {
  max-width: 600px;
  margin: 0 auto 1.75rem;
  color: var(--muted);
}

.section {
  padding: 3.5rem 0;
}

.section-alt {
  background: var(--surface-alt);
}

.section h2 {
  color: var(--gold);
  margin-bottom: 0.75rem;
  font-size: 1.6rem;
}

.section-desc {
  color: var(--muted);
  margin-bottom: 1.5rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.4rem;
}

.image-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  border: 1px dashed var(--border);
  border-radius: 10px;
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.75rem;
}

.card h3 {
  margin-bottom: 0.4rem;
  font-size: 1.15rem;
}

.card p {
  color: var(--muted);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.65rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn-gold {
  background: var(--gold);
  color: #111;
}

.btn-gold:hover {
  background: var(--gold-hover);
}

.btn-outline {
  background: transparent;
  color: var(--gold);
  border-color: var(--border);
}

.answer-box {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  background: rgba(212, 175, 55, 0.08);
  color: var(--text) !important;
}

.whisper-text {
  font-size: 1.15rem;
  color: var(--text) !important;
  margin-bottom: 1.25rem;
}

.actions-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  max-width: 520px;
}

.newsletter-form input[type="email"] {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 1rem;
}

.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.9rem;
  color: var(--muted);
}

.feedback-text {
  margin-top: 0.75rem;
  color: var(--gold);
  font-size: 0.95rem;
}

.site-footer {
  border-top: 1px solid var(--border);
  padding: 1.75rem 0;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
}

@media (max-width: 700px) {
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 101;
    background: #15151b;
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem 5%;
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a {
    padding: 0.65rem 0.4rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 1rem;
  }

  .main-nav a:last-child {
    border-bottom: none;
  }
}
