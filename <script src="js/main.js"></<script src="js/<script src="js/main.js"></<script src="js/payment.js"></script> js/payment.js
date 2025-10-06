// ================= পেমেন্ট অপশন =================
// HTML এ select / radio button থেকে নেওয়া হবে
// উদাহরণ HTML:
/* 
<select id="paymentMethod">
  <option value="bkash">বিকাশ: 01777140602</option>
  <option value="nagad">নগদ: 01864935729</option>
  <option value="cod">Cash on Delivery</option>
</select>
*/

// অর্ডার সাবমিশনের সময় পেমেন্ট সংরক্ষণ
const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', function(e){
  e.preventDefault();

  const customer = document.getElementById('customer').value;
  const phone = document.getElementById('phone').value;
  const productIndex = document.getElementById('productSelect').value;
  const location = document.getElementById('location').value;

  // কুরিয়ার চার্জ
  const courierCharge = location === "Dhaka" ? 70 : 120;

  // পেমেন্ট নেওয়া
  const payment = document.getElementById('paymentMethod').value;

  const order = {
    customer,
    phone,
    product: products[productIndex].name,
    price: products[productIndex].price,
    courier: courierCharge,
    total: products[productIndex].price + courierCharge,
    payment // পেমেন্ট তথ্য এখানে সংরক্ষিত
  };

  orders.push(order);
  renderOrders(); // অর্ডার লিস্ট আপডেট
  this.reset();
});
