var mongoose = require('mongoose');

function UserEntity(args, cb) {
	var _exists = false;
	var _dirty = false;
	var _v = {
		_id : null,
		email : ''
	};

	var _schema = mongoose.Schema({
		email : { type : String, required : true }
	});
	if(typeof(UserEntity._model) === 'undefined') {
		UserEntity._model = mongoose.model('User', _schema);
	}

	var instantiate = function(user) {
		if(user) {
			for(key in user) {
				if(typeof(user[key] !== 'undefined')) {
					_v[key] = user[key];
				}
			}
			_exists = true;
		}
	};

	if(typeof(args) !== 'undefined' && typeof(cb) !== 'undefined' && typeof(cb) === 'function') {
		var objId = null;
		if(typeof(args) === 'string') {
			objId = new mongoose.Types.ObjectId(args);
		} else if(typeof(args) === 'object' && (args instanceof mongoose.Types.ObjectId)) {
			objId = args;
		}
		UserEntity._model.findById(objId, function(err, user) {
			if(!err) {
				instantiate(user);
			}
			cb(err);
		});
	}

	this.insert = function(cb) {
		if(!_exists && typeof(UserEntity._model) !== 'undefined') {
			new UserEntity._model(_v).save(function(err) {
				if(!err) {
					_exists = true;
				} else {
					console.log(err);
				}
			});
		}
	};

	this.update = function(cb) {
		if(_exists && _dirty && typeof(UserEntity._model) !== 'undefined') {
		}
	};

	this.getId = function() {
		return _v['_id'];
	};

	this.getEmail = function() {
		return _v['email'];
	};

	this.setId = function(_id) {
		if(typeof(_id) === 'string' || (typeof(_id) === 'object' && (_id instanceof mongoose.Types.ObjectId))) {
			_v['_id'] = _id;
			_dirty = true;
		}
	};

	this.setEmail = function(email) {
		if(typeof(email) === 'string' && email.length >= 1 && email.length <= 30) {
			_v['email'] = email;
			_dirty = true;
		}
	};

}
module.exports = UserEntity;