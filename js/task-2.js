// Задание 2
// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;
const total = 100;
const orderer = 50;

if (orderer > total) {
    console.log('На складе недостаточно твоаров!');
} else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
}