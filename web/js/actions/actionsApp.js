var AppDispatcher = require('../dispatcher/dispatcherApp');
var AppConstants = require('../constants/constantsApp');

var AppActions = {
    addItem:function(item){
        AppDispatcher.handleViewAction({
            actionType:AppConstants.ADD_ITEM,
            data:item
        })
    }
}

module.exports = AppActions;