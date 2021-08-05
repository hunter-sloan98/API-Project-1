const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118'
const pokemonList = document.getElementsByTagName('ul')
// document.getElementById('searchBtn').addEventListener('click', displayPokemon)

fetch(baseUrl)
.then(result => {
    return result.json();
})
.then(json => {
    displayPokemon(json)
})

function displayPokemon(data){
    data.preventDefault
        console.log('Clicked!')
            console.log('Inside displayPokemon:', data);
    Object.keys(data).forEach(anything =>{
        let i = Math.floor(Math.random() * 1118);
            let myArray = data.results[i].name
                // console.log(myArray);
                    var z = document.createElement('li'); 
                    z.innerHTML = myArray;
                    document.getElementById('myList').appendChild(z);
})
}
//It may not be right but it works, also I cant figure out how to keep my elements in place with my background so they scale with the viewport and mess up but oh well, it works!!!!!!!