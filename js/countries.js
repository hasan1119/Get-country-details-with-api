function getCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => showCountries(data))
}

const countryContainer = document.getElementById('country-container')


function showCountries(countries) {
    countries.forEach(country => {

        // console.log(country);


        const div = document.createElement('div')


        div.innerHTML = `
            <div class="card m-2" style="width: 14rem; height:300px">
                    <img src="${country.flag}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${country.name} </h5>
                        <p>City: ${country.capital}
                        <button onclick="details('${country.name}')" href="#" class="btn d-block mt-3  btn-primary">Details</button>
                    </div>
           </div>`



        //  countryContainer.textContent = ''
        countryContainer.appendChild(div)


    });
}

const detailsContainer = document.getElementById('detailsContainer')

function details(country) {
    const api = `https://restcountries.eu/rest/v2/name/${country}`
    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const div = document.createElement('div')
            div.innerHTML = `
            <img width='250px' src='${data[0].flag}'>
            <h3>Name: ${data[0].name}</h3>
            <p>Population: ${data[0].population}</p>
            
            `
            detailsContainer.innerHTML = ''
            detailsContainer.appendChild(div)
        })
}