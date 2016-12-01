var appContainer = require('../config/app_container.js');

function isLoggedIn(session) {
    if (session && session.user) {
        return true;
    } else return false;
}

var authentication = {
    'isLoggedIn': isLoggedIn
};

module.exports = authentication