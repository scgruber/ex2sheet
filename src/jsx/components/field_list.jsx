var React = require('react');
var Util = require('../util');

var FieldList = React.createClass({
  render: function() {
    return (<div className="field-list">
      { Object.keys(this.props.fields).map((label) => {
        return (<div key={ label } className="field-list-row">
          <div className="field-list-label"><label>{ Util.capitalize(label) + ':' }</label></div>
          <div className="field-list-value">{ this.props.fields[label] }</div>
        </div>);
      }) }
    </div>);
  }
});

module.exports = FieldList;