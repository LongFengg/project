"use sctrict";

if (4 == 4) {
    console.log('Ok!');
}



// if (num < 49){
//     console.log('Error');
// } else if(num>100){
//     console.log('To much!');
// } else{
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

const num = 50;

switch (num){
    case 49:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    case 100:
        console.log('Неверно');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}