var React = require('react');
var Util = require('../util');
var FieldList = require('../components/field_list');
var LittleTable = require('../components/little_table');

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
      experience: React.PropTypes.shape({
        total: React.PropTypes.number.isRequired,
        available: React.PropTypes.number.isRequired,
      }).isRequired,
    }),
  },

  experienceColumns: [
    {
      name: "Total",
      renderFn: (r) => r.total,
    },
    {
      name: "Avail",
      renderFn: (r) => r.available,
    }
  ],

  getExperienceRows: function() {
    return [
      {
        name: "Experience",
        total: this.props.sheet.experience.total,
        available: this.props.sheet.experience.available,
      },
    ];
  },

  render: function() {
    return (
      <section id="sheet-header">
        <section id="character-type">
          <div id="exalted">EXALTED 2E</div>
          <div id="character-kind">{ this.props.sheet.type } | { this.props.sheet.caste + " Caste" }</div>
          <LittleTable  columns = { this.experienceColumns }
                        rows    = { this.getExperienceRows() } />
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