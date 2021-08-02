const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'





fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(data => {
    console.log(data)
})

function displayResults {

}


