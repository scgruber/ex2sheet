var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');
var LittleTable = require('../components/little_table');

var Essence = React.createClass({
  motePoolColumns: [
    {
      name: "Base",
      renderFn: (r) => r.base,
    },
    {
      name: "Bonus",
      renderFn: (r) => Util.formatSignedNumber(r.bonus),
    },
    {
      name: "Total",
      renderFn: (r) => r.base + r.bonus,
    }
  ],

  getMotePoolRows: function() {
    return [
      {
        name: "Personal",
        base: (this.props.essence.rating * 3) + this.props.willpower.rating,
        bonus: this.props.essence.personalBonus,
      },
      {
        name: "Peripheral",
        base: (this.props.essence.rating * 7) + this.props.willpower.rating + Object.keys(this.props.virtues).map((v) => this.props.virtues[v].rating).reduce((m,v) => m+v,0),
        bonus: this.props.essence.peripheralBonus,
      }
    ];
  },

  getAttunementsColumns: function() {
    return [
      {
        name: "Pers",
        renderFn: (r) => r.personalCost,
        reduceBase: (this.props.essence.rating * 3) + this.props.willpower.rating + this.props.essence.personalBonus,
        reduceFn: (prev, cur) => prev - cur,
      },
      {
        name: "Periph",
        renderFn: (r) => r.peripheralCost,
        reduceBase: (this.props.essence.rating * 7) + this.props.willpower.rating + Object.keys(this.props.virtues).map((v) => this.props.virtues[v].rating).reduce((m,v) => m+v,0) + this.props.essence.peripheralBonus,
        reduceFn: (prev, cur) => prev - cur,
      }
    ];
  },

  getAttunementsRows: function() {
    return this.props.backgrounds.filter((b) => b.type === "Artifact").map(function(b) {
      return {
        name: b.kind,
        personalCost: b.attune.personal,
        peripheralCost: b.attune.peripheral,
      };
    });
  },

  respirationFromBackground: function(bg) {
    switch (bg.type) {
      case "Hearthstone":
        return bg.rating;
      case "Cult":
        if (bg.rating === 1) {
          return 0;
        } else if (bg.rating === 5) {
          return 6;
        } else {
          return bg.rating;
        }
      default:
        return 0;
    }
  },

  getRespirationColumns: function() {
    return [
      {
        name: "Motes/hr",
        renderFn: (r) => this.respirationFromBackground(r),
        reduceBase: 0,
        reduceFn: (prev, cur) => prev + cur,
      }
    ];
  },

  getRespirationRows: function() {
    return (this.props.backgrounds.filter((b) => this.respirationFromBackground(b) > 0).map(function(b) {
      return {
        name: b.kind,
        type: b.type,
        rating: b.rating,
      };
    }));
  },

  render: function() {
    var self = this;
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
      <LittleTable  columns = { this.motePoolColumns }
                    rows    = { this.getMotePoolRows() } />
      <LittleTable  title   = "Attunements"
                    columns = { this.getAttunementsColumns() }
                    rows    = { this.getAttunementsRows() } />
      <LittleTable  title   = "Respiration"
                    columns = { this.getRespirationColumns() }
                    rows    = { this.getRespirationRows() } />
    </div>);
    return (<BoxedSection header  = "Essence"
                          content = { content } />);
  }
});

module.exports = Essence;