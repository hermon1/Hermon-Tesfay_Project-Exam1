const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

if (id === null) {
  location.href = "/";
}

const orderUrl = "https://api.spacexdata.com/v4/rockets/" + id;

console.log(orderUrl);

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".orderdetail");

idContainer.innerHTML = id;

async function fetchOrders() {
  try {
    const response = await fetch(orderUrl);
    const orderDetail = await response.json();

    console.log(orderDetail);

    createHtml(orderDetail);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

fetchOrders();

function createHtml(orderDetail) {
  console.log(orderDetail.flickr_images[0]);
  detailContainer.innerHTML = ` 
 <div class="order-card">

  <div class="order-image" style="background-image: url('${orderDetail.flickr_images[0]}')"></div>
</div>

  <h3> ${orderDetail.name} Space Rocket Poster(unframed)</h3>

  <p>${orderDetail.description}</p>  
  <p>Size: 70x50 cm</p>
  <p>Price: 20$</p>
  <a target class="button8" href="order.html?id=${orderDetail.id}">Add To Cart</a>
 
  `;
}
