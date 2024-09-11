function duplicateEncode(word) {
    let theword = word.toLowerCase();
    let result = "";
    
    for (let i = 0; i < word.length; i++) {
        if (theword.indexOf(theword[i]) !== theword.lastIndexOf(theword[i])) {
            result += ")";
        } else {
            result += "(";
        }
    }
    
    return result;
}
