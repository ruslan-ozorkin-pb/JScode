// ####Задача 4

// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});
// ```

let some = function(arr, cb) {
    
    if (Array.isArray(arr) && typeof cb === 'function') {

            for (let i = 0; i < arr.length; i++) {

                    if (cb(arr[i], i, arr)) {
                        return true;
                    }
            }
    }
    else {
        throw new Error('The type parameter is not correct!');
    }
return false;
};

let arr = [1, 2, 3];
let result = some(arr, function(item, i, arr) {
    return item > 0;
});

console.log(result);