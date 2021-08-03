const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118'

const searchForm = document.getElementsByTagName('form')[0];
const pokemonList = document.querySelector('p')

searchForm.addEventListener('submit', getPokemon)

function getPokemon(e) {
    e.preventDefault();
        console.log('Clicked!')
            fetch(baseUrl)
                .then(result => {
                    return result.json();
                })
                .then(json => {
                    displayPokemon(json)
                })
}
function displayPokemon(data){
    console.log('Inside displayPokemon:', data);
    function data.forEach(results => {
        console.log(results.name);
        let listItem = document.createElement('p');
        listItem.innerText = pokemon.name;
        pokemonList.appendChild(listItem);
        
    })
}






