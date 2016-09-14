var React = require('react');

var BoxedSection = React.createClass({
  render: function() {
    return (<section className="boxed-section">
      <header className={ (this.props.warn ? "warn" : "") }>{ this.props.header }</header>
      <div className="content">
        { this.props.content }
      </div>
    </section>);
  }
});

module.exports = BoxedSection;