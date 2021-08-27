let spinner = document.getElementById("spinner");

// Get Barca Data
let getData = () => {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=barcelona`)
    .then((res) => res.json())
    .then((data) => {
      spinner.style.visibility = "hidden";
      updateData(data.teams);
    });
};

getData();

// Updata Data

let updateData = (data) => {
  let teamInfo = data[0];
  let container = document.getElementById("barca-info");

  let div = document.createElement("div");
  div.classList.add("my-5");

  div.innerHTML = `
  <img src="${teamInfo.strTeamBadge}" class="w-25 mx-auto d-block"/>
  <h2 class="my-2 text-center"> ${teamInfo.strAlternate}  </h2>
  <div class="mt-5"> 
  <p class="text-secondary"> ${teamInfo.strDescriptionEN} </p>
  <h2 class="my-5 text-center">  ${teamInfo.strStadium} </h2>
  <img src="${teamInfo.strStadiumThumb}" class="my-4 d-block img-fluid"/>
  <p class="text-secondary"> ${teamInfo.strStadiumDescription} </p>
  </div>

  <div class="mt-5"> 
  <h2 class="mt-5 text-center"> Banners </h2>
  <div class="row g-4 mt-3">
        <div class="col-md-12">
            <img src="${teamInfo.strTeamBanner}" class="d-block mx-auto"/>
        </div>        
    </div>
    <div class="row g-4 mt-3">
        <div class="col-md-6">
            <img src="${teamInfo.strTeamFanart1}"/>
        </div>     
        <div class="col-md-6">
            <img src="${teamInfo.strTeamFanart2}"/>
        </div>   
        <div class="col-md-6">
            <img src="${teamInfo.strTeamFanart3}"/>
        </div>   
        <div class="col-md-6">
            <img src="${teamInfo.strTeamFanart4}"/>
        </div>      
    </div>
  </div>
  `;

  container.appendChild(div);
};
