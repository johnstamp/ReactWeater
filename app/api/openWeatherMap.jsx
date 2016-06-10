var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=54024a644a90ccf1eea84000e56fd2a5&units=imperial';

//54024a644a90ccf1eea84000e56fd2a5

module.exports={
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}+&q=${encodedLocation}`
    return axios.get(requestUrl).then(function(res){

        if(res.data.code&&res.data.message){
          throw new Error(res.data.message);
        }else{
          return res.data.main.temp;
        }
    },function(res){
      throw new Error(res.data.message);
    });
  }
}
