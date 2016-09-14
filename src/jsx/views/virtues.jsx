var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var Virtues = React.createClass({
  render: function() {
    var self = this;
    var content = (<div className="even-cols">
      {
        [ ['compassion', 'temperance'],
          ['conviction', 'valor'] ].map(function(virtueSet) {
            return (<div key={ virtueSet.join('|') } className="column">
              { virtueSet.map(function(v) {
                return (<div key={ v } className="virtue">
                  <div>{ Util.capitalize(v) }</div>
                  <Dots width={ 5 } rating={ self.props.virtues[v].rating } channeled={ self.props.virtues[v].channeled } />
                </div>);
              }) }
            </div>);
          })
      }
    </div>);
    return (<BoxedSection header  = "Virtues"
                          content = { content } />);
  }
});

module.exports = Virtues;