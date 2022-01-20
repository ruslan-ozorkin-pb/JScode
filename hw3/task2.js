// ####Задача 2

// Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым.
//  Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

// ```js
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// ```

function sumOfElements (...n) {
    var sum =0;
    var x = arguments.length;
    for (var i = 0; i < x; i++) {
        if (typeof arguments[i] === 'number') {
        var sum = sum + arguments[i];
        }
    
    else {throw new Error ("all parameters type should be a Number")}

    }
    console.log(sum); 
}

   sumOfElements(1,2,'s',4);




