# URSSAF-new-tab-file
Extension chrome qui permet d'ouvrir les pièces jointes des messages reçus sur le site de l'[URSSAF](https://www.autoentrepreneur.urssaf.fr "URSSAF") dans un nouvel onglet au lieu de devoir les télécharger.
***
![Sans l'extension](https://github.com/Medaillek/URSSAF-new-tab-file/blob/main/images/Image%201.png)
***
![Avec l'extension](https://github.com/Medaillek/URSSAF-new-tab-file/blob/main/images/Image%202.png)

<br>

# Installer l'extension

1. `git clone https://github.com/Medaillek/URSSAF-new-tab-file.git`
2. `cd ./URSSAF-new-tab-file`
3. `npm run build`
4. Ouvrez votre navigateur et accédez à [chrome://extensions/](chrome://extensions/)
5. En haut à droite de l'écran, **activez le mode développeur**.
6. Cliquez sur **Chargez l'extension non empaquetée**.
7. Recherchez et sélectionnez le dossier **/dist/** qui vient de se créer dans le dossier **/URSSAF-new-tab-file/**.
<br>
<br>

# Tester l'extension
1. Rendez vous sur le site de l'[URSSAF](https://www.autoentrepreneur.urssaf.fr/) et connectez-vous.
2. Rendez vous sur l'espace **Gérer mon auto-entreprise**.
3. Allez dans **Messages reçus** et **ouvrez un message**.
4. Si tout fonctionne bien, un bouton nommé **Ouvrir dans un nouvel onglet** apparaîtra à côté de *document.pdf*.
5. Cliquez et voilà ! Plus besoin de télécharger les documents pour pouvoir les visualiser !
