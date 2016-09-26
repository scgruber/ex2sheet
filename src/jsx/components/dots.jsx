var React = require('react');

var Dots = React.createClass({
  getDefaultProps: function() {
    return {
      width: 5,
    };
  },

  renderDot: function(rating, filled) {
    if(filled) {
      return (<span key={ rating }>{ "\u25cf" }</span>);
    } else {
      return (<span key={ rating }>{ "\u25cb" }</span>);
    }
  },

  renderChannel: function(channel, used) {
    if(channel > this.props.rating) {
      return (<span key={ channel } className="channel-unavailable">{ "\u2b1b" }</span>);
    } else if(used) {
      return (<span key={ channel }>{ "\u2b1b" }</span>);
    } else {
      return (<span key={ channel }>{ "\u2b1c" }</span>);
    }
  },

  render: function() {
    var self = this;
    var dot_rows = [];
    for (var start = 1; start <= Math.max(this.props.rating, 1); start += this.props.width) {
      dot_rows.push(Array(this.props.width).fill().map((und,i) => (start+i) <= this.props.rating));
    }
    if (this.props.channeled != null) {
      var channel_rows = [];
      for (var start = 1; start <= Math.max(this.props.channeled, 1); start += this.props.width) {
        channel_rows.push(Array(this.props.width).fill().map((und,i) => (start+i) <= this.props.channeled));
      }
    }
    return (<div className="dots">
      { dot_rows.map(function(row,idx) {
        return (<div key={ idx*self.props.width } className="dots-row">
          { row.map((filled,i) => self.renderDot(idx*self.props.width + i + 1, filled)) }
        </div>);
      }) }
      { (this.props.channeled != null) ? channel_rows.map(function(row,idx) {
        return (<div key={ idx*self.props.width } className="channels-row">
          { row.map((filled,i) => self.renderChannel(idx*self.props.width + i + 1, filled)) }
        </div>);
      }) : "" }
    </div>);
  }
});

module.exports = Dots;