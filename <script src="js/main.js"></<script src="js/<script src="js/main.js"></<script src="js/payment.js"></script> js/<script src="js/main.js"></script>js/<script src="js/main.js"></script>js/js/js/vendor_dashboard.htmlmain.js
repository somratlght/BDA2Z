function renderVendorProducts() {
  vendorDiv.innerHTML = '';
  vendorProducts.forEach((p,i) => {
    vendorDiv.innerHTML += `<div class="product">
      <b>${p.name}</b> - ৳${p.price} - স্টক: ${p.stock} - ক্যাটাগরি: ${p.category}<br>
      <img src="${p.image}" alt="${p.name}"><br>
      <button onclick="removeProduct(${i})">মুছে ফেলুন</button>
      <button onclick="updateStock(${i})">স্টক আপডেট</button>
    </div>`;
  });
}

function removeProduct(index) {
  if(confirm('আপনি কি প্রোডাক্টটি মুছে ফেলতে চান?')){
    vendorProducts.splice(index,1);
    renderVendorProducts();
  }
}

function updateStock(index) {
  const newStock = prompt('নতুন স্টক লিখুন:', vendorProducts[index].stock);
  if(newStock !== null){
    vendorProducts[index].stock = parseInt(newStock);
    renderVendorProducts();
  }
}

addProductForm.addEventListener('submit', function(e){
  e.preventDefault();
  const pname = document.getElementById('pname').value;
  const pprice = parseInt(document.getElementById('pprice').value);
  const pstock = parseInt(document.getElementById('pstock').value);
  const pcategory = document.getElementById('pcategory').value;
  const pimage = document.getElementById('pimage').value;

  vendorProducts.push({ name:pname, price:pprice, stock:pstock, category:pcategory, image:pimage });
  renderVendorProducts();
  this.reset();
});

renderVendorProducts();
