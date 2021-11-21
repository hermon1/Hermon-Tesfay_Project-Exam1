const resultsContainer = document.querySelector(".historytimeline");

const historyUrl = "https://api.spacexdata.com/v4/history";

async function fetchHistory() {
  try {
    const response = await fetch(historyUrl);
    const json = await response.json();

    resultsContainer.innerHTML = "";

    const historyDetails = json;
    console.log(json);

    for (let i = 0; i < historyDetails.length; i++) {
      console.log(historyDetails[i].id[0]);

      function getDate(unixDate) {
        var date = new Date(unixDate * 1000);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }

      resultsContainer.innerHTML += `
      <ul class="timeline">
      <li class="historydate">
      
        <h3>${getDate(historyDetails[i].event_date_unix)}</h3>
       
      </li>
      <li class= "historyevents">
        <ul class="historyevents-detail">
        <h3>${historyDetails[0].title} </h3>
       
        
     
   
         
      <p>${historyDetails[i].details}</p>  
   
    
<a target class="button9" href="${
        historyDetails[i].links.article
      }">View More</a>
</div>
</li>
</div>
`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchHistory();
