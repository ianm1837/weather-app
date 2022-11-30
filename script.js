
//get form submit action
let locationSubmit = document.getElementById('location-submit')
let locationSearchInput = document.getElementById('location-search-input')
let searchSuggestionsCard = document.getElementById('search-suggestions-card')
let currentCard = document.getElementById('current-card')
let fiveDayCard = document.getElementById('five-day-card')

locationSubmit.addEventListener('submit', function(event){

	fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + locationSearchInput.value + '&limit=5&appid=8692ec89b9b44fccaa0f21d6d772044d')
	.then((response) => response.json())
	.then((data) => {

		searchSuggestionsCard.innerHTML = ""
		
		for (i = 0; i < data.length; i++){
			searchSuggestionsCard.innerHTML += `<button id="${i}">${data[i].name}, ${data[i].state}</button><br>`
		}
		pickCity(data)
	});
	event.preventDefault()
})

//click city name to get lat an lon
const pickCity = function (data){
	let cityOne = document.getElementById('0')
	let cityTwo = document.getElementById('1')
	let cityThree = document.getElementById('2')
	let cityFour = document.getElementById('3')
	let cityFive = document.getElementById('4')

	if (cityOne){
		cityOne.addEventListener('click', function(){
			locationSearchInput.value = `${data[0].name}, ${data[0].state}`
			searchSuggestionsCard.innerHTML = ""
			getWeather(data[0].lat,data[0].lon)
		})
	}
	if (cityTwo){
		cityTwo.addEventListener('click', function(){
			locationSearchInput.value = `${data[1].name}, ${data[1].state}`
			searchSuggestionsCard.innerHTML = ""
			getWeather(data[1].lat,data[1].lon)
		})
	}
	if (cityThree){
		cityThree.addEventListener('click', function(){
			locationSearchInput.value = `${data[2].name}, ${data[2].state}`
			searchSuggestionsCard.innerHTML = ""
			getWeather(data[2].lat,data[2].lon)
		})
	}
	if (cityFour){
		cityFour.addEventListener('click', function(){
			locationSearchInput.value = `${data[3].name}, ${data[3].state}`
			searchSuggestionsCard.innerHTML = ""
			getWeather(data[3].lat,data[3].lon)
		})
	}
	if (cityFive){
		cityFive.addEventListener('click', function(){
			locationSearchInput.value = `${data[4].name}, ${data[4].state}`
			searchSuggestionsCard.innerHTML = ""
			getWeather(data[4].lat,data[4].lon)
		})
	}
}



//API query for city name
const getWeather = function (lat, lon){
	fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=8692ec89b9b44fccaa0f21d6d772044d')
	.then((response) => response.json())
	.then((data) => {
		currentCard.innerHTML = 
			`<h1>Current Weather Conditions:</h1>

			<h3>${data.weather[0].description}</h3>

			<h3>Temperature: ${data.main.temp} F</h3>

			<h3>Feels Like: ${data.main.feels_like} F</h3>

			<h3>Today's High: ${data.main.temp_max} F</h3>

			<h3>Today's Low: ${data.main.temp_min} F</h3>

			<h3>Humidity: ${data.main.humidity}
			 `

	});
	fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=8692ec89b9b44fccaa0f21d6d772044d')
	.then((response => response.json()))
	.then((data) => {
		console.log(data)
	})
}

//API query with lat and long for current weather


//save history to local storage


//load history from local storage