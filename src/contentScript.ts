import { message } from './serviceWorker'

chrome.runtime.onMessage.addListener((message: message) => {
  if (message.pdf) {
    replaceExistingButton(message.pdf.contenu)
  }
  if (message.url) {
    const bearer = localStorage.getItem('access_token')
    chrome.runtime.sendMessage({
      allInfos: { bearer: bearer, url: message.url }
    })
  }
})

function openInNewTab(file: string) {
  document.getElementById('openInNewTab')?.addEventListener('click', () => {
    const pdfWindow = window.open('')
    if (!pdfWindow) return
    pdfWindow.document.write(
      `<iframe width='100%' height='100%' src='data:application/pdf;base64,${file}'></iframe>`
    )
    pdfWindow.document.body.style.margin = `0`
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    pdfWindow.document.querySelector('html')!.style.overflow = 'hidden'
  })
}

function replaceExistingButton(file: string) {
  const pjContainer = document.querySelector('.pieces_jointes')
  if (document.getElementById('openInNewTab')) return
  if (!pjContainer) return
  const button = `<button type="button" id="openInNewTab" class="btn bouton_fonce" style="margin-left: 3rem">Ouvrir dans un onglet</button>`
  pjContainer.insertAdjacentHTML('beforeend', button)
  openInNewTab(file)
}
