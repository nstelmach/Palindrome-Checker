function reverseArray(array) {
  let arrBackward = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrBackward.push(array[i]);
  }
  return arrBackward;
}

function palindrome(str) {
  let strArray = str
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");

  let strBackward = reverseArray(strArray);

  for (let i = 0; i < strArray.length; i++) {
    if (!(strArray[i] === strBackward[i])) {
      return false;
    }
  }
  return true;
}
