//set your storage items types here
interface chromeExtStorage {
  pjUrl: string
  bearer: string
} // eslint-disable-line

export function getStorageData(): Promise<chromeExtStorage> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError)
      }

      return resolve(result as chromeExtStorage)
    })
  })
}

export function setStorageData(data: chromeExtStorage): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(data, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError)
      }

      return resolve()
    })
  })
}

export function getStorageItem<Key extends keyof chromeExtStorage>(
  key: Key
): Promise<chromeExtStorage[Key]> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError)
      }

      return resolve((result as Storage)[key])
    })
  })
}

export function setStorageItem<Key extends keyof chromeExtStorage>(
  key: Key,
  value: chromeExtStorage[Key]
): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: value }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError)
      }

      return resolve()
    })
  })
}

export async function initializeStorageWithDefaults(
  defaults: chromeExtStorage
) {
  const currentStorageData = await getStorageData()
  const newStorageData = Object.assign({}, defaults, currentStorageData)
  await setStorageData(newStorageData)
}
