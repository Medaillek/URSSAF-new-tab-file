![Chrome Web Store](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png)

<br>

# URSSAF-new-tab-file
Extension chrome qui permet d'ouvrir les pièces jointes des messages reçus sur le site de l'[URSSAF](https://www.autoentrepreneur.urssaf.fr "URSSAF") dans un nouvel onglet au lieu de devoir les télécharger.
***
![Sans l'extension](https://github.com/Medaillek/URSSAF-new-tab-file/blob/main/images/Image%201.png)
***
![Avec l'extension](https://github.com/Medaillek/URSSAF-new-tab-file/blob/main/images/Image%202.png)

<br>

# Installer l'extension

## Automatiquement 

1. Télécharger l'extension depuis le [Chrome Web Store](https://chrome.google.com/webstore/detail/urssaf-pr%C3%A9visu-documents/diaeaphmpocbgkfiajecehlpkidaaolh) 

<br>

## Manuellement 

1. Télécharger le dépôt : Code -> Download ZIP
2. Extraire le dossier **/dist/** de l'archive et le placer sur le bureau *(par exemple)*
3. Ouvrez votre navigateur et accédez à [chrome://extensions/](chrome://extensions/)
4. En haut à droite de l'écran, **activez le mode développeur**.
5. Cliquez sur **Chargez l'extension non empaquetée**.
6. Recherchez et sélectionnez le dossier **/dist/** précédemment sorti de l'archive.

<br>

# Modifier localement l'extension

1. `git clone https://github.com/Medaillek/URSSAF-new-tab-file.git`
2. `cd ./URSSAF-new-tab-file`
3. `npm i`
4. `npm run dev`

<br>


# Tester l'extension
1. Rendez vous sur le site de l'[URSSAF](https://www.autoentrepreneur.urssaf.fr/) et connectez-vous.
2. Rendez vous sur l'espace **Gérer mon auto-entreprise**.
3. Allez dans **Messages reçus** et **ouvrez un message**.
4. Si tout fonctionne bien, un bouton nommé **Ouvrir dans un nouvel onglet** apparaîtra à côté de *document.pdf*.
5. Cliquez et voilà ! Plus besoin de télécharger les documents pour pouvoir les visualiser !
