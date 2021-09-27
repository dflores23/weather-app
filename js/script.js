let weatherData;

const $name = $('#name');
const $title = $('#title');
const $temp = $('#temp');
const $feels_like = $('#feels_like');
const $temp_max = $(`#temp_max`);
const $temp_min = $(`#temp_min`);
const $input = $('input[type="text"]');



function handleGetData(event){
  event.preventDefault();

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&units=imperial&appid=3265b9270eb0b322ca55eb99c16183cc`
  }).then(function(data){
      weatherData = data;
      render();
      
    },
    function(error){
      console.log("it didn't work", error);
    }
  )
}
      

function render() {
  $name.text(weatherData.name);
  $temp.text(weatherData.main.temp);
  $feels_like.text(weatherData.main.feels_like);
  $temp_max.text(weatherData.main.temp_max);
  $temp_min.text(weatherData.main.temp_min);
 
  
}

$('form').on('submit', handleGetData);


