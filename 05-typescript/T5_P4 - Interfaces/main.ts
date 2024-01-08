const url = 'https://amazon-merchant-data.p.rapidapi.com/get-asin?gtin=0194252099537&country=de';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00ba803fcamsh5399c242ae2756ap109ea9jsncd1f07edcde4',
		'X-RapidAPI-Host': 'amazon-merchant-data.p.rapidapi.com'
	}
};
(async () => {
	try {
		let response = await fetch(url, options);
		let result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
})()