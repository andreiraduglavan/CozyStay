export const getDatesInRange = (startDateString: string, endDateString: string) => {
  const startDate = new Date(startDateString)
  const endDate = new Date(endDateString)

  const date = new Date(startDate.getTime())

  const dates = []
  
  date.setDate(date.getDate() + 1)

  while (date < endDate) {
    dates.push(new Date(date).toISOString().slice(0, 10))
    date.setDate(date.getDate() + 1)
  }

  return dates
}
