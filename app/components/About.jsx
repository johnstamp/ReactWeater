var React = require('react');

var About =  (props)=>{
  return (
    <div>
         <h1 className="text-center page-title">About</h1>
      <p>
          This app allows you to search for the current weather in a city.

        </p>
        <p>
          Here are some of the tools I used:
          <ul>
            <li><a href="https://facebook.github.io/react">React</a> -This was the Javascript framework used.</li>

              <li>  This app uses the <a href="http://openweathermap.org/api">Open Weather API</a> - I used the Open Weather Map api to
              search for weather data by city name </li>
          </ul>
        </p>

        </div>
  )
};
module.exports=About;
