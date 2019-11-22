function weather(){
    console.log("Hello");
    var city = document.getElementById("value").value;
    //var city = $("#value").val();
    console.log(city);
    var xmlhttp= new XMLHttpRequest();
 
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=eeea50be775f90612cf6d5907e36902d";
    xmlhttp.open("GET", url, true);

    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            var result=this.responseText;
            console.log(result);

          var x = JSON.parse(result);
          console.log(x.main.temp);
          document.getElementById("temp").innerHTML = "<h3><u>Temperature:</u><h3> " + x.main.temp +" F";
          console.log(x.weather.description);
          document.getElementById("speed").innerHTML = "<h3><u>Wind Speed: </u><h3>" + x.wind.speed+" m/s";
          console.log(x.main.humidity);
          document.getElementById("humidity").innerHTML = "<h3><u>Humidity:</u><h3> " + x.main.humidity;
        }
    };
}l



// var f=0;
// var j;
// var end;
// var flag=0;
// function functionality1()
// {
// xhr= new XMLHttpRequest();
// xhr.open("GET","https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c4d6878a172b4856b436d781a6a7638d");
// xhr.send();
// var data;
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      data=JSON.parse(this.responseText);//changing the data into json format
//     if(f==1)
//     {
//         j=j+5;
//     }
//     else{
//         j=0;
//     }
//     end=j+5;
//      for (i = j; i < end; i=i+2) 
//      {        
       
//          if(i==j)
//          {
//              if(flag==0)
//              {
//             $("#container").append(' <div class="f1"><div class="card" style="width: 46rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
//              }
         
//             flag++;
//          }
//          else{
//         $("#container").append(' <div class="f1"><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i+1].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i+1].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
//          }
//         f=1;
//      }
//      document.getElementById("more-news").style.display = "block"; 
//     }
//   };
// }