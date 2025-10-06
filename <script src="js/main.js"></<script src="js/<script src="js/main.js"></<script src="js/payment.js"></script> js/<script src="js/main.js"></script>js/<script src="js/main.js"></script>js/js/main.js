const location = document.getElementById('location').value;
const courierCharge = location === "Dhaka" ? 70 : 120;

const order = {
  customer, phone,
  product: products[productIndex].name,
  price: products[productIndex].price,
  courier: courierCharge,
  total: products[productIndex].price + courierCharge,
  payment
};
