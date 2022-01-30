// ####Задача 5

// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
// ```

let reduce = function(arr, cb, startValue) {

    if (Array.isArray(arr) && typeof cb === 'function' && 
            (typeof startValue === 'string' || typeof startValue === 'number')) {
                result = startValue;
                for (let i = 0; i < arr.length; i++) {
                    
                    result = cb(null, result, arr[i], i, arr);

                }
    }
    else {

        throw new Error('The type parameter is not correct!');
    }
return result;
};

let arr = [1, 2, 3];
const acc = 0;

let arrResult = reduce(arr, function(acc, result, item, i, arr) {

        return result + item;
}, acc);

console.log(arrResult);