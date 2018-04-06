// Your code here


function solution(str)  {
  if (str.length % 2 == 0) {
    let length = str.length;
    for (let i = 0; i <= length/2; i++ ) {
      let holder = str[i];
      reversedStr[i] = str[(length - 1) - i];
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



// Be sure it's the cleanest code you can write!
