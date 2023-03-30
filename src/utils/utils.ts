export const uidGenerator = (): string => {
  return (
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36)
  )
}

export function waitForElm(selector: string): Promise<Element | null> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
}

export function getPdfFile(url: string, bearer: string) {
  fetch(url, {
    method: 'OPTIONS',
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'authorization',
      'Access-Control-Request-Method': 'GET',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      Host: 'api.urssaf.fr',
      Origin: 'https://www.autoentrepreneur.urssaf.fr',
      Pragma: 'no-cache',
      Referer: 'https://www.autoentrepreneur.urssaf.fr/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
    }
  }).then(() =>
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: `Bearer ${bearer}`,
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        Host: 'api.urssaf.fr',
        Origin: 'https://www.autoentrepreneur.urssaf.fr',
        Pragma: 'no-cache',
        Referer: 'https://www.autoentrepreneur.urssaf.fr/',
        'sec-ch-ua':
          '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
      }
    })
      .then((e) => e.json())
      .then((jsonPdf) =>
        chrome.tabs.query(
          {
            url: 'https://www.autoentrepreneur.urssaf.fr/services/espace-personnel/messagerie/messages-recus/*'
          },
          (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id ?? 0, { pdf: jsonPdf })
          }
        )
      )
  )
}
