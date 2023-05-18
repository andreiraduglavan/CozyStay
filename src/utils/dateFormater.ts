const months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]

export const dateFormater = (date: string) => {
  const dateObject = new Date(date)
  return `${months[dateObject.getMonth()]} ${dateObject.getDate()}`
}