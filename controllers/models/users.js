
var mongoose = require('mongoose');
var q = require('q');

//defining schema for users table
var userSchema = new mongoose.Schema({
	username: { type: String },
	password: String,
	activeSession: String
});

var User = mongoose.model('Users', userSchema);

//generating random session id
//todo: make sure no 2 users can have single sessionId
function makeSessionId() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 32; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}


//Initlizing interface object of this model.
var userModel = {};

//seeding database with default users
userModel.seed = function () {
	var defaultUser = new User({ username: 'ali', password: '5f4dcc3b5aa765d61d8327deb882cf99', activeSession: '' });
	defaultUser.save(function (err, user) {
		if (err) console.dir('error occured in populating database');
	});

	defaultUser = new User({ username: 'harry', password: '5f4dcc3b5aa765d61d8327deb882cf99', activeSession: '' });
	defaultUser.save(function (err, user) {
		if (err) console.dir('error occured in populating database');
	});

	defaultUser = new User({ username: 'tom', password: '5f4dcc3b5aa765d61d8327deb882cf99', activeSession: '' });
	defaultUser.save(function (err, user) {
		if (err) console.dir('error occured in populating database');
	});

	console.log('users table populated.');
};

//Function to auth user baed on username and password.
userModel.authUser = function (username, password) {
	var results = q.defer();

	User.findOne({ username: username, password: password }, function (err, dbuser) {
		if (err) {
			results.reject(err);
		}


		if (dbuser) {

			dbuser.activeSession = makeSessionId();
			dbuser.markModified('string');
			dbuser.save(function (err, dbuser) {
				var response = {};

				response.status = 'success';
				response.sessionId = dbuser.activeSession;
				response.username = dbuser.username;
				results.resolve(response);
			});


		} else {
			var response = {};
			response.status = 'error';
			response.error = 'Invalid username or password';
			results.resolve(response);
		}
	});

	return results.promise;
}

//Function to return users by its sessionID.
userModel.getBySessionId = function (sessionId) {
	var results = q.defer();

	User.findOne({ activeSession: sessionId }, function (err, dbuser) {
		if (err) {
			results.reject(err);
		}

		results.resolve(dbuser);
	});

	return results.promise;
}

//Function to return all users.
userModel.get = function () {
	var results = q.defer();

	User.find(function (err, users) {
		if (err) {
			results.reject(err);
		}
		results.resolve(users);
	});

	return results.promise;
}


//Function to logout user.
userModel.logout = function (sessionId) {
	var results = q.defer();

	User.findOne({ activeSession: sessionId }, function (err, dbuser) {
		if (err) {
			results.reject(err);
		}
		if (dbuser) {
			dbuser.activeSession = '';
			dbuser.markModified('string');
			dbuser.save();
			results.resolve(dbuser);
		}
		results.reject({ status: 'error', error: 'No active session' });

	});

	return results.promise;
}

module.exports = userModel;