const observable = require('data/observable');
const axios = require('axios');

let user = observable.fromObject({
    id: 'jurne',
    name: 'unknown',
    nickname: 'unspecified',
    company: 'unemployed',
    followers: '0',
    repositories: '0',    avatar: ''


});

exports.onLoaded = function(args) {
    let page = args.object;
    page.bindingContext = user;


    // Make a request for a user with a given ID
    axios.get('https://api.github.com/users/' + user.id)
    .then(function (response) {
        // handle success
        user.name = response.data.login;
        user.nickname = response.data.login;
        user.repositories = response.data.public_repos;
        user.followers = response.data.followers;
        user.company = response.data.company;
        user.avatar = response.data.avatar_url;
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
};