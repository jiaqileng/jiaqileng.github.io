# Jiaqi Leng's personal website

This repository contains the source for [jiaqileng.github.io](https://jiaqileng.github.io), built with Jekyll and a streamlined version of the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Updating content

- Biography and homepage settings: `_pages/about.md`
- Announcements: `_news/`
- Publications: `_bibliography/papers.bib`
- Software links: `_pages/project.md`
- Site and social settings: `_config.yml`

## Local development

Install Ruby, Bundler, and ImageMagick, then run:

```sh
bundle install
bundle exec jekyll serve
```

The deployment workflow builds the site and publishes `_site` to GitHub Pages on pushes to `master` or `main`.
