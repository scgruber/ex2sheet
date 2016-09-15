var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var Essence = React.createClass({
  render: function() {
    var motePools = {
      personal: {
        base: (this.props.essence.rating * 3) + this.props.willpower.rating,
        bonus: this.props.essence.personalBonus,
      },
      peripheral: {
        base: (this.props.essence.rating * 7) + this.props.willpower.rating + Object.keys(this.props.virtues).map((v) => this.props.virtues[v].rating).reduce((m,v) => m+v,0),
        bonus: this.props.essence.peripheralBonus,
      }
    }
    var content = (<div>
      <div id="essence-rating">
        <Dots width={ 10 } rating={ this.props.essence.rating }/>
      </div>
      <div id="mote-pools">
        <header>
          <div className="mote-pool-label"></div>
          <div className="mote-pool-base">Base</div>
          <div className="mote-pool-bonus">Bonus</div>
          <div className="mote-pool-total">Total</div>
        </header>
        { ['personal', 'peripheral'].map(function(p) {
          return (<div key={ p } id={ p + '-pool' }>
          <div className="mote-pool-label">{ Util.capitalize(p) }</div>
          <div className="mote-pool-base">{ motePools[p].base }</div>
          <div className="mote-pool-bonus">{ motePools[p].bonus }</div>
          <div className="mote-pool-total">{ motePools[p].base + motePools[p].bonus }</div>
          </div>);
        }) }
      </div>
      <div id="attunements">
        <header>
          <div className="attunement-label">Attunements</div>
          <div className="attunement-personal">Personal</div>
          <div className="attunement-peripheral">Peripheral</div>
        </header>
        { this.props.backgrounds.filter((b) => b.type === "Artifact").map(function(b) {
          return (<div key={ b.kind }>
            <div className="attunement-label">{ b.kind }</div>
            <div className="attunement-personal">{ b.attune.personal }</div>
            <div className="attunement-peripheral">{ b.attune.peripheral }</div>
          </div>);
        }) }
        <footer>
          <div className="attunement-label"></div>
          <div className="attunement-personal">{ (motePools.personal.base + motePools.personal.bonus) - this.props.backgrounds.filter((b) => b.type === "Artifact").map((b) => b.attune.personal).reduce((m,e) => m+e,0) }</div>
          <div className="attunement-peripheral">{ (motePools.peripheral.base + motePools.peripheral.bonus) - this.props.backgrounds.filter((b) => b.type === "Artifact").map((b) => b.attune.peripheral).reduce((m,e) => m+e,0) }</div>
        </footer>
      </div>
    </div>);
    return (<BoxedSection header  = "Essence"
                          content = { content } />);
  }
});

module.exports = Essence;