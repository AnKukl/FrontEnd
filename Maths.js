// #1
let cost = +prompt('Введите стоимость товара');
let sale_value = 10;
let lower_price = cost * (1 - sale_value / 100);
let sale_value1 = 25;
let lower_price1 = cost * (1 - sale_value1 / 100);
let sale_value2 = 1;
let lower_price2 = cost * (1 - sale_value2 / 100);
let markup = 10;
let hiegher_price = cost + cost * ( markup / 100);
let markup1 = 25;
let hiegher_price1 = cost + cost * ( markup1 / 100);
let markup2 = 1.5;
let hiegher_price2 = cost + cost * ( markup2 / 100);
alert('Стоимость товара со скидкой 10% составляет: ' +lower_price + 'у.е\n' +  'Стоимость товара со скидкой 25% составляет: ' + lower_price1 + 'у.е\n' +  'Стоимость товара со скидкой 1% составляет: ' + lower_price2 + 'у.е\n' +  'Стоимость товара с наценкой 10% составляет: ' + hiegher_price + 'у.е\n' +  'Стоимость товара с наценкой 25% составляет: ' + hiegher_price1 + 'у.е\n' +  'Стоимость товара с наценкой 1.5% составляет: ' + hiegher_price2 + 'у.е\n' );

// #2.1
let product_cost = +prompt('Введите стоимость товара: ');
let sale = 0.05;
if(product_cost >= 100){
    alert('Стоимость товара со скидкой 5%: ' + (product_cost * (1 - sale)));
} else{
    alert('Стоимость товара без скидки: ' + product_cost);
}

// 2.2
let user_number = +prompt('Введите число: ');
if(user_number > 0){
    alert('Ваше число больше нуля.');
} else {
    alert('Ваше число меньше нуля.');
}

// 2.3
let users_number = +prompt('Введите число');
let last_number = users_number % 10;
alert('Псоледняя цифра числа: ' + last_number);