export const determineColumns = (description) => {
  if (description.length <= 200) {
    return "22%"
  }
  if (description.length <= 450) {
    return "47%"
  }
  if (description.length <= 700) {
    return "72%"
  }
  return "85%"
}