@echo off
wsl.exe -d Ubuntu -- bash -c "source ~/.nvm/nvm.sh && rsync -a --exclude node_modules --exclude dist --exclude .astro --exclude .git --exclude _site /mnt/c/Users/ASUS/Desktop/portfolio-site/ ~/portfolio-site/ && cd ~/portfolio-site && npm run dev -- --host 0.0.0.0 --port 4321"
