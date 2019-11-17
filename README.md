# IONIC FRAMEWORK

OFFICIAL REFERENCE: <https://ionicframework.com/>

## INSTALLING DEPENDENCIES ON MANJARO

1. NPM INSTALLATION

sudo pacman -Sy npm

2. NVM INSTALLATION

sudo pacman -Sy && sudo pacman -Su && sudo pacman -Syu
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

3. NODE INSTALLATION

sudo pacman -Sy && sudo pacman -Su && sudo pacman -Syu
nvm install node --lts
nvm use node

4. ELETRON INSTALLATION
sudo pacman -Sy && sudo pacman -Su && sudo pacman -Syu
npm install -g ionic

5. GIT CONFIGURATION

git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

## STARTING A NEW PROJECT

ionic start

cd IonicProject [Your Project Name]

ionic serve



## CRATING A NEW PAGE

## GERANDO O ARQUIVO DE APK

<https://www.youtube.com/watch?v=b5D6zwkQKd4>

npm i -g ionic

npm i -g cordova

npm i -g cordova-res