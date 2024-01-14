export const dateCleanup = (data) => {
  const uiDate = data.date
  const date = new Date(uiDate)
  const eventDate = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const cleanupDate = `${eventDate}-${month}-${year}`
  return cleanupDate
}
