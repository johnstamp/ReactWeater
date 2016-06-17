var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap= require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function(){
    return {
      location : 'Dublin',
    };
  },
  getInitialState: function(){
    return{
      isLoading:false
    }
  },
  handleSearch:function (location)
  {
    var that = this;


    console.log('Searching '+location);
    this.setState({isLoading:true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    }
    ,
    function(errorMessage){
          that.setState({isLoading:false});
      alert(errorMessage);


    });
  },


  render : function(){
    var {isLoading,location,temp}=this.state;
    function renderMessage()
    {
      if(isLoading)
      {
          return <h3 className="text-centre">Fetching weather ...</h3>
      }else if(temp && location)
      {
          return <WeatherMessage location={location} temp={temp}/>
      }
    }
    return (
      <div>

          <h1 className=""text-centre>Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    )
  }
});
module.exports=Weather;
