codein.github.io
================

## added new resume entries

A running `make hugo-server` reloads both files below. Leave that server running.

* `v3/content/blog/resume.md` is the long resume at http://localhost:1313/blog/resume/
  * Put each year under the job title held that year.
  * A promotion is a new title. Set its start date, and set the previous title's end date.
  * Under the year, add a parenthetical tech line and `+` bullets.
  * Add a new tool in the Tools column of the knowledge-space table, and a new platform in the Platforms column.
  * Leave the front matter `date` unchanged.
* `v3/data/experience.json` is the homepage block at http://localhost:1313/#experience
  * One object per role, newest first: `role`, `company`, `summary`, `range`.
  * `company` and `summary` are Markdown. End `summary` with a more-link to that year, like `[more...](blog/resume/#2026)`.

## Publishing steps

* `make publish` rebuilds `v3/public` and copies it to the repo root. It fails if `v3/themes/hugo_resume/layouts/_default/baseof.html` is missing, or if the resume page did not render.
* If that layout file is missing, check out the pinned theme commit into the theme directory:

```
git --git-dir=v3/ori.git/modules/themes/hugo_resume --work-tree=v3/themes/hugo_resume checkout -f 4621de4191508127f08d5cb00c3a6cc5d7c43eb1
```

* Stop the Hugo server before `make publish`. Publish deletes `v3/public`.
* `make test` serves the published files at http://127.0.0.1:1313/blog/resume/


## initial setup


* https://gohugo.io/getting-started/quick-start/
* sudo apt-get install hugo
* https://github.com/gohugoio/hugo/releases
* install latest hugo_0.69.2_Linux-ARM64.deb
* https://themes.gohugo.io/hugo-resume/#setup--use
* https://edwardawebb.com/
* cd v3
* hugo server
* hugo
* http://127.0.0.1:1313/