var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var Languages = React.createClass({
  render: function() {
    var self = this;
    var possessions = this.props.sheet.possessions;
    var content = (<div>
      {
        Object.keys(this.props.sheet.languages).map(function(languageFamily) {
          return (<div key={ languageFamily } className="language">{ languageFamily + " (" + self.props.sheet.languages[languageFamily].join(", ") + ")" }</div>);
        })
      }
    </div>);
    return (<BoxedSection header  = "Languages"
                          content = { content } />);
  }
});

module.exports = Languages;