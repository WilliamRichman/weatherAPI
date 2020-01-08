const weather = "https://api.openweathermap.org/data/2.5/weather?zip=85140,us&units=imperial&appid=15976d84b292c4206f0104225b002459"



/* const zip = $('#zip', innerHTML).append("inner.HTML This is not working as of now I will need to fix this later"); */

//setup event listener for enter btn


//clear teh from from the first search 
$("#enter").click(function(){
  const zip =  $("#zip").val()
  console.log(zip)
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?zip="+ zip +",us&units=imperial&appid=15976d84b292c4206f0104225b002459",
    method: "GET"
}).then(function (response) {
    console.log(response)
    console.log(response.name)
    console.log(response.main.temp)
    console.log(response.main.humidity)
    console.log(response.wind.speed)

    const long = response.coord.lon
    const lat = response.coord.lat
   
    uv(long, lat)

    const save = response

    const name = response.name
    console.log("This is the " + name)

    const temp = response.main.temp
    console.log("This is the " + temp)

    const humid = response.main.humidity
    console.log("The relative humidity is currently " + humid + "%")

    const winds = response.wind.speed
    console.log("The wind is blowing like you mom at " + winds + " MPH")

    $(".city").append("Your City " + name);
    $(".temp").append("It's currently " + temp + " outside");
    $(".humid").append("Current humidity " + humid + "%");
    $(".winds").append("Current wind speed" + winds);

    localStorage.setItem('storeObj', JSON.stringify(save)); 
});
})

function uv(long, lat){
    const uvLink ="http://api.openweathermap.org/data/2.5/uvi/forecast?appid=15976d84b292c4206f0104225b002459&lat="+ lat + "&lon="+long+"&cnt=0" 
    $.ajax({
        url: uvLink,
        method: "GET"

    }).then(function(response){
        /* console.log(response[0].value) */
        const gotUV = response[0].value
        $(".uv").append("Current UV is " + gotUV);
        
    })
}







//function to get the current date and time from system
let d = new Date();
document.getElementById("date").innerHTML = d;
console.log(d);



/* $(document).ready(function () {
    console.log("ready!");
}); */
