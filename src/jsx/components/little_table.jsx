var React = require('react');

var LittleTable = React.createClass({
  propTypes: {
    // Maximum number of columns is 4
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      renderFn: React.PropTypes.func.isRequired,
      reduceBase: React.PropTypes.any,
      reduceFn: React.PropTypes.func,
    })).isRequired,
    rows: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
    })).isRequired,
    title: React.PropTypes.string,
  },

  render: function() {
    var self = this;
    var labelWidth = 5 - this.props.columns.length;
    return (<div className="little-table">
      <header>
        <div className={ "little-table-label width-" + labelWidth }>
          { self.props.title }
        </div>
        { self.props.columns.map(function(col) {
          return (<div  key       = { col.name }
                        className = "little-table-column">
            { col.name }
          </div>);
        }) }
      </header>
      { self.props.rows.map(function(row) {
        return (<div key={ row.name }>
          <div className={ "little-table-label " + (self.props.title ? "" : "dark" ) + " width-" + labelWidth }>{ row.name }</div>
          { self.props.columns.map(function(col) {
            return (<div  key       = { col.name }
                          className = "little-table-column">
              { col.renderFn(row) }
            </div>);
          }) }
        </div>);
      }) }
      { self.props.columns.every((c) => c.hasOwnProperty('reduceFn')) ?
        <footer>
        <div className={ "little-table-label width-" + labelWidth }></div>
        { self.props.columns.map(function(col) {
          var reducedColumn = self.props.rows.map((r) => col.renderFn(r)).reduce(col.reduceFn, col.reduceBase);
          return (<div  key       = { col.name }
                        className = "little-table-column">
            { reducedColumn }
          </div>);
        }) }
        </footer>
      : null }
    </div>);
  }
});

module.exports = LittleTable;