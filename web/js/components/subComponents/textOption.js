/**
 * Created by olivier on 29/10/15.
 */

var React = require('react');

var TextOption = React.createClass({
    render: function () {
        return (
            <p>
                <label>
                {this.props.inputName}
                    <input type="text" name={this.props.name} placeholder={this.props.placeholder} />
                </label>
            </p>
            );
    }
})

module.exports = TextOption;


