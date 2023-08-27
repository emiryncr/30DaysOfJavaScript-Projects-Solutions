const massInput = document.querySelector('input[type="text"]');
const planetSelect = document.querySelector('#planets');
const planetImage = document.querySelector('#planet-image');
const resultText = document.querySelector('#result-text');
const result = document.querySelector('.result-circle');
const button = document.querySelector('input[type="button"]');
const content = document.querySelector('.content')
const msg = document.querySelector('.required-msg')

button.addEventListener('click', () => {
   
    const mass = massInput.value;
    const selectedPlanet = planetSelect.value;

 if (isNaN(mass) || massInput.value == '' || selectedPlanet == '') {
      content.innerHTML = `
      <div class="required-msg">
          <h1>MASS and PLANET ARE REQUIRED</h1>
      </div>`
      planetImage.src = '';
      return;
 }
 content.innerHTML = '';

    const planetInfo = {
            earth: {
                gravity: 9.81, // Gravitational constant on Earth (in m/s^2)
                image: 'https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/earth.png?raw=true', // Image link for Earth
            },
            moon: {
                gravity: 1.625, // Gravitational constant on the Moon (in m/s^2)
                image: 'https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/moon.png?raw=true', // Image link for the Moon
            },
            pluto: {
                gravity: 0.62, // Gravitational constant on Pluto (in m/s^2)
                image: 'https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/pluto.png?raw=true', // Image link for Pluto
            },
        };

     const getPlanetInfoDyna = planetInfo[selectedPlanet]
     const weight = (mass * getPlanetInfoDyna.gravity).toFixed(2);
    
    // // Set the image source and result text
    
    var createImgDiv = document.createElement('div')
    createImgDiv.className = "img-content"
    createImgDiv.innerHTML = `
    <img id="planet-image" src="${getPlanetInfoDyna.image}" alt="">
`
 content.appendChild(createImgDiv)
    
    


    var createResultDiv = document.createElement('div');
    createResultDiv.className = "result-content"
    createResultDiv.innerHTML = `
        <h3 id="result-text">The weight of an object on <strong>${selectedPlanet.toUpperCase()}</strong></h3>
        <div class="result-circle">${weight} <span>N</span></div>
   `
content.appendChild(createResultDiv)
    
});