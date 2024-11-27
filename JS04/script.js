const data = {
  names: 'John',
  age: 17,
};

const {names, age} = data;
console.log(names, age);

// const forJohn = () => {};
// const forJane = () => {};

// const data = {
//   name: 'John',
//   group: 'A',
//   checkWith: forJohn,
// };

// const data2 = {
//   name: 'Jane',
//   group: 'A',
//   checkWith: forJane,
// };

// // 3-4 components
// const runUponLoad = (data) => {
//   data.checkWith();
// };

// const data = [ 
//   {id: 1, name: 'John', age: 17},
//   {id: 2, name: 'Jane', age: 30},
// ];

// const setConfig = {
//   shouldBeChecked: true,
//   dataThatShouldBeChecked: data,
//   functionToCheck: (item) => item.age >= 18,
//   functionToModify: (item) => {
//     delete item.id;
//     return item;
//   },
//   dateToCheck: new Date()
// };

// console.log(setConfig.functionToCheck(data[0]));


// 1. <18 for car space
// 2. if not set hasCar -> false
// 3. hasCar remove at the end

// const data = [
//   {id: 1, name: 'John', age: 17}, //0
//   {id: 2, name: 'Jane', age: 30}, //1
//   {id: 3, name: 'Jim', age: 20} //2
// ];

// const data2 = [
//   {id: 1, hasCar: true},
//   {id: 3, hasCar: true},
//   {id: 2, hasCar: null}
// ];

// const outputFinalData = () => {
//   let result = [];
//   data.forEach((item) => {
//     let hasCar = false;
//     let dataAboutTheCar = data2.find((item2) => item2.id === item.id);
//     if (dataAboutTheCar && dataAboutTheCar.hasCar !== null) {
//       hasCar = dataAboutTheCar.hasCar;
//     }
//     result.push({
//       id: item.id,
//       name: item.name,
//       age: item.age,
//       hasCar: hasCar ? 'Yes' : 'No'
//     });
//   });

//   result = result.filter((item) => {
//     if (item.age >= 18 && item.hasCar === 'Yes') {
//       delete item.id;
//       delete item.hasCar;
//       item.needCarSpace = true;
//       return item;
//     }
//     return false;
//   });
//   return result;
// }

// console.log(
//   outputFinalData()
// );

// const car = {
//   name: 'Toyota',
//   'model': 'Camry',
//   year: 2020,
//   color: 'white',
//   'year-of-manufacture': 2019,
//   '123-dassdas': '123'
// };


// car.name = 'Honda';
// delete car.model;
// delete car['year-of-manufacture'];
// delete car['123-dassdas'];

// console.log(car);


// console.log(
//   car.name,
//   car['model'],
//   car['year-of-manufacture'],
//   parseInt(car['123-dassdas']),
//   car.year.toString(),
//   (car.year + parseInt(car['123-dassdas']))
// );