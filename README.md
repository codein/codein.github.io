codein.github.io
================

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

## Publishing steps
* regenerate files
```
cd v3
hugo
```

* copy file to root dir
```
cd codein.github.io
cp -r v3/public/* .

```

* test
```
cd v3
cd public
python -m SimpleHTTPServer 8000
```