
const url = "https://restcountries.com/v2/all"

const countryList = document.querySelector('.countries-list')
const totalNumOfCountries = document.querySelector('.totalNumberOfCountries')

fetch(url)
  .then(response => response.json()) 
  .then(data => {

    totalNumOfCountries.textContent = `Total Number of countries: ${data.length}`
    
   data.forEach(element => {
    const countryName = element.name
    const countryDiv = document.createElement('div')
    countryDiv.textContent = countryName;
    countryDiv.classList.add('country')
    countryList.appendChild(countryDiv);
    });
  })
  .catch(error => console.error(error)) 

