export const delay = (timeout: number, callback: () => void) => {
  const timeoutFunc = setTimeout(() => {
    callback()
    clearTimeout(timeoutFunc)
  }, timeout)
}
