import { getPdfFile } from '@utils/utils'
//set your messages types here
export interface message {
  pdf: pdfResponse
  url: string
  allInfos: { bearer: string; url: string }
} // eslint-disable-line

interface pdfResponse {
  contenu: string
  pj: {
    idPieceJointe: number
    nom: string
    type: string
  }
}

chrome.runtime.onMessage.addListener(async (message: message) => {
  if (message.allInfos) {
    getPdfFile(message.allInfos.url, message.allInfos.bearer)
  }
})

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (
      details.url.includes('piecesJointes') &&
      !details.initiator?.startsWith('chrome-extension')
    ) {
      chrome.tabs.query(
        {
          url: 'https://www.autoentrepreneur.urssaf.fr/services/espace-personnel/messagerie/messages-recus/*'
        },
        (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id ?? 0, { url: details.url })
        }
      )
    }
  },
  {
    urls: ['https://api.urssaf.fr/*']
  },
  ['requestBody', 'extraHeaders']
)
