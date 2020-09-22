export const formatDateFromString = str => {
  if (!str || str.length === 0) return "Error parsing string."
  const date = str.split("T")[0]
  const dateSplited = date.split("-")
  const day = dateSplited[2]
  const month = dateSplited[1]
  const year = dateSplited[0]
  return `${day}/${month}/${year}`
}
