const APIKEY = '5922849924433014';
const busqueda = document.getElementById('busqueda');
const boton = document.getElementById('boton');
const bio = document.getElementById('bio');
let imagenesHTML = '';


    fetch(`https://superheroapi.com/api/${APIKEY}/1`)
    .then(response => response.json())
    .then(data => {

        let bio = document.getElementById('bio')
        bio.innerHTML= `
            <p>${data.name}</p>
            <p>${data.title}</p>
            <p>${data.description}</p>
        `;

        console.log(data)
    })
    .catch(err=>console.log(err))