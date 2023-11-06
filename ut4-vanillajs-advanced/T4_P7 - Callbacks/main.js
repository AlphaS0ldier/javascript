export function addAllNumbers(array1,array2){
  let result=0;
  let arraysum = array1.concat(array2);
  arraysum.forEach(element => {
    result+=element;
  });
  return result;
}

export function showResult(array1,array2,callback){
  return callback(array1,array2);
}

export function createLine(array){
  return `My tasks list: ${array.join(" ")}`
}

export function showLine(array,callback){
  return callback(array);
}

export function doubleAllNumbers(array){
  return array.map((element)=>element*2);;

}

export function showDoubled(array,callback){
  array = callback(array);
  setTimeout(() => {
    console.log(array)
  }, "6000")
}


export function showResultDelayed(array1,array2,callback){
  let array= callback(array1,array2);
  setTimeout(() => {
    console.log(array)
  }, "3000")
}


export function showLineDelayed(array,callback){
  array=callback(array);
  setTimeout(() => {
    console.log(array)
  }, "2000")
}

console.log(showLineDelayed(["wakeup","cook","eat","shower","travel","go to school","travel","work","go home","sleep"],createLine));