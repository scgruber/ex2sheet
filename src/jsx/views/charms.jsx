var React = require('react');
var BoxedSection = require('../components/boxed_section');

var Charms = React.createClass({
  render: function() {
    var content = (<div id="charms">
      <header>
        <div className="charm-name">Name</div>
        <div className="charm-trait">Trait</div>
        <div className="charm-cost">Cost</div>
        <div className="charm-type">Type</div>
        <div className="charm-duration">Duration</div>
        <div className="charm-obvious">Obv</div>
        <div className="charm-combo">Combo</div>
        <div className="charm-effects">Effects</div>
        <div className="charm-source">Source</div>
      </header>
      { this.props.charms.map(function(c) {
        return (<div key={ c.name } className="charm-row">
          <div className="charm-name">{ c.name }</div>
          <div className="charm-trait">{ c.trait }</div>
          <div className="charm-cost">{ c.cost }</div>
          <div className="charm-type">{ c.type }</div>
          <div className="charm-duration">{ c.duration }</div>
          <div className="charm-obvious">{ c.obvious ? "\u2b1b" : "\u2b1c" }</div>
          <div className="charm-combo">{ c.combo ? "\u2b1b" : "\u2b1c" }</div>
          <div className="charm-effects">{ c.effects }</div>
          <div className="charm-source">{ c.source }</div>
        </div>);
      }) }
    </div>);
    return (<BoxedSection header  = "Charms"
                          content = { content } />);
  }
});

module.exports = Charms;