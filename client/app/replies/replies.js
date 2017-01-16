angular.module('MVPsolo.replies', [])

.controller('RepliesCtrl', function ($scope, $location, Replies, Questions, $window) {


$scope.data = {};

$scope.addReply = function(){
	var reply = {};
	reply.reply = $scope.reply;
	reply.question = $window.question;
	$scope.reply = '';
	Replies.addOne(reply).then(function(){
		Replies.getAll($window.question).then(function(replies){
			$scope.data = {};
			$scope.data.question = $window.question;
			$scope.data.replies = replies.reverse()
			return $scope.data;
		});
	})
}


if($window.question){
	Replies.getAll($window.question).then(function(replies){
	  $scope.data.question = $window.question;
		$scope.data.replies = replies.reverse()
	});
	return $scope.data;
} else {
	$location.path('/questions');
}




});
