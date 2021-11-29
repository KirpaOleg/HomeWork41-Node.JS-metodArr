
// // возврат масива с преобразованием такой же длинны
array.map()

// // возврат масива элементов которые соответствует заданому условию (по всему масиву)
array.filter()

// // соединяет два масива
array.сoncat()

// // возвращает первое попавшееся значение
array.find()

// // проверяет все елементы массива и возвращает true\false
array.every()

// // работает с масивои и заменяет его
// // 1 аргумент - елемент замены
// // 2 и 3 - начало и конец индекса замены
array.fill()

// // проверяет есть ли елемент масива и возвращает true\false
array.includes()

// // проверяет массив ли ето и возвращает true\false
array.isArray()

// // склеивает елементи массива
array.join()


const clients = [
  {id: 1, name: "Вася", age: 24},
  {id: 2, name: "Петя", age: 14},
  {id: 3, name: "Маша", age: 32},
  {id: 4, name: "Gogi", age: 37},
  {id: 5, name: "Fred", age: 20},
  {id: 6, name: "Alex", age: 18},
  {id: 7, name: "Vova", age: 17},
];

clients.filter((el) => {
  if (el.age > 20) {
    return el
  }
  console.log(el);
});



