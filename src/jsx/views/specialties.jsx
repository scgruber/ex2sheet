var React = require('react');
var Dots = require('../components/dots');
var Util = require('../util');
var BoxedSection = require('../components/boxed_section');

var Specialties = React.createClass({
  renderSpecialty: function(specialty) {
    return (<div key={ specialty } className="specialty">
      <div className="specialty-label">{ Util.capitalize(specialty) }</div>
      <div className="specialty-dots"><Dots width={ 3 } rating={ this.props.specialties[specialty] }/></div>
    </div>);
  },

  render: function() {
    var self = this;
    var specialtyNames = Object.keys(this.props.specialties)
    var content = (<div className="even-cols">
      {
        [ specialtyNames.slice(0,Math.ceil(specialtyNames.length/3)),
          specialtyNames.slice(Math.ceil(specialtyNames.length/3),Math.ceil((specialtyNames.length/3)*2)),
          specialtyNames.slice(Math.ceil((specialtyNames.length/3)*2), specialtyNames.length) ].map(function(specialtySet) {
            return (<div key={ specialtySet.join('|') } className="column">
              { specialtySet.map( (s) => self.renderSpecialty(s) ) }
            </div>);
          })
      }
    </div>);
    return (<BoxedSection header  = "Specialties"
                          content = { content } />);
  }
});

module.exports = Specialties;