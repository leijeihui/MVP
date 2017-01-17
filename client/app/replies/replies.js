angular.module('MVPsolo.replies', [])

.controller('RepliesCtrl', function ($scope, $location, Replies, Questions, $window) {


$scope.data = {};

$scope.addReply = function(){
	var reply = {};
	reply.reply = $scope.reply;
	reply.question = $window.localStorage.question;
	$scope.reply = '';
	Replies.addOne(reply).then(function(){
		Replies.getAll($window.localStorage.question).then(function(replies){
			$scope.data = {};
			$scope.data.question = $window.localStorage.question;
			$scope.data.replies = replies.reverse()
			// return $scope.data;
		});
	})
}

// console.log($cookies.get('question'))

Replies.getAll($window.localStorage.question).then(function(replies){
  $scope.data.question = $window.localStorage.question;
	$scope.data.replies = replies.reverse()
});
// return $scope.data;





});
