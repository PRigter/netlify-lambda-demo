
// Fetch LOCALLY for DEvelopemnt
const fetchWeather = async () => await (await fetch("http://localhost:9000/getusers")).json()

// Fetch on NETLIFY Lambda FUNCTIONS
const fetchWeather = async () => await (await fetch("/.netlify/functions/getusers")).json()


fetchWeather().then(data => {
    console.log(data)
    console.log(data.length)
    console.log(typeof data)
    console.log(data.weather[0].main)
    let weatherDisplay = document.querySelector("#weather")
    weatherDisplay.innerHTML = `<li>${data.weather[0].main}</li>`
    // data.forEach(weather => {
    //     const li = document.createElement("li")
    //     li.className = "list-group-item"
    //     weatherDisplay.appendChild(li)
    // })

    // weatherDisplay.appendChild(data.weather[0].main)
})  


