angular.module('MVPsolo', [
  'MVPsolo.services',
  'MVPsolo.questions',
  'MVPsolo.replies',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/questions', {
      templateUrl: 'app/questions/questions.html',
      controller: 'QuestionsCtrl'
    })
    .when('/replies', {
      templateUrl: 'app/replies/replies.html',
      controller: 'RepliesCtrl'
    })
    .otherwise({
      redirectTo:'/questions'
    })

})
.run(function(){

})