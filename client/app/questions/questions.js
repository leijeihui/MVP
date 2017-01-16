angular.module('MVPsolo.questions', [])


.controller('QuestionsCtrl', function($scope, $location, Questions, $window){
  $scope.data = {};

  $scope.addQuestion = function (){
		var question = {};
		question.question = $scope.question
		$scope.question = '';
		// console.log(question)
		Questions.addOne(question).then(function(){
			// window.location.reload('/questions');
      Questions.getAll().then(function(questions){
        $scope.data.questions = questions.reverse();
        return $scope.data.questions;
      })
		})
  }

  $scope.saveValue = function(question){
  	$window.question = question;
  }

  Questions.getAll().then(function(questions){
  	$scope.data.questions = questions.reverse();
  });
  return $scope.data.questions;

})