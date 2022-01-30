// ####Задача 1

// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});
// ```

function forEach(arr, cb) {
    if(Array.isArray(arr) && typeof cb === 'function') {
        for (let i = 0; i < arr.length; i++) {
            cb(arr[i], i, arr);   
        }
    return arr;
    } 
    else {
        throw new Error('The type parameter is not correct');
    }
}

const arr = [1, 2, 3];
let result = forEach(arr, function(item, i, arr) {
    console.log(item, i, arr);
});

console.log(result);