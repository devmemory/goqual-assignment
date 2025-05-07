export const commonUtil = {
  getMiliseconds(time: string) {
    const isoDataString = time.replace(" ", "T") + "Z"
    const date = new Date(isoDataString)

    return date.getTime()
  },
  getCurrentTimeString() {
    const date = new Date()

    return this.convertToDateString(date)
  },
  getInitalTime(newDate?: string) {
    const date1 = newDate ? new Date(newDate) : new Date()

    const current = date1.getTime()

    const date2 = new Date(current - 10 * 60 * 1000)

    return { startTs: this.convertToDateString(date2), endTs: this.convertToDateString(date1) }
  },
  convertToDateString(date: Date, timeOnly = false) {
    const pad = (num: number) => String(num).padStart(2, '0')

    const year = date.getFullYear()
    const month = pad(date.getMonth() + 1) // Months are 0-indexed
    const day = pad(date.getDate())
    const hours = pad(date.getHours())
    const minutes = pad(date.getMinutes())
    const seconds = pad(date.getSeconds())

    if (timeOnly) {
      return `${hours}:${minutes}:${seconds}`
    }

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  },
  validateEmail(value: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return regex.test(value)
  },
}
