/**
 * Created by olivier on 29/10/15.
 */

var ReactDom = require('react-dom');
var React = require('react');
var TextOptionGroup = require('./components/TextOptionGroup');
var RadioOptionGroup = require('./components/RadioOptionGroup');
var AppActions = require('./actions/actionsApp.js');
var ViewItemsList = require('./components/ViewItemsList.js');

var MainApp = React.createClass({
    getInitialState: function(){
        return {
            count: 5
        }
    },
    handleClick:function(event){
        event.preventDefault();
        AppActions.addItem("this is an item");
    },
  render: function () {
      this.state.count= 15;
      var radioOptions = [
          {name:'referrer',inputName:'female'},
          {name:'referrer',inputName:'male'}
      ];

      var textOptions = [
          {name:'referrer', placeholder:'type firstname here', inputName:'First Name'},
          {name:'referrer', placeholder:'type lastname here', inputName:'Last Name'},
          {name:'referrer', placeholder:'occupation', inputName:'Occupation'}
      ];

    return (
        <div>
            <h1>{this.state.count} Hello {this.props.message}!</h1>
            <form onSubmit={this.handleClick}>

                    <RadioOptionGroup options={radioOptions} />

                <TextOptionGroup options={textOptions} />
                <br />
                <br />
                <p>
                    <label>
                        <input type="submit" />
                    </label>
                </p>
            </form>
            <ViewItemsList />
        </div>
        );
  }
})

module.exports = MainApp;

ReactDom.render(<MainApp message="World" />, document.getElementById('app'));