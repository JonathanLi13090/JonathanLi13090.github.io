# Portfolio website

A simple HTML, CSS, and vanilla JavaScript portfolio. No build step or dependencies.

## Structure

```text
index.html                     Home
about.html                     About
resume.html                    Resume
css/style.css                  Shared styles
js/main.js                     Shared JavaScript
projects/
  index.html                   Featured Projects
  example-project.html         Project page template
  project-two.html             Second placeholder project
  project-three.html           Third placeholder project
blog/
  index.html                   Blog listing
  example-post.html            Blog post template
  post-two.html                Second placeholder post
  post-three.html              Third placeholder post
images/
  profile/                     Portraits and personal images
  projects/                    Project images
  blog/                        Blog images
```

Image folders contain .gitkeep files so Git preserves the empty directories.

## Editing

Open index.html directly in a browser. Edit the HTML in VS Code to replace Your Name and the placeholder content.

Sidebar markup lives directly in each HTML file, with three variants:

- index.html, about.html, and resume.html: Home, About, Resume, Featured Projects, and Blog.
- All projects/ pages: Home and one link for each project.
- All blog/ pages: Home and one link for each post.

The current page is bold and marked with aria-current="page". Section listing pages show a bold current-page label in the sidebar because their navigation contains only Home and individual entries. The sidebar stays on the left on desktop and flows above the content on small screens.

Copy the example project or blog post within its folder, change its title and content, and add a link in that folder's index.html. Add the new entry to the sidebar in every HTML file in that folder, including the listing. Move aria-current="page" to the matching link on each individual page; keep the current-page label only on the listing page.

All links are relative. Root pages use css/style.css; nested pages use ../css/style.css. A project image can use ../images/projects/screenshot.png. Avoid paths starting with / so the site works at a repository URL.

## Hosting

Publish the repository root with GitHub Pages. No build tools are needed. Relative links support URLs such as https://username.github.io/repository-name/.
