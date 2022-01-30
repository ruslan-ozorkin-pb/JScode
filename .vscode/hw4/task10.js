// ####Задача 10

// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```

let reverse = function(arr) {
    let array = [];

    if (Array.isArray(arr) && arr.length !== 0) {

            for (let i = 0; i < arr.length; i++) {
                array.unshift(arr[i]);
            }
    }
    else {
        throw new Error('ERROR:  type of parameter or the array is empty');
    }
return array;
};

const arr = [3,2,1];
let result = reverse(arr);
console.log(result);