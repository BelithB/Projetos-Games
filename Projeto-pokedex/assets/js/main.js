const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById ('loadMoreButton')

const maxRecords = 151
const limit = 5
let offset = 0;


    
function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
         pokemonList.innerHTML += pokemons.map(pokemon => ` <a class="poke_data" href="detail.html"> <div  
         <li class="pokemon ${pokemon.type}">
         <span class="number">#${pokemon.number}</span>
         <span class="name">${pokemon.name}</span>

         <div class="detail">
             <ol class="types">
                 ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
             </ol>
             <img src="${pokemon.photo}" 
                 alt="${pokemon.name}">
        </div>
      </li>
      </div>
      </a>
    `).join('')
     })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
}) 

function goBack() {
    window.history.back();
}