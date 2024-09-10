function alphabetPosition(text) {
  let letter = text.toLowerCase().split("").map((eachLetter) => {
    let letterCode = eachLetter.charCodeAt(0);
    if (letterCode >= 97 && letterCode <= 122) {
      return letterCode - 96
    } else {
      return ""
    }
  }).filter(letterCode => letterCode).join(" ")
  return letter
}
