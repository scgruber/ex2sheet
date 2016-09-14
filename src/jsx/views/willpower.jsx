var React = require('react');
var Dots = require('../components/dots');
var BoxedSection = require('../components/boxed_section');

var Willpower = React.createClass({
  render: function() {
    var content = (<div id="willpower-rating">
      <Dots width={ 10 } rating={ this.props.willpower.rating } channeled={ this.props.willpower.channeled }/>
    </div>);
    return (<BoxedSection header  = "Willpower"
                          content = { content } />);
  }
});

module.exports = Willpower;