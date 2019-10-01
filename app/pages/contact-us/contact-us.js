const dialogModule = require('ui/dialogs');

exports.onSubmit = function() {
    console.log("Submitting message");

    dialogModule.alert('Submitted message successfully');
}