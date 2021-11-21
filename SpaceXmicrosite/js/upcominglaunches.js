const upcomingLaunch = document.querySelector(".upcominglaunch");

const upcomingLaunchUrl = "https://api.spacexdata.com/v4/launches/upcoming";

async function fetchUpcomingLaunch() {
  try {
    const response = await fetch(upcomingLaunchUrl);
    const json = await response.json();

    upcomingLaunch.innerHTML = "";

    const results = json;
    console.log(json);
    const upcomingDetails = results;

    for (let i = 0; i < upcomingDetails.length; i++) {
      console.log(upcomingDetails[i].id[0]);

      function getDate(unixDate) {
        var date = new Date(unixDate * 1000);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }

      upcomingLaunch.innerHTML += `
      <ul class="launchtimeline">
      <li class="launchdate">
            
     <h3>${getDate(upcomingDetails[i].date_unix)}</h3>
       
      </li>
      <li class= "launchevents">
        <ul class="launchevents-detail">
        <h3>Name: ${upcomingDetails[0].name} </h3>
        
        <p>Flight nr: ${upcomingDetails[i].flight_number}</p>
    
   
   
    
      <p>Status: ${upcomingDetails[i].details}</p>  
       
     
      
<a target class="button10" href="${
        upcomingDetails[i].links.wikipedia
      }">Read More</a>
</div>
</div>

`;
    }
  } catch (error) {
    console.log(error);
    upcomingLaunch.innerHTML = message("error", error);
  }
}

fetchUpcomingLaunch();
