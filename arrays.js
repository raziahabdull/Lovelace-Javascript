// let fruits = ['Mango','Apple','Banana','Orange'];
// let array = new Array(20,30,6,7);

// console.log({fruits});
// console.log({array});

// fruits[1]=3;
// console.log({fruits});

// console.log('length',fruits.length);

// //Array methods
// let addlast = fruits.push('Kiwi')
// console.log({fruits});
// let addFirst = fruits.unshift('Pawpaw')
// console.log({fruits});
// let removeLast = fruits.pop()
// console.log({fruits});
// let removeFisrt = fruits.shift();
// console.log({fruits});

// fruits.splice(1,2);
// console.log({fruits});

// let items = [20,30,40,50,60];
//   //map method
//  let multiply = items.map(item => item *2);
//  console.log({multiply});

//  let addEach = [];
//  let total = 0;
//  // add more items
//   items.forEach(item => {
//     const add = item + 2;
//     console.log({add});
//     addEach.push(add);
//     total += item
//  });
//  console.log({addEach});
//  console.log({total});

// //Destructuring
// let [num1, num2, num3] = items;
// console.log({num1});
// console.log({num2});
// console.log({num3});

function capitalize(sentence){
  let capitalizedWord = sentence.split("").map(word=>word.charAt(0).toUppercase()+word.slice(i).tolowerCase());

}
console.log(capitalize("i love reading fiction"));