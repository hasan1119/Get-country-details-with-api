const api = 'https://randomuser.me/api/?results=5';
const getUser = () => {
    fetch(api)
        .then(res => res.json())
        .then(data => showUser(data.results))

}

const userContainer = document.getElementById('user-container')
const showUser = (users) => {
    //forEach
    const div = document.createElement('div')
    users.forEach(user => {
        console.log(user.picture.large);
        console.log(user);


        div.innerHTML = `
            <div class="card m-3" style="width: 18rem;">
                    <img src="${user.picture.large}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                        <p class="card-text">Phone: ${user.phone}</p>
                        <p class="card-text">Email: ${user.email}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
           </div>`

    })
    // userContainer.innerHTML=''
    userContainer.textContent = ''
    userContainer.appendChild(div)
    // userContainer.removeChild('div') // tor sathe pore dekha hobe
}