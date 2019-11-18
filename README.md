# Ionic Framework

OFFICIAL REFERENCE: <https://ionicframework.com/>

## Installing dependencies on Manjaro

1. NPM Installation

sudo pacman -Sy npm

2. NVM Installation

sudo pacman -Sy && sudo pacman -Su && sudo pacman -Syu
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

3. NODE Installation

sudo pacman -Sy && sudo pacman -Su && sudo pacman -Syu
nvm install node --lts
nvm use node

4. IONIC Installation
sudo pacman -Sy && sudo pacman -Su && sudo pacman -Syu
npm install -g ionic

5. GIT Configuration

git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

## Starting a new Project

ionic start

cd IonicProject [Your Project Name]

ionic serve

## Configuração Github

1. ssh-keygen -t rsa -b 4096 -C "johndoe@example.com"

2. eval "$(ssh-agent -s)"

3. ssh-add ~/.ssh/id_rsa

4. cat /home/$USER/.ssh/id_rsa.pub [Copiar a saída desse comando e, em <https://github.com/settings/keys>, adicionar uma nova
chave ssh, através do botão "New SSH Key".

## Creating a new Page

1. ionic generate page tab4 [tab4 is the name of your page]

2. Adicionar as linhas em tabs.page.html`   <ion-tab-button tab="tab4">
                                                <ion-icon name="send"></ion-icon>
                                                <ion-label>Tab Four</ion-label>
                                            </ion-tab-button>`

3. No arquivo tabs.routing.module.ts, adicionar, no índice children, as linhas:
    `{
        path: 'tab4',
        children: [
        {
            path: '',
            loadChildren: () =>
            import('../tab4/tab4.module').then(m => m.Tab4PageModule)
        }
        ]
    }`

5. Para trocar o ícone da nossa tab, basta trocar o name no trecho `<ion-icon name="apps"></ion-icon>`, em tabs.page.html. Uma lista completa de todos os ícones está disponível em <https://ionicframework.com/docs/v3/ionicons/>.

6. Para adicionar uma imagem, inclui-se a mesma no diretório assets/images/image_name.format, e, dentro do projeto, chama-se
passando o caminho completo, por exemplo: `<img src="assets/images/image_name.format" />`.

## Gerando o arquivo de APK

<https://www.youtube.com/watch?v=b5D6zwkQKd4>

npm i -g ionic

npm i -g cordova

npm i -g cordova-res
