let a = 20;
let b = 30;
let add = a + b;
console.log ({add});

let subtract = a - b;
console.log({subtract});

let division = a / b;
console.log({division});

let multiply = a * b;
console.log({multiply});

let c = '20';

let looselyEqualTo = a ==c;
console.log({looselyEqualTo});

let strictlyEqualTo = a ===c;
console.log({strictlyEqualTo});

let notEqualTo = a !=c;
console.log({notEqualTo});

let strictlyNotEqualTo = a !==c;
console.log({strictlyNotEqualTo});

a ++
console.log('increment',a);

b --
console.log('decrement',b);

let compound = a +=b;
console.log({compound});

console.log('b',typeof b);

// Implicit coercion
let d = a * c;
console.log({d});
console.log('d- type',typeof d);

// Explicit coercion
let e = Number(c);
console.log(c);
console.log({e});

let f = +c;
console.log({f});
