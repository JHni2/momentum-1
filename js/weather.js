const API_KEY = "09fe6391d0e66b05998340b3935fc2f4"


function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  console.log("You live in", lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      const name = data.name
      city.innerText = data.name
      weather.innerText = `${Math.round(data.main.temp)}`+ "℃" + " @"
    }) //실제로 url에 갈 필요 없이 JS가 대신 url 부른다
}
function onGeoError() {
  alert("Can't find you. No weather for you")
}

//getCurrentPosition(success,error)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //You live in 35.8350848 128.7520256