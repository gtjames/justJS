function getJson(url) {
	return fetch(url)
		.then(response => {
			if (response.ok) {
				console.log('in then', response);
				return response.json();
			} else {
				throw new Error('not ok');
				console.log('will not run');
			}
		})
		.catch(err => console.log(err) );
}

const baseUrl = 'https://pokeapi.co/api/v2/';
const myList = getJson(baseUrl + 'type/3')
	.then(data => {
		console.log(data);
		buildList(data);
	});

function buildList(data) {
	const myListElement = document.getElementById('list');
	myListElement.innerHTML = data.pokemon
		.map(item => `<li>${item.pokemon.name}</li>`)
		.join('');
}
