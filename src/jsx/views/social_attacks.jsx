var React = require('react');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var SocialAttacks = React.createClass({
  socialAttacks: [
    {
      ability: 'Presence',
      speed: 4,
      rate: 2,
    },
    {
      ability: 'Performance',
      speed: 6,
      rate: 1,
    },
    {
      ability: 'Investigation',
      speed: 5,
      rate: 2,
    },
  ],

  render: function() {
    var self = this;
    var bonuses = this.props.sheet.socialAttackBonuses || {}
    var content = (<div id="social-attacks">
      <header>
        <div className="social-attack-ability">Ability</div>
        <div className="social-attack-speed">Speed</div>
        <div className="social-attack-honest-attack">Honest Attack</div>
        <div className="social-attack-deceitful-attack">Deceitful Attack</div>
        <div className="social-attack-rate">Rate</div>
        <div className="social-attack-honest-defense">Honest Defense</div>
        <div className="social-attack-deceitful-defense">Deceitful Defense</div>
      </header>
      { this.socialAttacks.map(function(a) {
        return (<div key={ a.ability } className="social-attack-row">
          <div className="social-attack-ability">{ a.ability }</div>
          <div className="social-attack-speed">{ a.speed + (bonuses.speedBonus || 0) }</div>
          <div className="social-attack-honest-attack">
            <div className="bonus">{ Util.formatSignedNumber((bonuses.honestBonus || 0) + (bonuses.attackBonus || 0)) }</div>
            <div className="pool">{ self.props.sheet.attributes.charisma + self.props.sheet.abilities[a.ability].rating + (bonuses.honestBonus || 0) + (bonuses.attackBonus || 0) }</div>
          </div>
          <div className="social-attack-deceitful-attack">
            <div className="bonus">{ Util.formatSignedNumber((bonuses.deceitfulBonus || 0) + (bonuses.attackBonus || 0)) }</div>
            <div className="pool">{ self.props.sheet.attributes.manipulation + self.props.sheet.abilities[a.ability].rating + (bonuses.deceitfulBonus || 0) + (bonuses.attackBonus || 0) }</div>
          </div>
          <div className="social-attack-rate">{ a.rate + (bonuses.rateBonus || 0) }</div>
          <div className="social-attack-honest-defense">
            <div className="bonus">{ Util.formatSignedNumber((bonuses.honestBonus || 0) + (bonuses.defenseBonus || 0)) }</div>
            <div className="pool">{ Math.ceil((self.props.sheet.attributes.charisma + self.props.sheet.abilities[a.ability].rating + (bonuses.honestBonus || 0) + (bonuses.defenseBonus || 0))/2) }</div>
          </div>
          <div className="social-attack-deceitful-defense">
            <div className="bonus">{ Util.formatSignedNumber((bonuses.deceitfulBonus || 0) + (bonuses.defenseBonus || 0)) }</div>
            <div className="pool">{ Math.ceil((self.props.sheet.attributes.manipulation + self.props.sheet.abilities[a.ability].rating + (bonuses.deceitfulBonus || 0) + (bonuses.defenseBonus || 0))/2) }</div>
          </div>
        </div>);
      }) }
    </div>);
    return (<BoxedSection header  = "Social Attacks"
                          content = { content } />);
  }
});

module.exports = SocialAttacks;