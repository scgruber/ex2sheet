var React = require('react');
var Util = require('../util');
var FieldList = require('../components/field_list');

var Header = React.createClass({
  propTypes: {
    sheet: React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
      caste: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      player: React.PropTypes.string,
      concept: React.PropTypes.string,
      motivation: React.PropTypes.string,
      personality: React.PropTypes.string,
      description: React.PropTypes.string,
    }),
  },

  render: function() {
    return (
      <section id="sheet-header">
        <section id="character-type">
          <div id="exalted">EXALTED 2E</div>
          <div id="character-type">{ this.props.sheet.type }</div>
          <div id="caste">{ this.props.sheet.caste + " Caste" }</div>
        </section>
        <section id="character-fluff">
          <header id="name-and-player">
            <div id="character-name">{ this.props.sheet.name }</div>
            <div id="character-player">
              <FieldList fields={ Util.selectKeys(this.props.sheet, ["player"]) } />
            </div>
          </header>
          <FieldList fields={ Util.selectKeys(this.props.sheet, ["concept", "motivation", "personality", "description"]) } />
        </section>
        <section id="character-portrait">
          [ Character Portrait ]
        </section>
      </section>
    );
  }
});

module.exports = Header;