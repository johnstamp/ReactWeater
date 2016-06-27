var React = require('react');
var ReactDom = require('react-dom');
var ReactDomServer = require('react-dom/server');
var ErrorModal = React.createClass({

  componentDidMount: function () {
      var {title,message} = this.props;


      var modalMarkup=(
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p> {message}</p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </div>
      );
      var $modal = $(ReactDomServer.renderToString(modalMarkup));
      $(ReactDom.findDOMNode(this)).html($modal);

      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
},
propTypes: {
  title:React.PropTypes.string,
  messsage: React.PropTypes.string.isRequired
},
  render:function(){

    return (
      <div>
      </div>
    );

  }
});



module.exports = ErrorModal;
