// Arrays

let numbers = [1, 2, 3, 4, 5];
const numbers1 = new Array(1, 2, 3, 4, 5);
let names = ['John', 'Bob', 'Alice', 'Eve'];
const names1 = new Array('John', 'Bob', 'Alice', 'Eve');
const mixed = [1, 'John', 2, 'Bob', 3, 'Alice'];
const mixed2 = [1, 'John', true, {}];



// multi-dimensional array
const newarr = ['John', ['job1', 'job2'], 'Bob', ['job1', 'job2'], 'Alice', ['job1', 'job2'], 'Eve'];


// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];


// console.log(
//   names.filter(name => {
//     if (name.includes('o')) {
//       console.log(name);
//       return true;
//     } else {
//       console.log('Name does not include o');
//       return false;
//     }
//   })
// )

// names.forEach(name => {
//   if (name.includes('o')) {
//     console.log(name);
//   } else {
//     console.log('Name does not include o');
//   }
// })

// console.log(
//   names.map(name => {
//     if (name.includes('o')) {
//       return `Name: ${name} includes o`;
//     } else {
//       console.log('Name does not include o');
//       return `Name: ${name} does not include o`;
//     }
//   })
// )




// const checkAndChangeNameAlice = () => {
//   console.log(names.includes('Alice'));
//   if (!names.includes('Alice'))return;
//   let find = names.find(name => name === 'Alice');
//   if (!find) {
//     console.log('Name not found');
//     return;
//   }
//   console.log(find);
// }

// console.log(names);
// checkAndChangeNameAlice();
// console.log(names);














// const checkAndChangeNameAlice = () => {
//   console.log(names.includes('Alice'));
//   if (names.includes('Alice')) {
//     // let index = names.indexOf('Alice');
//     let index = names.findIndex(name => {name === 'Alice'});
//     console.log(index);
//     if (index > -1) {
//       names[index] = 'Mary';
//     }
//   }
// }

// console.log(names);
// checkAndChangeNameAlice();
// console.log(names);







// names[1] = 'Mary';
// names[6] = 'Mary'; best not to do this
// names.push('Mary');
// names.pop();

// console.log(names);


// let n = names.join(' - ');

// console.log(
//   n.split(' - ')
// )


// (key / value)

// names[0] = 'Mary';
// names1[0] = 'Mary';


// console.log(names[2]);
// console.log(names1);

// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length - 1]);