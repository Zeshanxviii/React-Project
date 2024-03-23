// import { useState, useEffect } from "react";


// function useCurrency(currency) {
//     const [data,Setdata]=useState({})

//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((value)=>value.json())
//         .then((value)=>Setdata(value[currency]))
//     },[currency])

//     return data     
// }

// export default useCurrency
const url = 'https://currencyconverter.p.rapidapi.com/availablecurrencies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}