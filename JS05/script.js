const data = { name: 'João', age: 25, city: 'São Paulo' };
const namesList = ['João', 'Maria', 'Lucas', 'Matheus', 'Gabriel'];

namesList.forEach((value, index) => {
  console.log(value, 1);
});

namesList.map((value, index) => {
  console.log(value, 2);
});

for (const key in data) {
  // console.log(key);
  // console.log(data[key]);
}

Object.entries(data).forEach(([key, value]) => {
  // console.log(key);
  // console.log(value);
});

for (const value of namesList) {
  // console.log(value);
}





let i = 0;

do {
  // console.log(`Wellome ${i}`);
  i++;
} while (i < 1000);


while (i < 1000) {
  // console.log(`Wellome ${i}`);
  i++;
}

for (;i < namesList.length;) {
  // console.log(`Wellome ${namesList[i]}`);
  i++;
}

for (let i = 0; i < namesList.length; i++) {
  // console.log(`Wellome ${namesList[i]}`);
}

let pageName = 'Home';

// switch (pageName) {
//   case 'Home':
//     console.log('You are in Home page');
//   break;
//   case 'About':
//     console.log('You are in About page');
//   break;
// }

// if (pageName !== 'Home' && pageName !== 'About') {
//   console.log('You are in Home page');
// } else if (pageName === 'About') {
//   console.log('You are in About page');
// }