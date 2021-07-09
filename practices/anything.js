'use strict';

function printEven() {
  for (let i = 0; i<= 10; i++){
    if (i % 2 !== 0){
      console.log(i);
    } else {
      continue;
    }
  }
}

function printUntil(n) {
  for(let i = 0; i <= 10; i++){
    console.log(i);
    if (i == n) {
      break;
    }
  }f
}
printEven()
printUntil(8);