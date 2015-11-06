var React = require('react');
var AppStore = require('../stores/storeApp.js');


function getItemsListState() {
    return {
        itemsList: AppStore.getItemsList()
    };
}


var ViewItemsList = React.createClass({

    getInitialState: getItemsListState, //getItemsListState retourne la fonction getItemsListState() retourne le resultat de la fonction


    componentDidMount: function () {
        AppStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this.onChange);
    },

    onChange: function () {
        this.setState(getItemsListState());
    },

    render: function () {
        var items = this.state.itemsList.map(function(item, index) {
            return <p key={index}><b>{index} :</b> {item}</p>;
        });

        return (<div>{items}</div>);
    }
});

module.exports = ViewItemsList;