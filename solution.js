// Your code here

function stringReverse(string){
  let beg = "";
  let end = "";
  let reversedStr= "";
  let i;
  let j;
  for (i=0; i<= (string.length-1) / 2; i++){
  beg = string[i] + beg
    j = string.length - 1 - i;
	    if (j>string.length /2){
	    end += string[j];
	    }
	    reversedStr = end + beg;
	    }
	  return reversedStr;
}



// Be sure it's the cleanest code you can write!
