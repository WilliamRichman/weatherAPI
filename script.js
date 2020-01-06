const weather = "https://api.openweathermap.org/data/2.5/weather?zip=85140,us&units=imperial&appid=15976d84b292c4206f0104225b002459"
const myURL = ""


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?zip=85140,us&units=imperial&appid=15976d84b292c4206f0104225b002459",
    method: "GET"
}).then(function (response) {
    console.log(response)
    console.log(response.name)
    console.log(response.main.temp)
    console.log(response.main.humidity)
    console.log(response.wind.speed)


    const name = response.name
    console.log("This is the " + name)

    const temp = response.main.temp
    console.log("This is the " + temp)

    const humid = response.main.humidity
    console.log("The relative humidity is currently " + humid + "%")

    const winds = response.wind.speed
    console.log("The wind is blowing like you mom at " + winds + " MPH")

    $("#display").append(name);
    $("#display").append(temp);
    $("#display").append(humid);
    $("#display").append(winds);



});


//function to get the current date and time from system




/* $(document).ready(function () {
    console.log("ready!");
}); */
