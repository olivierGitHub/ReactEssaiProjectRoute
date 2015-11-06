var React = require('react');
var RadioOption = require('./subComponents/RadioOption')

var RadioOptionGroup = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.options.map(function (option) {
                    return (
                        <RadioOption name={option.name} inputName={option.inputName} key={option.inputName}></RadioOption>
                        );
                })}
            </div>
            );
    }
});

module.exports = RadioOptionGroup;