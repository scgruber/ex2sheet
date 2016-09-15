var React = require('react');
var defaultSolarSheet = require('./data/harmonious_jade');
var Header = require('./views/header');
var Attributes = require('./views/attributes');
var Abilities = require('./views/abilities');
var Essence = require('./views/essence');
var Willpower = require('./views/willpower');
var Specialties = require('./views/specialties');
var Charms = require('./views/charms');
var Virtues = require('./views/virtues');
var Backgrounds = require('./views/backgrounds');
var VirtueFlaw = require('./views/virtue_flaw');
var Source = require('./views/source');
var AnimaBanner = require('./views/anima_banner');

var CharacterSheet = React.createClass({
  getInitialState: function() {
    return {
      sheet: defaultSolarSheet,
      sheetSource: JSON.stringify(defaultSolarSheet, null, 2),
      validSource: true,
    };
  },
  onSourceChange: function(event) {
    this.setState({ sheetSource: event.target.value });
    try {
      newSheet = JSON.parse(event.target.value);
      this.setState({ sheet: newSheet, validSource: true });
    } catch(e) {
      this.setState({ validSource: false });
    }
  },
  render: function() {
    return (<div id="character-sheet">
      <Header sheet={ this.state.sheet }/>
      <div id="three-two-split-cols">
        <div className="left-column">
          <Attributes sheet={ this.state.sheet } />
          <Abilities type={ this.state.sheet.type } caste={ this.state.sheet.caste } abilities={ this.state.sheet.abilities } />
          <Specialties specialties={ this.state.sheet.specialties } />
          <Backgrounds sheet={ this.state.sheet } />
        </div>
        <div className="right-column">
          <div className="even-cols">
            <div className="column">
              <Essence  essence     = { this.state.sheet.essence }
                        willpower   = { this.state.sheet.willpower }
                        virtues     = { this.state.sheet.virtues }
                        backgrounds = { this.state.sheet.backgrounds } />
              <AnimaBanner sheet={ this.state.sheet } />
            </div>
            <div className="column">
              <Willpower willpower={ this.state.sheet.willpower } />
              <Virtues virtues={ this.state.sheet.virtues } />
              <VirtueFlaw sheet={ this.state.sheet } />
            </div>
          </div>
        </div>
      </div>
      <Charms charms={ this.state.sheet.charms } />
      <Source sheetSource = { this.state.sheetSource }
              validSource = { this.state.validSource }
              onChange    = { this.onSourceChange } />
    </div>);
  }
});

module.exports = CharacterSheet;