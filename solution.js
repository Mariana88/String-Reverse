// Your code here


function solution(str)  {
  if (str.length % 2 == 0) {
    let length = str.length;
    let reversedStr ="";
    for (let i = 0; i <= length/2; i++ ) {
      let holder = str[i];
      let replacer = str[(length - 1) - i];
      // work on this - how to subtract the first character, add the last, the middle, subtract last character and add first
      reversedStr = ;
      console.log (reversedStr);
      reversedStr[(length -1) - i] = holder;
    }
  } 
  else {
    let length = str.length - 1;
    for (let i = 0; i <= length/2; i++ ) {
      let holder = str[i];
      reversedStr[i] = str[(length - 1) - i];
      reversedStr[(length - 1) - i] = holder;
    }
  }
  return reversedStr;
}

solution("blabla");



// Be sure it's the cleanest code you can write!
