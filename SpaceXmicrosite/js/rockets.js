const resultsContainer = document.querySelector(".result");

const url = "https://api.spacexdata.com/v4/rockets";
console.log(url);
async function fetchFlowers() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    resultsContainer.innerHTML = "";

    const results = json;
    console.log(json);
    for (let i = 0; i < results.length; i++) {
      console.log(results[i].images.large[0]);

      resultsContainer.innerHTML += `<div class="card" detail.html?id=${results[i].id}" </div>
    
      <div class="detail">
      <div class="card img" style="background-image: url(${results[i].images.large[0]}"></div>
      
      <h2>${results[i].full_name}</h2>  
    <h2>Location: ${results[i].locality}</h2>
    <h2>20$</h2>
<a target class="button" href="detail.html?id=${results[i].id}">View More</a>

</div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchFlowers();
