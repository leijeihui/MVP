angular.module('MVPsolo.replies', [])

.controller('RepliesCtrl', function ($scope, $location, Replies, Questions, $window) {


$scope.data = {};

$scope.addReply = function(){
	var reply = {};
	reply.reply = $scope.reply;
	reply.question = $window.localStorage.question;
	$scope.reply = '';
	Replies.addOne(reply).then(function(){

	Replies.getAnswer($window.localStorage.question).then(function(answer){
		if(answer.Abstract){
			$scope.data.answer = answer.Abstract;
		} else {
			$scope.data.answer = 'nothing'
		}
	})





		Replies.getAll($window.localStorage.question).then(function(replies){
			$scope.data = {};
			$scope.data.question = $window.localStorage.question;
			$scope.data.replies = replies
			// return $scope.data;
		});
	})
}

// console.log($cookies.get('question'))


Replies.getAnswer($window.localStorage.question).then(function(answer){
	if(answer.Abstract){
		$scope.data.answer = answer.Abstract;
	} else {
		$scope.data.answer = 'nothing'
	}
})

Replies.getAll($window.localStorage.question).then(function(replies){
  $scope.data.question = $window.localStorage.question;
	$scope.data.replies = replies
});
// return $scope.data;





});
