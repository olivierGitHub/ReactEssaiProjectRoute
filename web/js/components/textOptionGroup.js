var React = require('react');
var TextOption = require('./subComponents/TextOption')

var TextOptionGroup = React.createClass({
    render: function () {
        return (
            <div>
            {this.props.options.map(function (option) {
                return (
                    <TextOption name={option.name} placeholder={option.placeholder} inputName={option.inputName} key={option.inputName}>
                    </TextOption>
                    );
                })}
            </div>
        );
    }
});

module.exports = TextOptionGroup;