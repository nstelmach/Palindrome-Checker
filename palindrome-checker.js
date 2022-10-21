function palindrome(str) {
  let newStr = str
  .replace(/[^a-zA-Z0-9]/g, "")
  .toLowerCase()
  .split("");
  
  let strForward = [];
  let strBackward = [];

  for (let i = 0; i < newStr.length; i++) {
    strForward.push(newStr[i]);
  }

  for (let i = newStr.length-1; i >= 0; i--) {
    strBackward.push(newStr[i]);
  }

 for (let i = 0; i < newStr.length; i++) {
    if (!(strForward[i] === strBackward[i])) {
      return false;
    }
    else {
      continue;
    }
  }
  return true;
}
