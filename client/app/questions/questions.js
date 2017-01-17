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
        // return $scope.data.questions;
      })
		})
  }

  $scope.saveValue = function(question){
  	// $cookies.put('question', {question: question})
    $window.localStorage.question = question
  }

  $scope.removeQuestion = function(question){
    console.log('this question is going to be removed', question);
    Questions.removeOne(question).then(function(){
      Questions.getAll().then(function(questions){
        $scope.data.questions = questions.reverse();
        // return $scope.data.questions;
      })
    })
  };

  Questions.getJoke().then(function(joke){
    console.log(joke);
    $scope.joke = joke.value.joke.replace(/[!@#$%^&**()<>{}]/g, '');
  })

  Questions.getAll().then(function(questions){
  	$scope.data.questions = questions.reverse();
  });
  // return $scope.data.questions;

})