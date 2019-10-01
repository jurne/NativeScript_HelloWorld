const dialogModule = require('ui/dialogs');

exports.OnSaveProfile = function() {
    console.log("save profile message");

    dialogModule.alert('Profile saved');
}