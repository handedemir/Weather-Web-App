
async function showWeather(city) {
    let URL = `https://api.weatherapi.com/v1/forecast.json?key=a29d288b459e4a58bdb45946230209&q=${city}&days=1&aqi=no&alerts=no`;
    await fetch(URL).then(response => {
        return response.json();
    }).then(response => {

        let heading = document.getElementById("heading");
        let temp_card = document.getElementById("temp-card");
        let hum_card = document.getElementById("hum-card");
        let rain_card = document.getElementById("rain-card");
        let temp_c = document.getElementById("temp_c");
        let feelslike_c = document.getElementById("feelslike_c");
        let humidity = document.getElementById("humidity");
        let pressure_in = document.getElementById("pressure_in");
        let wind_kph = document.getElementById("wind_kph");
        let card_2_status = document.getElementById("card-2-status");
        let card_2_png = document.getElementById("card-2-png");

        temp_card.textContent = response.current.temp_c + " C";
        heading.textContent = "Weather of " + response.location.name;
        hum_card.textContent = response.current.humidity;
        rain_card.textContent = response.forecast.forecastday[0].day.daily_chance_of_rain + "%";
        temp_c.innerText = response.current.temp_c + " C";
        feelslike_c.innerText = response.current.feelslike_c + " C";
        humidity.innerText = response.current.humidity;
        pressure_in.innerText = response.current.pressure_in + " in";
        wind_kph.innerText = response.current.wind_kph + " kph";
        card_2_status.innerText = response.current.condition.text;
        card_2_png.src = response.current.condition.icon;


        for(let i = 0 ; i < 24 ; i++)
        {
            let hour = document.getElementById(`${i}-forecast`);
            hour.children[0].textContent = response.forecast.forecastday[0].hour[i].time;
            hour.children[1].children[0].src = response.forecast.forecastday[0].hour[i].condition.icon;
            hour.children[2].textContent = response.forecast.forecastday[0].hour[i].temp_c + " C";
            hour.children[3].textContent = response.forecast.forecastday[0].hour[i].humidity;
            hour.children[4].textContent = response.forecast.forecastday[0].hour[i].pressure_in + " in";
            hour.children[5].textContent = response.forecast.forecastday[0].hour[i].chance_of_rain + "%";
        }
        
    })


}

let search = () => {
    let value = document.getElementById("search-city").value;

    if(value)
    {
        showWeather(value);
    }
}

