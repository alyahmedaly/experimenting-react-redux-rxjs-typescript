var videoModel = require('../models/videos');

var videos = {};

// controller that handles video listings fetch request.
videos.get = function (req, res) {
	
	var skip = req.query.skip;
	var limit = req.query.limit;

	var videosData = videoModel.get(skip, limit);
	videosData.then(function(data){
		var response = {};
		response.status='success';
		response.data=data;
		res.send(response);
	}, function(err){
		res.send(err);
	});

};

// controller that handles single video fetch request.
videos.getOne = function (req, res) {
	
	var videoid = req.query.videoId;

	var videosData = videoModel.getOne(videoid);
	videosData.then(function(data){
		var response = {};
		response.status='success';
		response.data=data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};

// controller that handles video rate request
videos.rate = function (req, res) {
	
	var videoId = req.body.videoId;
	var rating = req.body.rating;

	var videosData = videoModel.rate(videoId, rating);
	videosData.then(function(data){
		var response = {};
		response.status='success';
		response.data=data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
		
};


module.exports = videos;