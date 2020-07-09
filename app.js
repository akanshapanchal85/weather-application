const express = require("express");
const https = require("https")

const app = express();

app.get("/",function(res, req){

  const url= "https://api.openweathermap.org/data/2.5/weather?appid=23e032d2407f109dee974410e7e0a2a7&units=metric&q=Paris";
  https.get(url,function(response){
    console.log(response.statusCode)
    response.on("data",function(data){
    const weatherData = JSON.parse(data);
    const humidity = weatherData.main.humidity;
    const weatherDes = weatherData.weather[0].description;
    req.write("<h1>The humidity in London is " + humidity +"</h1>");
    req.write("<p>Weather is currently " + weatherDes + "</p>")
    req.send();
    })
  })

})

app.listen(4000,function(){
  console.log("server started at 4000");
});
