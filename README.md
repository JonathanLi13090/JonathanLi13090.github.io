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
blog/
  index.html                   Blog listing
  example-post.html            Blog post template
images/
  profile/                     Portraits and personal images
  projects/                    Project images
  blog/                        Blog images
```

Image folders contain .gitkeep files so Git preserves the empty directories.

## Editing

Open index.html directly in a browser. Edit the HTML in VS Code to replace Your Name and the placeholder content.

Each page includes the same sidebar. Update all copies when changing navigation links. The sidebar stays on the left on desktop and flows above the content on small screens.

Copy the example project or blog post within its folder, change its title and content, and add a link in that folder's index.html.

All links are relative. Root pages use css/style.css; nested pages use ../css/style.css. A project image can use ../images/projects/screenshot.png. Avoid paths starting with / so the site works at a repository URL.

## Hosting

Publish the repository root with GitHub Pages. No build tools are needed. Relative links support URLs such as https://username.github.io/repository-name/.
