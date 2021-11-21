const nextLaunch = document.querySelector(".nextlaunch");

const nextLaunchUrl = "https://api.spacexdata.com/v4/launches/next";

async function fetchNextLaunch() {
  try {
    const response = await fetch(nextLaunchUrl);
    const nextLaunchDetails = await response.json();

    console.log(nextLaunchDetails);

    createHtml(nextLaunchDetails);
  } catch (error) {
    console.log(error);
  }
}

fetchNextLaunch();
function getDate(unixDate) {
  var date = new Date(unixDate * 1000);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function createHtml(nextLaunchDetails) {
  nextLaunch.innerHTML = `
  
    <h3>Next Launch:</h3>
  <h3>${nextLaunchDetails.name}</h3>
                        
                                <h3>${getDate(nextLaunchDetails.date_unix)}</h3>
                                `;
}
