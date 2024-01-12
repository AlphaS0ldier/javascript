const url = 'https://car-data.p.rapidapi.com/cars?limit=10&page=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00ba803fcamsh5399c242ae2756ap109ea9jsncd1f07edcde4',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

export async function getApi(){try {
	const response = await fetch(url, options);
	const result = await response.json();
    return result;
} catch (error) {
	console.error(error);
}
}

console.log(await getApi());