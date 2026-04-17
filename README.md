# ARISE Treatment Center — Website

Public website for ARISE Treatment Center (ATC), a CARF-accredited ASAM Level 3.5 residential addiction treatment facility in Zionsville, Indiana.

## Stack

- Plain HTML5, CSS3, and a small amount of vanilla JavaScript.
- No build step. No frameworks. No npm.
- Google Fonts and Font Awesome loaded via `<link>` from CDN.
- Deployed as static files on GitHub Pages.

## Preview locally

No build tools needed — just open `index.html` in a browser.

For a proper local server (recommended, since some browsers block things like favicons when opening files directly):

```
cd arise-treatment-center-site
python3 -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Folder layout

```
index.html              Home page
about.html              About (stub)
program.html            Our Program (stub)
admissions.html         Admissions (stub)
insurance.html          Insurance & Payment (stub)
team.html               Our Team (stub)
contact.html            Contact (stub)
blog/
  index.html            Blog listing (stub)
  2026-04-17-welcome.html  First post (stub)
assets/
  css/styles.css        Design system + global styles
  js/main.js            Mobile nav toggle
  images/
    logo/               Brand logo PNGs
    photos/             Facility + staff photos
    icons/              Site icons
README.md
.gitignore
CNAME                   (empty — fill in with custom domain at launch)
```

## Deploy

1. Push `main` to GitHub.
2. In repo Settings → Pages, set Source to `main` branch, root folder.
3. Staging URL: `https://<username>.github.io/arise-treatment-center-site/`
4. When ready for production, fill in `CNAME` with `arisetreatmentcenter.org` and update DNS.

## Contact

- Phone: (317) 708-1660
- Address: 4545 Northwestern Dr, Zionsville, IN 46077
