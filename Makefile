hugo-server:
	cd v3 && hugo server

publish:
	cd v3 && hugo && cd .. && cp -r v3/public/* .

test:
	cd v3 && cd public && python2 -m SimpleHTTPServer 1313
