var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = (props) =>{
  return(
    <div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
    <Link to="/about">About</Link>
    <Link to="/examples">Examples</Link>
    </div>
  );
}
module.exports=Nav;
