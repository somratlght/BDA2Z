// ================= মাল্টি-ক্যাটাগরি ফিল্টার =================
function filterByCategory(category){
  const filteredProducts = category ? products.filter(p => p.category === category) : products;
  renderProducts(filteredProducts);
}

function renderProducts(productList){
  const productsDiv = document.getElementById('products');
  const productSelect = document.getElementById('productSelect');
  productsDiv.innerHTML = '';
  productSelect.innerHTML = '';

  productList.forEach((p, i) => {
    productsDiv.innerHTML += `<div class="product">
      <h3>${p.name}</h3>
      <p>মূল্য: ৳${p.price}</p>
      <p>ক্যাটাগরি: ${p.category}</p>
      <img src="${p.image}" alt="${p.name}">
    </div>`;
    productSelect.innerHTML += `<option value="${i}">${p.name} - ৳${p.price}</option>`;
  });
}

// ================= ভেন্ডর প্রোডাক্ট ম্যানেজমেন্ট =================
function addVendorProduct(name, price, stock, category, image){
  vendorProducts.push({ name, price, stock, category, image });
  renderVendorProducts();
}

function renderVendorProducts() {
  const vendorDiv = document.getElementById('vendor-products');
  if(!vendorDiv) return;
  vendorDiv.innerHTML = '';
  vendorProducts.forEach((p,i)=>{
    vendorDiv.innerHTML += `<div class="product">
      <b>${p.name}</b> - ৳${p.price} - স্টক: ${p.stock} - ক্যাটাগরি: ${p.category}<br>
      <img src="${p.image}" alt="${p.name}"><br>
      <button onclick="removeProduct(${i})">মুছে ফেলুন</button>
      <button onclick="updateStock(${i})">স্টক আপডেট</button>
    </div>`;
  });
}

function removeProduct(index){
  if(confirm('আপনি কি প্রোডাক্টটি মুছে ফেলতে চান?')){
    vendorProducts.splice(index,1);
    renderVendorProducts();
  }
}

function updateStock(index){
  const newStock = prompt('নতুন স্টক লিখুন:', vendorProducts[index].stock);
  if(newStock !== null){
    vendorProducts[index].stock = parseInt(newStock);
    renderVendorProducts();
  }
}

// ================= মেডারেটর / অর্ডার মনিটর =================
function renderMonitorOrders(){
  const monitorDiv = document.getElementById('order-list-monitor');
  if(!monitorDiv) return;

  let html = '<h3>অর্ডার তালিকা</h3>';
  orders.forEach((o,i)=>{
    html += `<div class="order">
      ${i+1}. ${o.customer} (${o.phone}) - ${o.product} - মোট: ৳${o.total} (কুরিয়ার: ৳${o.courier}) - পেমেন্ট: ${o.payment}
    </div>`;
  });
  monitorDiv.innerHTML = html;
}

// প্রতি ৫ সেকেন্ডে আপডেট
setInterval(renderMonitorOrders, 5000);
