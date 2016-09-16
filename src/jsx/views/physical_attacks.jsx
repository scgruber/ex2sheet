var React = require('react');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var PhysicalAttacks = React.createClass({
  getUnarmedAttacks: function() {
    var self = this;
    var unarmedAttacks = [
      {
        name: 'Punch',
        ability: 'Martial Arts',
        speed: 5,
        accuracyBonus: 1,
        damageBonus: 0,
        damageType: "B",
        rate: 3,
        defenseBonus: 2,
        tagsAndNotes: ["N"],
      },
      {
        name: 'Kick',
        ability: 'Martial Arts',
        speed: 5,
        accuracyBonus: 0,
        damageBonus: 3,
        damageType: "B",
        rate: 2,
        defenseBonus: -2,
        tagsAndNotes: ["N"],
      },
      {
        name: 'Clinch',
        ability: 'Martial Arts',
        speed: 6,
        accuracyBonus: 0,
        damageBonus: 0,
        damageType: "B",
        rate: 1,
        tagsAndNotes: ["N","C","P"],
      },
    ];
    return unarmedAttacks.map(function(a) {
      var bonuses = self.props.sheet.unarmedAttackBonuses || {};
      return {
        name: a.name,
        ability: a.ability,
        speed: a.speed + (bonuses.speedBonus || 0),
        accuracyBonus: a.accuracyBonus + (bonuses.accuracyBonus || 0) ,
        damageBonus: a.damageBonus + (bonuses.damageBonus || 0),
        damageType: bonuses.damageType || a.damageType,
        rate: a.rate + (bonuses.rateBonus || 0),
        defenseBonus: a.defenseBonus + (bonuses.defenseBonus || 0),
        tagsAndNotes: a.tagsAndNotes.concat(bonuses.tagsAndNotes || []),
      }
    });
  },

  render: function() {
    var self = this;
    var content = (<div id="physical-attacks">
      <header>
        <div className="physical-attack-name">Name</div>
        <div className="physical-attack-ability">Ability</div>
        <div className="physical-attack-speed">Speed</div>
        <div className="physical-attack-accuracy">Accuracy</div>
        <div className="physical-attack-damage">Damage</div>
        <div className="physical-attack-rate">Rate</div>
        <div className="physical-attack-range">Range</div>
        <div className="physical-attack-defense">Defense</div>
        <div className="physical-attack-tags-notes">Tags/Notes</div>
      </header>
      { this.getUnarmedAttacks().concat(this.props.sheet.physicalAttacks).map(function(a) {
        return (<div key={ a.name } className="physical-attack-row">
          <div className="physical-attack-name">{ a.name }</div>
          <div className="physical-attack-ability">{ a.ability }</div>
          <div className="physical-attack-speed">{ a.speed }</div>
          <div className="physical-attack-accuracy">
            <div className="bonus">{ Util.formatSignedNumber(a.accuracyBonus) }</div>
            <div className="pool">{ self.props.sheet.attributes.dexterity + self.props.sheet.abilities[a.ability].rating +  a.accuracyBonus }</div>
          </div>
          <div className="physical-attack-damage">
            <div className="bonus">{ Util.formatSignedNumber(a.damageBonus) }</div>
            <div className="pool">{ (self.props.sheet.attributes.strength + a.damageBonus) + a.damageType }</div>
          </div>
          <div className="physical-attack-rate">{ a.rate }</div>
          <div className="physical-attack-range">{ a.range || '\u2014' }</div>
          <div className="physical-attack-defense">
            <div className="bonus">{ Util.formatSignedNumber(a.defenseBonus) || '\u2014' }</div>
            <div className="pool">{ a.defenseBonus ? Math.ceil((self.props.sheet.attributes.dexterity + self.props.sheet.abilities[a.ability].rating + a.defenseBonus)/2) : '\u2014' }</div>
          </div>
          <div className="physical-attack-tags-notes">{ (a.tagsAndNotes || []).join(', ') }</div>
        </div>);
      }) }
    </div>);
    return (<BoxedSection header  = "Physical Attacks"
                          content = { content } />);
  }
});

module.exports = PhysicalAttacks;