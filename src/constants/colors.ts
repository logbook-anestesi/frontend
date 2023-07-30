export const colors = {
  primaryPurple: "#662D91",
  lightPurple: "#662D91",
  darkGrey: "#8B8B8B",
  lightGrey: "#EAEAEA",
  lightYellow: "rgba(249, 191, 36, 0.3)",
  lightRed: "rgba(246, 106, 57, 0.3)",
  primaryRed: "#EB5757",
  primaryYellow:"#F9BF24",
  primaryGreen:"#7CB937",
  white: "#FFFFFF",
  orange: "#F66A39",
};

export const getCompetenceColor = (competenceLevel: string) => {
    if (competenceLevel.toLowerCase() == "pembekalan"){
      return colors.primaryRed
    } else if (competenceLevel.toLowerCase() == "magang"){
      return colors.primaryYellow
    } else if (competenceLevel.toLowerCase() == "mandiri"){
      return colors.primaryGreen
    } else {
      return "black"
    }
};
