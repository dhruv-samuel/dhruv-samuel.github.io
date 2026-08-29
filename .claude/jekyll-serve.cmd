@echo off
set "PATH=C:\Ruby33-x64\bin;%PATH%"
"C:\Ruby33-x64\bin\bundle.bat" exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
