//DOMs
const feedback = document.querySelector('.feedback')
const popBtn = document.querySelector('.population')
const langBtn = document.querySelector('.languages')
const graphTitle = document.querySelector('.graph-title')
const graphWrapper = document.querySelector('#stat')

//---COUNTRIES---
const totalCntries = countries_data.length;
feedback.textContent = `Currently, we have ${totalCntries} countries`

//---LANGUAGES---
const languageCount = {};

for (const country of countries_data) {
  for (const language of country.languages) {
    languageCount[language] = (languageCount[language] || 0) + 1;
  }
}

const sortedLanguages = Object.entries(languageCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

  langBtn.addEventListener('click', () => {
    graphTitle.textContent = `${sortedLanguages.length} Most spoken languages in the world`
    graphWrapper.innerHTML = ""
    for (const [language, count] of sortedLanguages) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.textContent = `${language} ${count.toLocaleString()}`
        graphWrapper.appendChild(bar);
      }
    
})

for (const [language, count] of sortedLanguages) {
  console.log(`${language}: ${count.toLocaleString()}`);
}

//---POPULATIONS---

//world
const totalPop = countries_data.reduce(
  (total, country) => total + country.population,
  0
);

console.log(`World Population is ${totalPop.toLocaleString()}`);

//top 10 sorted cntries
const top10Countries = countries_data
    .slice()
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);

    popBtn.addEventListener('click', () => {
        graphTitle.textContent = `${top10Countries.length} Most populated countries in the world`
        graphWrapper.innerHTML = ""
        for (const country of top10Countries) {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.textContent = `${country.name} ${country.population.toLocaleString()}`;
            graphWrapper.appendChild(bar);
        }
    
    })


for (const country of top10Countries) {
    console.log(`${country.name}: ${country.population.toLocaleString()}`);
}
