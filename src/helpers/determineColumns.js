export const determineColumns = (description) => {
  switch (description) {
    case description.length <= 250:
      return "22%"
    case description.length <= 500:
      return "47%"
    case description.length <= 750:
      return "72%"
    default:
      return "85%"
  }
}