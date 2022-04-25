const apiUrl = 'https://swapi.dev/api/people';
const apiUrlF = 'https://swapi.dev/api/films';
const apiUrlP = 'https://swapi.dev/api/planets';
let characters = [];
let details = document.getElementById("details");

document.getElementById("characters").addEventListener("click", getCharacters => {
    let tab = "";
    if (getCharacters.target.id === "characters") {
        console.log("characters button pressed");        
        fetch(apiUrl)
        .then (response => response.json())
        .then (r => r.results.forEach(element => {
            tab +=
            `<div class="container-fluid">  
                <div>Name: ${element.name}</div>
                <div>Height: ${element.height}</div>
                <div>Mass: ${element.mass}</div>
                <div>Birth Year: ${element.birth_year}</div>
            </div><br/> `
            details.innerHTML = tab;
        }))
    }
});

document.getElementById("films").addEventListener("click", getFilms => {
    let tab = "";
    if (getFilms.target.id === "films") {
        console.log("films button pressed");        
        fetch(apiUrlF)
        .then (response => response.json())
        .then (r => r.results.forEach(element => {
            tab +=
            `<div class="container">  
                <div>Title: ${element.title}</div>
                <div>Number of the Episode: ${element.episode_id}</div>
                <div>Director: ${element.director}</div>
                <div>Release Date: ${element.release_date}</div>
            </div><br/> `
            details.innerHTML = tab;
        }))        
    }
});

document.getElementById("planets").addEventListener("click", getPlanets => {
    let tab = "";
    if (getPlanets.target.id === "planets") {
        console.log("planets button pressed");        
        fetch(apiUrlP)
        .then (response => response.json())
        .then (r => r.results.forEach(element => {
            tab +=
            `<div class="container">  
                <div>Name: ${element.name}</div>
                <div>Diameter: ${element.diameter}</div>
                <div>Terrain: ${element.terrain}</div>
                <div>Population: ${element.population}</div>
            </div><br/> `
            details.innerHTML = tab;
        }))        
    }
});
