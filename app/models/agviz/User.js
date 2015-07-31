var mongoose = require('mongoose');
var utils = require('../utils/Utils');
var UserEntity = require('./entities/UserEntity');

function User(args) {
	if (!(this instanceof User)) {
		throw new TypeError("User constructor cannot be called as a function.");
	}
}

User.aeEntityInheritsFrom(UserEntity);

module.exports = User;