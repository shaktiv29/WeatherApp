const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getTempratureData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=62739ce35a6209ac43e23c9e7dd3f5bf`);
    const tempInfo = {};

    tempInfo.min_temp = Math.round((response.data.main.temp_min-273.15) * 10) / 10;
    tempInfo.max_temp = Math.round((response.data.main.temp_max-273.15) * 10) / 10;
    $('.max-temprature-c').text(tempInfo.max_temp);
    $('.min-temprature-c').text(tempInfo.min_temp);
    let minTempratureF = (tempInfo.min_temp*1.8)+32;
    let maxTempratureF = (tempInfo.max_temp*1.8)+32;
    minTempratureF = Math.round((minTempratureF*10)/10);
    maxTempratureF = Math.round((maxTempratureF*10)/10);
    $('.max-temprature-f').text(maxTempratureF);
    $('.min-temprature-f').text(minTempratureF);
    $('.max-min-temp').css('display','flex');
    $('.current-weather-data').text(response.data.weather[0].main)
    $('.current-weather').css('display','block');
    let historycities = JSON.parse(localStorage.getItem("CITYHISTORIES"));
      if(!historycities){
        historycities = []
      }
    if ($(".app-input-city").val()!==historycities[Object.keys(historycities).length-1]){
      historycities[Object.keys(historycities).length] = ($(".app-input-city").val())
      localStorage.setItem('CITYHISTORIES',JSON.stringify(historycities));
      }
  } catch (errors) {
    alert("Bad Spelling of city");
  }
};
$(document).ready(function () {
    $(".app-input-submit").on('click',function(e){
      if ($(".app-input-city").val()){
        getTempratureData($(".app-input-city").val())
      }
  });
  $(".app-input-city").on('keyup',(e)=>{
    if (e.keyCode === 13) {
      e.preventDefault();
      $(".app-input-submit").click();
    }
  })
});