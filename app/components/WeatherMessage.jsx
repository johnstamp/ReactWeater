var React= require('react');


var WeatherMessage= ({location,temp}) =>{

  return(
    <div>
    <p>It's {temp} degrees in {location}</p>
    </div>
  );
}
module.exports=WeatherMessage
