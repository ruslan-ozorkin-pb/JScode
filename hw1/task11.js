//Дан массив с элементами `[2, 5, 9, 15, 0, 4]`. С помощью цикла `for` и оператора `if` выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

var array = [2, 5, 9, 15, 0, 4];
for (let index = 0; index < array.length; index++) {
    if (array[index] > 3 && array[index] < 10)
    console.log (array[index]);
    
}
