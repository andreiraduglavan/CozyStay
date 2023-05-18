export const compareDates = (startDateString: string, endDateString: string) => {
  const startDate = new Date(startDateString)
  const endDate = new Date(endDateString)


  if (startDate < endDate) {
    return true
  } else {
    return false
  }
}