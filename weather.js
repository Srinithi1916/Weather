function displayresult(){
  var city=document.getElementById("city").value;
  var apikey='f4cf4a9ef8bdf856ab9d5ad91fe0d59f';
  fetch ('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
  .then(response=>response. json())
  .then (data => {
    var t = data['main']['temp']
    document.getElementById("output").innerHTML=t;
    })
    }