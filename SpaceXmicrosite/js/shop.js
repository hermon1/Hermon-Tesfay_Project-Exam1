const resultsContainer = document.querySelector(".shopcontainer");

const shopUrl = "https://api.spacexdata.com/v4/rockets";

async function fetchShop() {
  try {
    const response = await fetch(shopUrl);
    const json = await response.json();

    resultsContainer.innerHTML = "";

    const results = json;
    console.log(json);
    for (let i = 0; i < results.length; i++) {
      console.log(results[i].flickr_images[0]);

      resultsContainer.innerHTML += `<div class="card" order.html?id=${results[i].id}" </div>
    
      <div class="detail">
      <div class="card img" style="background-image: url(${results[i].flickr_images[0]}"></div>
      
      <h2>${results[i].name}</h2>  
      <p>Space Rocket Poster(unframed) </p>
      <p>Size: 70x50 cm</p>
      <p>Price: 20$</p>
<a target class="button9" href="order.html?id=${results[i].id}">See More</a>

</div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchShop();
