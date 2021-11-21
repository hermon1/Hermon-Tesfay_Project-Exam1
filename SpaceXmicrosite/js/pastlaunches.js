const pastLaunch = document.querySelector(".pastlaunch");

const pastLaunchUrl = "https://api.spacexdata.com/v4/launches/past";

async function fetchPastLaunches() {
  try {
    const response = await fetch(pastLaunchUrl);
    const json = await response.json();

    pastLaunch.innerHTML = "";

    const results = json;
    console.log(json);
    const pastDetails = results;

    for (let i = 0; i < pastDetails.length; i++) {
      console.log(pastDetails[i].id[0]);

      function getDate(unixDate) {
        var date = new Date(unixDate * 1000);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }

      pastLaunch.innerHTML += `
      <ul class="launchtimeline">
      <li class="launchdate">
      
            
     <h3> ${getDate(pastDetails[i].date_unix)}</h3>
       
      </li>
      <li class= "launchevents">
        <ul class="launchevents-detail">

        <h3>Name: ${pastDetails[0].name} </h3>
        
        <p>Flight nr: ${pastDetails[i].flight_number}</p>
    
       
    
   
    
      <p>Status: ${pastDetails[i].details}</p>  
      

      
<a target class="button10" href="${pastDetails[i].links.wikipedia}">Read More</a>
</div>
</div>
`;
    }
  } catch (error) {
    console.log(error);
    pastLaunch.innerHTML = message("error", error);
  }
}

fetchPastLaunches();
