var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var Possessions = React.createClass({
  renderPossession: function(possession) {
    return (<div key={ possession } className="possession">
      { possession }
    </div>);
  },

  render: function() {
    var self = this;
    var possessions = this.props.sheet.possessions;
    var content = (<div className="even-cols">
      {
        [ possessions.slice(0,Math.ceil(possessions.length/2)),
          possessions.slice(Math.ceil(possessions.length/2), possessions.length) ].map(function(possessionSet) {
            return (<div key={ possessionSet.join('|') } className="column">
              { possessionSet.map( (p) => self.renderPossession(p) ) }
            </div>);
          })
      }
    </div>);
    return (<BoxedSection header  = "Possessions"
                          content = { content } />);
  }
});

module.exports = Possessions;