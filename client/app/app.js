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
    .when('/', {
      templateUrl:'app/questions/home.html',
      controller: 'QuestionsCtrl'
    })
    .otherwise({
      redirectTo:'/'
    })

})
