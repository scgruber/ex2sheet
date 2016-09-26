var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');
var LittleTable = require('../components/little_table');

var SocialMisc = React.createClass({
  mddvColumns: [
    {
      name: "Bonus",
      renderFn: (r) => Util.formatSignedNumber(r.bonus),
    },
    {
      name: "Total",
      renderFn: (r) => r.total,
    },
  ],

  getMddvRows: function() {
    return [
      {
        name: "Mental Dodge DV",
        bonus: this.props.sheet.dodgeBonuses.mentalBonus,
        total: Math.ceil((this.props.sheet.willpower.rating + this.props.sheet.abilities["Integrity"].rating + this.props.sheet.essence.rating + this.props.sheet.dodgeBonuses.mentalBonus)/2),
      }
    ];
  },

  readIntentionsColumns: [
    {
      name: "Lies",
      renderFn: (r) => r.lies,
    },
    {
      name: "Mood/Int",
      renderFn: (r) => r.moodOrIntimacy,
    }
  ],

  getReadIntentionsRows: function() {
    return [
      {
        name: "Read Intentions",
        lies: this.props.sheet.attributes.perception + this.props.sheet.abilities["Investigation"].rating,
        moodOrIntimacy: this.props.sheet.attributes.perception + Math.max(this.props.sheet.abilities["Investigation"].rating, this.props.sheet.abilities["Socialize"].rating),
      }
    ];
  },

  hideIntentionsColumns: [
    {
      name: "Lies/Mood",
      renderFn: (r) => r.liesOrMood,
    },
    {
      name: "Intimacy",
      renderFn: (r) => r.intimacy,
    },
  ],

  getHideIntentionsRows: function() {
    return [
      {
        name: "Hide Intentions",
        liesOrMood: Math.ceil((this.props.sheet.attributes.manipulation + this.props.sheet.abilities["Socialize"].rating)/2),
        intimacy: this.props.sheet.attributes.manipulation + this.props.sheet.abilities["Socialize"].rating,
      }
    ];
  },

  render: function() {
    var self = this;
    return (<div id="social-misc">
      <LittleTable  columns = { this.mddvColumns }
                    rows    = { this.getMddvRows() } />
      <LittleTable  columns = { this.readIntentionsColumns }
                    rows    = { this.getReadIntentionsRows() } />
      <LittleTable  columns = { this.hideIntentionsColumns }
                    rows    = { this.getHideIntentionsRows() } />
    </div>);
  }
});

module.exports = SocialMisc;