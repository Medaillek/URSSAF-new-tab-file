!function(){"use strict";var e=localStorage.getItem("access_token");chrome.runtime.onMessage.addListener((function(n){n.pdf&&function(e){var n=document.querySelector(".pieces_jointes");if(!document.getElementById("openInNewTab")&&n){n.insertAdjacentHTML("beforeend",'<button type="button" id="openInNewTab" class="btn bouton_fonce" style="margin-left: 3rem">Ouvrir dans un onglet</button>'),function(e){var n;null===(n=document.getElementById("openInNewTab"))||void 0===n||n.addEventListener("click",(function(){var n=window.open("");n&&(n.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64,".concat(e,"'></iframe>")),n.document.body.style.margin="0",n.document.querySelector("html").style.overflow="hidden")}))}(e)}}(n.pdf.contenu),n.url&&chrome.runtime.sendMessage({allInfos:{bearer:e,url:n.url}})}))}();
//# sourceMappingURL=contentScript.js.map