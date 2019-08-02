import './index.scss'
import './components/logo/logo.svg'

const myArray=['asdf','Sara','Said',5];
let Arr2 = myArray.map(item => item);
console.log('--------------------');
console.log(Arr2);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log('--------------------');
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

let n = { x, y, ...z };
console.log('--------------------');
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }