const frameModule = require('ui/frame');

let navigate = function(page) {
    console.log(`Going to ${page}`);
    frameModule.topmost().navigate(`pages/${page}/${page}`);
}

exports.onAboutTap = () => navigate('about');
exports.onCantactUsTap = () => navigate('contact-us');
exports.onRepoTap = () => navigate('repos')
exports.onProfileTap = () => navigate('profile')