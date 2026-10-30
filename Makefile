THEME_LAYOUT := v3/themes/hugo_resume/layouts/_default/baseof.html
RESUME_HTML := v3/public/blog/resume/index.html

hugo-server:
	cd v3 && hugo server

publish:
	test -f $(THEME_LAYOUT) || { echo "publish: missing $(THEME_LAYOUT)"; exit 1; }
	hugo version
	rm -rf v3/public
	cd v3 && hugo
	test -s $(RESUME_HTML)
	grep -q 'id="page-top"' $(RESUME_HTML)
	cp -r v3/public/* .

test:
	cd v3 && cd public && python3 -m http.server 1313
