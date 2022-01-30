// ####Задача 2

// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```

let filter = function(arr, cb) {
    let array = [];
    if(Array.isArray(arr) && typeof cb === 'function') {

            for (let i = 0; i < arr.length; i++) {
                if (cb(arr[i], i, arr)) {
                    array.push(arr[i]);
                }
            }  
    }                      
    else {
        throw new Error('The type parameter is not correct');
    }
    return array;
};


const arr = [1, 2, 3];
let result = filter(arr, function(item, i, arr) {
    return item > 1;
});

console.log(result);