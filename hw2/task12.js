// Дан массив с числами: `[1,2,3,-5,-2,1,-4]`
// Найдите сумму положительных элементов массива. В результате вы должны получить число `7`

var array = [1,2,3,-5,-2,1,-4];
var sum = 0;
for (let index = 0; index < array.length; index++) {
    if (array[index] > 0) {
    sum = sum + array[index];}
    
}
console.log(sum);