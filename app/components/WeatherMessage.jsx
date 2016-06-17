var React= require('react');


var WeatherMessage= ({location,temp}) =>{

  return(
    <div>
    <h1 className="text-centre">It's {temp} degrees in {location}</h1>
    </div>
  );
}
module.exports=WeatherMessage
