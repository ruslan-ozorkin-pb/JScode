// ####Задача 9

// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, 
// которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

// ```javascript
// arrayFill('x',5); // [x,x,x,x,x]
// ```

let arrayFill = function(n, x) {

    let arr = [];
    arr.length = x;

    if ((typeof n === 'number' || 'string' || typeof n === 'object' || Array.isArray(n)) && typeof x === 'number') {

        arr.fill(n, 0, x);
    } 
    else {
        throw new Error('The type parameter is not correct!');
    }

return arr;
};

let result = arrayFill('x',5);
console.log(result);