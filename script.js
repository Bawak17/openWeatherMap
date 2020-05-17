
const input = document.getElementById('city');
const button = document.getElementById('submit');

button.addEventListener('click', () => {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=8c58cdf09921e64f4e1a85cf405d8398&units=metric')
.then(resp => resp.json())
.then(data => {
	
	let div = document.createElement('div');
	let weather1 = document.querySelector('#result-api');
	weather1.innerHTML = '';
	div.innerHTML = '<p>' + 'City: ' + '<span>' + data.name + '</span>' + '</p>' +
					'<p>' + 'Country: ' + '<span>' + data.sys.country + '</span>' + '</p>' +
					'<p>' + 'Temperature: '  + '<span>' + data.main.temp + '&#8451;' + 	'</span>' + '</p>' +
					'<p>' + 'Humidity: ' + '<span>' + data.main.humidity + '</span>' + '</p>' +
					'<p>' + 'Weather: ' + '<span>' + data.weather[0].main + '</span>' + '</p>' +
					'<p>' + 'Description: ' + '<span>' + data.weather[0].description + '</span>' + '</p>';		
	

	weather1.appendChild(div).style.border = '1px solid lightblue';
})
.catch(err => document.getElementById('result-api').innerHTML = "error!")
})

