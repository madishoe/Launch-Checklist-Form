// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let planetUrl = 'https://handlers.education.launchcode.org/static/planets.json';

   fetch (planetUrl).then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
            <ul>
               <li id="planetName">Name: ${json[3].name}</li>
               <li id="planetDiameter">Diameter: ${json[3].diameter}</li>
               <li id="planetStar">Star: ${json[3].star}</li>
               <li id="disEarth">Distance from Earth: ${json[3].distance}</li>
               <li id="numMoons">Number of Moons: ${json[3].moons}</li>
            </ul>
            <img src= ${json[3].image}> 
         `;
      });
   });

   form.addEventListener("submit", function(event) {
     let pilotInput = document.querySelector("input[name=pilotName]");
     let copilotInput = document.querySelector("input[name=copilotName]");
     let fuelInput = document.querySelector("input[name=fuelLevel]");
     let cargoInput = document.querySelector("input[name=cargoMass]");
     if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
     if (isNaN(fuelInput.value) || isNaN(cargoInput.value) || !isNaN(pilotInput.value) || !isNaN(copilotInput.value)){
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
      }

      // Ready to launch
      if((fuelInput.value >= 10000) && (cargoInput.value <= 10000)){
                    
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
               <h2 id="launchStatus" style="color:green;">Shuttle Is Ready for Launch</h2>
               <div id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotInput.value} is ready for launch</li>
                     <li id="copilotStatus">Co-pilot ${copilotInput.value} is ready for launch</li>
                     <li id="fuelStatus">Fuel level high enough for launch</li>
                     <li id="cargoStatus">Cargo mass low enough for launch</li>
                  </ol>
                  `
                  event.preventDefault();
      }

      //Fuel too low
      if((fuelInput.value < 10000) && (cargoInput.value <= 10000)){
                    
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
               <h2 id="launchStatus" style="color:red;">Shuttle not ready for launch</h2>
               <div id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotInput.value} is ready for launch</li>
                     <li id="copilotStatus">Co-pilot ${copilotInput.value} is ready for launch</li>
                     <li id="fuelStatus">Fuel level too low for launch</li>
                     <li id="cargoStatus">Cargo mass low enough for launch</li>
                  </ol>
                  `
                  event.preventDefault();
      } 

      //Cargo too high
      if((fuelInput.value >= 10000) && (cargoInput.value > 10000)){
                    
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
               <h2 id="launchStatus" style="color:red;">Shuttle not ready for launch</h2>
               <div id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotInput.value} is ready for launch</li>
                     <li id="copilotStatus">Co-pilot ${copilotInput.value} is ready for launch</li>
                     <li id="fuelStatus">Fuel level high enough for launch</li>
                     <li id="cargoStatus">Cargo mass too high for launch</li>
                  </ol>
                  `
                  event.preventDefault();
      }

      //Fuel too low and cargo too high
      if((fuelInput.value < 10000) && (cargoInput.value > 10000)){
                    
         const div = document.getElementById("launchStatusCheck");
            div.innerHTML = `
               <h2 id="launchStatus" style="color:red;">Shuttle not ready for launch</h2>
               <div id="faultyItems" style="visibility: visible">
                  <ol id="launchList">
                     <li id="pilotStatus">Pilot ${pilotInput.value} is ready for launch</li>
                     <li id="copilotStatus">Co-pilot ${copilotInput.value} is ready for launch</li>
                     <li id="fuelStatus">Fuel level too low for launch</li>
                     <li id="cargoStatus">Cargo mass too high for launch</li>
                  </ol>
                  `
                  event.preventDefault();
      }

   });
});

// This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
   // <li>Name: ${}</li>
   // <li>Diameter: ${}</li>
   // <li>Star: ${}</li>
   // <li>Distance from Earth: ${}</li>
   // <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">