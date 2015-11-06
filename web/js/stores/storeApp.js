var AppDispatcher = require ("../dispatcher/dispatcherApp");
var AppConstants = require('../constants/constantsApp')
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var itemsList = ['hello','world'];


var AppStore = assign({},EventEmitter.prototype,{

    getItemsList : function () {
        return itemsList;
    },

    addChangeListener : function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener : function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;

    switch (action.actionType){
        case AppConstants.ADD_ITEM:
            //itemsList.push('Legendary')
            itemsList.push(action.data);
           break;
    }
    AppStore.emitChange();
    return true;
});

module.exports = AppStore;