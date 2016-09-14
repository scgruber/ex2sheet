var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');
var FieldList = require('../components/field_list');

var Backgrounds = React.createClass({
  renderBackground: function(background) {
    return (<div key={ background.kind } className="background">
      <div className="background-type">{ background.type }</div>
      <div className="background-kind">{ background.kind }</div>
      <div className="background-dots"><Dots rating={ background.rating }/></div>
      <div className="background-fields">
        <FieldList fields={ Util.rejectKeys(background, ['type','kind', 'rating','attune'])} />
      </div>
    </div>);
  },

  render: function() {
    var self = this;
    var content = (<div>
      { this.props.sheet.backgrounds.map((b) => this.renderBackground(b)) }
    </div>);
    return (<BoxedSection header  = "Backgrounds"
                          content = { content } />);
  }
});

module.exports = Backgrounds;