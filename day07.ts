//1.
function equalObj(a: object, b: object): boolean {
  // cara 1
  // if(Object.keys(a)[0] === Object.keys(b)[0] && Object.values(a)[0] === Object.values(b)[0]){
  //     return true;
  // }else{
  //     return false;
  // }

  // cara 2
  return (
    Object.keys(a)[0] === Object.keys(b)[0] &&
    Object.values(a)[0] === Object.values(b)[0]
  );
}

// cara 3
const isEqual = (a: object, b: object): boolean =>
  Object.keys(a)[0] === Object.keys(b)[0] &&
  Object.values(a)[0] === Object.values(b)[0];

console.log(equalObj({ a: 1 }, { a: 1 }));
console.log(isEqual({ a: 1 }, { a: 1 }));

//2.
function intersection(obj1: any, obj2: any) {
  const result: any = {};
  for (let key in obj2) {
    if (obj1[key] === obj2[key]) {
      result[key] = obj2[key]; // cara menambahkan property baru ke dalam sebuah object. obj2[key] mengandung nilai dari property obj2 yang diakses
    }
  }
  return result;
}
console.log(
  intersection(
    { a: 1, d: 4, c: 3, f: true },
    { a: 1, c: 3, d: 3, e: "hello", b: 2 }
  )
);

//3.
interface IStudent {
  name: string;
  email: string;
}
function mergeData(arr1: IStudent[], arr2: IStudent[]) {
  const temp: IStudent[] = [...arr1, ...arr2];
  console.log(temp);
  const result: IStudent[] = [];
  for (let index = 0; index < temp.length; index++) {
    let isExist: boolean = false;
    for (let resIndex = 0; resIndex < result.length; resIndex++) {
      if (temp[index].email === result[resIndex].email) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      result.push(temp[index]);
    }
  }
  // for (let i = 0; i < result.length; i++) {
  //   if (temp[i].email !== result[i].email) {
  //     result.push(temp[i]);
  //   }
  // }
  console.log(result);
  return result;
}

const data1: IStudent[] = [
  { name: "Edo", email: "edo@mail.com" },
  { name: "Budi", email: "budi@mail.com" },
];

const data2: IStudent[] = [
  { name: "Budi", email: "budi@mail.com" },
  { name: "Riska", email: "riska@mail.com" },
];

console.log(mergeData(data1, data2));

//4.
const switchedObj = (arr: any[]) => {
  const result: any[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    let switched: any = {};
    for (let key in arr[i]) {
      switched = { ...switched, [arr[i][key]]: key };
    }
    result.push(switched);
  }
  return result;
};

const array1 = [
  { name: "David", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Jake", age: 32 },
];
console.log(switchedObj(array1));

//5.
// recursive function adalah fungsi yang memanggil dirinya sendiri
// artinya fungsi ini bekerja layaknya looping
// perulangan akan terjadi sampai kondisi di mana fungsi tersebut tidak dipanggil lagi
const factorial = (num: number) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));

// duplikasi array.map
function dupeMap(data: any[], func: Function) {
  // fungsi ini mengambil dua parameter, yaitu array dan sebuah fungsi
  let result: any[] = []; // variabel untuk menyimpan hasil array baru
  for (let i: number = 0; i < data.length; i++) {
    // gunakan for loop untuk mengakses setiap data pada array
    result.push(func(data[i])); // panggil fungsi "func" untuk setiap data array dan push ke dalam array baru
  }
  return result;
}
const arr1 = [1, 2, 3];
const newData = dupeMap([1, 2, 3], (value: any, index: number) => {
  return value * 2;
});
console.log(newData);

// const newData = duplicateMap(dataArray, callbackFn)
