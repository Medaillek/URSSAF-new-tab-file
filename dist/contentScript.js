/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/contentScript.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
var bearer = localStorage.getItem('access_token');
chrome.runtime.onMessage.addListener(function (message) {
  if (message.pdf) {
    replaceExistingButton(message.pdf.contenu);
  }
  if (message.url) {
    chrome.runtime.sendMessage({
      allInfos: {
        bearer: bearer,
        url: message.url
      }
    });
  }
});
function openInNewTab(file) {
  var _document$getElementB;
  (_document$getElementB = document.getElementById('openInNewTab')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('click', function () {
    var pdfWindow = window.open('');
    if (!pdfWindow) return;
    pdfWindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64,".concat(file, "'></iframe>"));
    pdfWindow.document.body.style.margin = "0";
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    pdfWindow.document.querySelector('html').style.overflow = 'hidden';
  });
}
function replaceExistingButton(file) {
  var pjContainer = document.querySelector('.pieces_jointes');
  if (document.getElementById('openInNewTab')) return;
  if (!pjContainer) return;
  var button = "<button type=\"button\" id=\"openInNewTab\" class=\"btn bouton_fonce\" style=\"margin-left: 3rem\">Ouvrir dans un onglet</button>";
  pjContainer.insertAdjacentHTML('beforeend', button);
  openInNewTab(file);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxJQUFNQSxNQUFNLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQztBQUVuREMsTUFBTSxDQUFDQyxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLFVBQUNDLE9BQWdCLEVBQUs7RUFDekQsSUFBSUEsT0FBTyxDQUFDQyxHQUFHLEVBQUU7SUFDZkMscUJBQXFCLENBQUNGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxPQUFPLENBQUM7RUFDNUM7RUFDQSxJQUFJSCxPQUFPLENBQUNJLEdBQUcsRUFBRTtJQUNmUixNQUFNLENBQUNDLE9BQU8sQ0FBQ1EsV0FBVyxDQUFDO01BQ3pCQyxRQUFRLEVBQUU7UUFBRWIsTUFBTSxFQUFFQSxNQUFNO1FBQUVXLEdBQUcsRUFBRUosT0FBTyxDQUFDSTtNQUFJO0lBQy9DLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsU0FBU0csWUFBWUEsQ0FBQ0MsSUFBWSxFQUFFO0VBQUEsSUFBQUMscUJBQUE7RUFDbEMsQ0FBQUEscUJBQUEsR0FBQUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDLGNBQUFGLHFCQUFBLHVCQUF2Q0EscUJBQUEsQ0FBeUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3ZFLElBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pDLElBQUksQ0FBQ0YsU0FBUyxFQUFFO0lBQ2hCQSxTQUFTLENBQUNILFFBQVEsQ0FBQ00sS0FBSyx3RUFBQUMsTUFBQSxDQUNpRFQsSUFBSSxpQkFDNUU7SUFDREssU0FBUyxDQUFDSCxRQUFRLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLE1BQU07SUFDMUM7SUFDQVAsU0FBUyxDQUFDSCxRQUFRLENBQUNXLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBRUYsS0FBSyxDQUFDRyxRQUFRLEdBQUcsUUFBUTtFQUNyRSxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNwQixxQkFBcUJBLENBQUNNLElBQVksRUFBRTtFQUMzQyxJQUFNZSxXQUFXLEdBQUdiLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQzdELElBQUlYLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0VBQzdDLElBQUksQ0FBQ1ksV0FBVyxFQUFFO0VBQ2xCLElBQU1DLE1BQU0sc0lBQThIO0VBQzFJRCxXQUFXLENBQUNFLGtCQUFrQixDQUFDLFdBQVcsRUFBRUQsTUFBTSxDQUFDO0VBQ25EakIsWUFBWSxDQUFDQyxJQUFJLENBQUM7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cnNzYWYtcHJldmlzdS1tYWlsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Vyc3NhZi1wcmV2aXN1LW1haWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91cnNzYWYtcHJldmlzdS1tYWlsLy4vc3JjL2NvbnRlbnRTY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJy4vc2VydmljZVdvcmtlcidcclxuXHJcbmNvbnN0IGJlYXJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKVxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlOiBtZXNzYWdlKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UucGRmKSB7XHJcbiAgICByZXBsYWNlRXhpc3RpbmdCdXR0b24obWVzc2FnZS5wZGYuY29udGVudSlcclxuICB9XHJcbiAgaWYgKG1lc3NhZ2UudXJsKSB7XHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIGFsbEluZm9zOiB7IGJlYXJlcjogYmVhcmVyLCB1cmw6IG1lc3NhZ2UudXJsIH1cclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gb3BlbkluTmV3VGFiKGZpbGU6IHN0cmluZykge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuSW5OZXdUYWInKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwZGZXaW5kb3cgPSB3aW5kb3cub3BlbignJylcclxuICAgIGlmICghcGRmV2luZG93KSByZXR1cm5cclxuICAgIHBkZldpbmRvdy5kb2N1bWVudC53cml0ZShcclxuICAgICAgYDxpZnJhbWUgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgc3JjPSdkYXRhOmFwcGxpY2F0aW9uL3BkZjtiYXNlNjQsJHtmaWxlfSc+PC9pZnJhbWU+YFxyXG4gICAgKVxyXG4gICAgcGRmV2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gYDBgXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgcGRmV2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSEuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VFeGlzdGluZ0J1dHRvbihmaWxlOiBzdHJpbmcpIHtcclxuICBjb25zdCBwakNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZXNfam9pbnRlcycpXHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuSW5OZXdUYWInKSkgcmV0dXJuXHJcbiAgaWYgKCFwakNvbnRhaW5lcikgcmV0dXJuXHJcbiAgY29uc3QgYnV0dG9uID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwib3BlbkluTmV3VGFiXCIgY2xhc3M9XCJidG4gYm91dG9uX2ZvbmNlXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogM3JlbVwiPk91dnJpciBkYW5zIHVuIG9uZ2xldDwvYnV0dG9uPmBcclxuICBwakNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGJ1dHRvbilcclxuICBvcGVuSW5OZXdUYWIoZmlsZSlcclxufVxyXG4iXSwibmFtZXMiOlsiYmVhcmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJwZGYiLCJyZXBsYWNlRXhpc3RpbmdCdXR0b24iLCJjb250ZW51IiwidXJsIiwic2VuZE1lc3NhZ2UiLCJhbGxJbmZvcyIsIm9wZW5Jbk5ld1RhYiIsImZpbGUiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBkZldpbmRvdyIsIndpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNvbmNhdCIsImJvZHkiLCJzdHlsZSIsIm1hcmdpbiIsInF1ZXJ5U2VsZWN0b3IiLCJvdmVyZmxvdyIsInBqQ29udGFpbmVyIiwiYnV0dG9uIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==