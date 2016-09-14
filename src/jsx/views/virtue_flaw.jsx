var React = require('react');
var Dots = require('../components/dots');
var BoxedSection = require('../components/boxed_section');
var FieldList = require('../components/field_list');

var VirtueFlaw = React.createClass({
  render: function() {
    return (
      <BoxedSection header  = "Virtue Flaw"
                    content = { <FieldList fields={ this.props.sheet.virtueFlaw } /> } />
    );
  }
});

module.exports = VirtueFlaw;