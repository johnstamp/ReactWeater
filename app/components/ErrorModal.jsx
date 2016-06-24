var React = require('react');

var ErrorModal = React.createClass({

  componentDidMount: function () {
  var modal = new Foundation.Reveal($('#error-modal'));
  modal.open();
},
propTypes: {
  title:React.PropTypes.string,
  messsage: React.PropTypes.string.isRequired
},
  render:function(){
    var {title,message} = this.props;
    return (
    <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p> {message}</p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </div>
    );
  }
});



module.exports = ErrorModal;
