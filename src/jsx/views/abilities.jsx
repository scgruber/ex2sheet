var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var abilityGroups = {
  'Solar Exalted': [
    {
      'Dawn': ['Archery', 'Martial Arts', 'Melee', 'Thrown', 'War'],
      'Night': ['Athletics', 'Awareness', 'Dodge', 'Larceny', 'Stealth'],
    },
    {
      'Zenith': ['Integrity', 'Performance', 'Presence', 'Resistance', 'Survival'],
      'Eclipse': ['Bureaucracy', 'Linguistics', 'Ride', 'Sail', 'Socialize'],
    },
    {
      'Twilight': ['Craft', 'Investigation', 'Lore', 'Medicine', 'Occult'],
    },
  ],
}

var excellencies = {
  'Solar Exalted': ['1', '2', '3', 'IM', 'EF'],
}

var Abilities = React.createClass({
  renderAbility: function(ability, group, subAbility) {
    var self = this;
    var favored = (this.props.caste === group) || (this.props.abilities[ability].favored)
    if (ability === "Craft") {
      var crafts = Object.keys(this.props.abilities).filter((a) => a.match(/^Craft\s+.+$/));
      var highestCraftRating = crafts.map((a) => this.props.abilities[a].rating).reduce((m,r) => Math.max(m,r), 0)
      return (<div key="Crafts" id="craft-abilities">
        <div key={ ability } className="ability">
          <div className="ability-favored">{ favored ? "\u25a0": "\u25a1" }</div>
          <div className="ability-label">{ Util.capitalize(ability) }</div>
          <div className="ability-dots"><Dots rating={ highestCraftRating }/></div>
          <div className="ability-excellencies">
          { excellencies[this.props.type].map(function(e) {
            return (<div key={ e }>
              { self.props.abilities[ability].excellencies.includes(e) ? "\u2b1b" : "\u2b1c" }
            </div>);
          })}
          </div>
        </div>
        { crafts.map((a) => this.renderAbility(a, group, true)) }
      </div>);
    } else {
      return (<div key={ ability } className="ability">
        <div className="ability-favored">{ subAbility ? "" : (favored ? "\u2b1b": "\u2b1c") }</div>
        <div className="ability-label">{ Util.capitalize(ability) }</div>
        <div className="ability-dots"><Dots rating={ this.props.abilities[ability].rating }/></div>
        <div className="ability-excellencies">
        { subAbility ? "" : excellencies[this.props.type].map(function(e) {
          return (<div key={ e }>
            { self.props.abilities[ability].excellencies.includes(e) ? "\u2b1b" : "\u2b1c" }
          </div>);
        })}
        </div>
      </div>);
    }
  },

  renderAbilityGroup: function(name, abilities) {
    return (<section key={ abilities.join('|') } className="ability-group">
      <header>
        <div className="group-name">{ name }</div>
        <div className="excellencies">
          { excellencies[this.props.type].map(function(e) {
            return (<div key={ e }>{ e }</div>);
          })}
        </div>
      </header>
      { abilities.map((a) => this.renderAbility(a, name)) }
    </section>);
  },

  render: function() {
    var self = this;
    var content = (<div className="even-cols">
      {
        abilityGroups[this.props.type].map( function(abilityGroup) {
          return (<div key={ Object.keys(abilityGroup).join('|') } className="column">
            { Object.keys(abilityGroup).map( (name) => self.renderAbilityGroup(name, abilityGroup[name]) ) }
          </div>);
        })
      }
    </div>);
    return (<BoxedSection header  = "Abilities"
                          content = { content } />);
  }
});

module.exports = Abilities;