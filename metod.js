const arrayBase = [5, 23, -110, 3, 18, 0, 14];

//A. Вывести в консоль только нечетные числа
let resultA = arrayBase.filter((number) => {
  return number < 0;
});
console.log('A >>>', resultA);

//B. Вывести в консоль массив, каждая ячейка которого будет увеличена на 20
let resultB = arrayBase.map((element) => {
  return element + 20;
});
console.log('B >>>', resultB);

//C. Вывести в консоль массив, состоящий только из положительных нечетных чисел
let resultC = arrayBase.filter((number) => {
  if (number % 2 == 0) {
    return false;
	} else {
		return number > 0;
	}
});
console.log('C >>>', resultC);

//D. Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки
let resultD = arrayBase.map((element) => {
 return Math.floor(element % 3);
});
let sum = resultD.reduce((a, b) => a + b)
console.log('D >>>', sum);


//E. Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5
let resultE = arrayBase.find((number) => {
  return number = 5;
});
console.log('E >>>', resultE);

//F. Получить массив без первого элемента, вывести в консоль
let resultF = arrayBase.slice(1); 
console.log('F >>>', resultF);

//G. Отсортировать массив по возрастанию, вывести в консоль
let resultG = arrayBase.sort((a, b) => b - a).reverse();
console.log('G >>>', resultG);


//H. Определить, есть ли в массиве числа, кратные 5
let resultH = arrayBase.filter((number) => {
		return (number % 5 === 0);
});
console.log('H >>>', resultH);


// Создать функцию, которая преобразовывает значения, записанные через дефис в значения, 
// записанные в camelCase, например, "border-radius" в "borderRadius"

// решение для двух слов через дефис
const hyphen = 'border-radius';
const splitStr = hyphen.split('-');
const big = splitStr[1].toString().charAt(0).toUpperCase() + splitStr[1].slice(1);
const newStr = splitStr[0] + big;
console.log('camelCase >>>', newStr);

// решение для двух и более... слов через дефис
const camelCaseOll = hyphen.replace(/-([a-z])/g, (word, index) => index.toUpperCase());
console.log('camelCaseOll >>>', camelCaseOll);