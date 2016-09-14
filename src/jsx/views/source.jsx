var React = require('react');
var BoxedSection = require('../components/boxed_section');

var Source = React.createClass({
  render: function() {
    var content = (<textarea  id="source-json"
                              value={ this.props.sheetSource }
                              onChange={ this.props.onChange } />);
    return (<BoxedSection header  = "Source"
                          content = { content }
                          warn    = { !this.props.validSource } />);
  }
});

module.exports = Source;