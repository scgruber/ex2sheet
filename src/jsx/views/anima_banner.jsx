var React = require('react');
var BoxedSection = require('../components/boxed_section');

var AnimaBanner = React.createClass({
  render: function() {
    return (
      <BoxedSection header  = "Anima Banner"
                    content = { this.props.sheet.animaBanner } />
    );
  }
});

module.exports = AnimaBanner;