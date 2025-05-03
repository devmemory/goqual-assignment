export const commonUtil = {
  getMiliseconds(time: string) {
    const date = new Date(time)

    return date.getTime()
  },
  getInitalTime(newDate?: string) {
    const date1 = newDate ? new Date(newDate) : new Date()

    const current = date1.getTime()

    const date2 = new Date(current - 10 * 60 * 1000)

    return { startTs: this.convertToDateString(date1), endTs: this.convertToDateString(date2) }
  },
  convertToDateString(date: Date) {
    const pad = (num: number) => String(num).padStart(2, '0')

    const year = date.getFullYear()
    const month = pad(date.getMonth() + 1) // Months are 0-indexed
    const day = pad(date.getDate())
    const hours = pad(date.getHours())
    const minutes = pad(date.getMinutes())
    const seconds = pad(date.getSeconds())

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  },
  validateEmail(value: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return regex.test(value)
  },
}
