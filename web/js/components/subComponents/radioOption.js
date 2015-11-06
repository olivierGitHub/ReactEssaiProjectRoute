var React = require('react');

var RadioOption = React.createClass({
    render: function () {
        return (
            <label>
            {this.props.inputName}
                <input type="radio"  name={this.props.name} />
            </label>
            );
    }
})

module.exports = RadioOption;