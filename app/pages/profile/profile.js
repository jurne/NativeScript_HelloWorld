const observable = require('data/observable');

let user = observable.fromObject({
    id: 'jurne',
    name: 'unknown',
    nickname: 'unspecified',
    company: 'unemployed',
    followers: '0',
    repositories: '0'


});

exports.onLoaded = function(args) {
    let page = args.object;
    page.bindingContext = user;
};