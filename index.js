



function fetchPokemon() {
    fetch('httsp://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon))
}

// let response = fetch('httsp://pokeapi.co/api/v2/pokemon?limit=151') {
//   console.log(response);
// }
