// function compareArrays(arr1, arr2) {
//   return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
// }

// console.log(compareArrays([8, 1, 2], [8, 1, 2]));

// const sum = (a, b) => a + b;

// function memoize(sum, limit) {
//   let memory = [];

//   return function ( a, b ) {
      
//     if (memory.some(argument => compareArrays(argument.arg, [a, b]))) {

//       let resultinMemory = memory.filter(argument => compareArrays(argument.arg, [a, b]));
//       resultinMemory = (resultinMemory[0].result);
//       console.log(`Ответ найден в памяти = ${resultinMemory}`);
//       return resultinMemory;
//     }

//     memory.push({arg: [a, b], result: a + b});

//     if (memory.length > limit) {
//       memory.splice(0, 1);
//     }
//     console.log(memory.length);
//     console.log(`В памяти ответ не найден, ответ раcсчитан функцией sum = ${sum(a, b)}`);
//     return sum( a, b );
//   }

// }

// const mSum = memoize(sum, 3);


// console.log(mSum(1, 9));
// console.log(mSum(2, 8));
// console.log(mSum(3, 7));
// console.log(mSum(4, 6));
// console.log(mSum(4, 6));

function sum(...args) { 
  let sum = 0;
  console.log(sum);
  console.log(args);
  for (let arg of args) sum += arg;
  console.log(sum);
  return sum;
}
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memoize(sum, limit) {
  let memory = [];
  return function ( ...args ) {
    console.log(args);
    console.log(memory.some(argument => compareArrays(argument.arg, args)));
    if (memory.some(argument => compareArrays(argument.arg, args))) {
      console.log(memory[0].result);
      console.log(`Ответ найден в памяти = ${memory[0].result}`);
      return memory[0].result;
    }

    let sumofArray = 0;
    
    for (let arg of args) sumofArray += arg;
    memory.push({arg: args, result: sumofArray});
    console.log(memory);

    if (memory.length > limit) {
      memory.splice(0, 1);
    }
    console.log(memory.length);
    console.log(memory);
    console.log(`В памяти ответ не найден, ответ раcсчитан функцией sum = ${sum(...args)}`);
    return sum( ...args );
  }

}

const mSum = memoize(sum, 3);


console.log(mSum(1, 9));
console.log(mSum(2, 8));
console.log(mSum(3, 7));
console.log(mSum(4, 6));
console.log(mSum(4, 6));