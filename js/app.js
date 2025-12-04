// const porsche = 50000;
// const mercedes = 39000;
// const bmw = 25000;
// const buget = 50000;

// if (buget > porsche) {
//     alert(
//         "You are a happy men and rich,the Porsche is waiting for you!"
//     );
// } else if (buget > mercedes) {
//     alert(
//         "You are a happy men and have money on your bank account,the Mercedes is waiting for you!"
//     );
// } else if (buget > bmw) {
//     alert(
//         "You are a happy men, the BMW is waiting for you!"
//     );
// } else {
//     alert(
//         "You dont have enough money:(, go and do your work!"
//     )
// };
// if (buget > 40000) {
//     alert("You can affort to buy you a porsche!")
// () else {
//     alert("No enough money... Go back to work!")
// }
// buget > 40000
//   ? alert("You can affort to buy you a porsche!")
//   : alert("No enough money... Go back to work!");

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 30;
// } else if (stars === 3 || stars === 4) {
//   price = 60;
// } else if (stars === 5) {
//   price = 100;
// }else {
//     console.log('No such amount of stars');
// }

// switch (stars) {
//   case 1:
//   case 2:
//     price = 30;
//     break;

//   case 3:
//   case 4:
//     price = 60;
//     break;

//   case 5:
//     price = 100;
//     break;

//   default:
//     console.log("No such amount of stars");
// }

// console.log(price);
// let message;
// const option = 1;

// switch (option) {
//   case 1:
//     message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//     break;
//   case 2:
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;
//   default:
//     console.log("Вам перезвонит менеджер");
// }

// console.log(message);

// option: 1 - самовывоз, 2 - курьер, 3 - почта;
// "Вы сможете забрать товар завтра с 12:00 в нашем офисе" *
//   -"Курьер доставит заказ завтра с 9:00 до 18:00" *
//   -"Посылка будет отправлена сегодня" *
//   -"Вам перезвонит менеджер";

let language = prompt("Choose your Language: DE, EN, UA, RU, LA");
let month;

switch (language) {
  case 'DE':
    month = "Dezember";
    alert(month);
    break;
  case 'EN':
    month = "December";
    alert(month);
    break;
  case 'UA':
    month = "грудень";
    alert(month);
    break;
  case 'RU':
    month = "декабрь";
    alert(month);
    break;
  case 'LA':
    month = "December";
    alert(month);
    break;
  default:
    alert("We dont have such language sorry.");
}
