// 2. Создайте функцию для подсчета стоимости товаров в корзине. На входе функция принимает массив объектов со свойстами name, price, quantity

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

function calculateCartItem(cart: Array<CartItem>) {
  const total = cart.reduce(function (acc, val) {
    return acc + val.price * val.quantity;
  }, 0);
  return total;
}
const cart = [
  { name: 'Бумага', price: 7, quantity: 5 },
  { name: 'Ручка', price: 2, quantity: 11 },
  { name: 'Карандаш', price: 1, quantity: 11 }
];
console.log(`Сумма за заказ составила = ${calculateCartItem(cart)}`);
