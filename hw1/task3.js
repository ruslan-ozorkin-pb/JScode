// Перепишите код, заменив оператор `switch` на оператор `if..else`:
// ```js
// switch (val) {
// case 'a':
// console.log( 'a' );
// break;

// case 'b':
// case 'c':
// case 'd':
// case 'e':
// console.log( 'others' );
// break;

// default:
// console.log( 'unknown' );
// }
  
  
  var val = 'c';
  if (val === 'a') {
        console.log('a')
    } else if (val === 'b' || 'c' || 'd' || 'e') {
        console.log('others')
    }
    else {  console.log ('unknown')}
