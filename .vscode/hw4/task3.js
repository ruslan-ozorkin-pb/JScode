// ####Задача 3

// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// every(arr, function(item, i, arr) {});
// ```

let every = function(arr, cb) {
    if (Array.isArray(arr) && typeof cb === 'function') {

        for (let i = 0; i < arr.length; i++) {
            if (!cb(arr[i], i, arr)) {
                return false;
            }
        }

    }
    else {
        throw new Error('The type parameter is not correct!');
    }
    return true;
}
let arr = [1, 2, 3];
let result = every(arr, function(item, i, arr) {
    return item > 1;
});
console.log(result);