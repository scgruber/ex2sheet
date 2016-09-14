var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var Attributes = React.createClass({
  propTypes: {
    sheet: React.PropTypes.shape({
      attributes: React.PropTypes.shape({
        strength: React.PropTypes.number,
        dexterity: React.PropTypes.number,
        stamina: React.PropTypes.number,
        charisma: React.PropTypes.number,
        manipulation: React.PropTypes.number,
        appearance: React.PropTypes.number,
        perception: React.PropTypes.number,
        intelligence: React.PropTypes.number,
        wits: React.PropTypes.number,
      })
    })
  },

  renderAttribute: function(attribute) {
    return (<div key={ attribute } className="attribute">
      <div className="attribute-label">{ Util.capitalize(attribute) }</div>
      <div className="attribute-dots"><Dots rating={ this.props.sheet.attributes[attribute] }/></div>
    </div>);
  },

  render: function() {
    var self = this;
    var content = (<div className="even-cols">
      {
        [ ['strength', 'dexterity', 'stamina'],
          ['charisma', 'manipulation', 'appearance'],
          ['perception', 'intelligence', 'wits'] ].map(function(attributeSet) {
            return (<div key={ attributeSet.join('|') } className="column">
              { attributeSet.map( (a) => self.renderAttribute(a) ) }
            </div>);
          })
      }
    </div>);
    return (<BoxedSection header  = "Attributes"
                          content = { content } />);
  }
});

module.exports = Attributes;