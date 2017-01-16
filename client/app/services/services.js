angular.module('MVPsolo.services', [])


.factory('Questions', function ($http){
	return {
		getAll: function() {
			return $http({
				method: 'GET',
				url: '/api/questions'
			}).then(function (resp){
				return resp.data;
			})
		},
		addOne: function(question){
			return $http({
				method: 'POST',
				url: '/api/questions',
				data: question
			}).then(function (resp){
				return resp
			})
		}
	}
})


.factory('Replies', function ($http){
	return {
		getAll: function (question){
			console.log('this is the question: ', question)
			return $http({
				method: 'GET',
				url: '/api/replies',
				params: {question: question}
			}).then(function(resp){
				return resp.data;
			});
		},
		addOne: function(reply){
			return $http({
				method:'POST',
				url:'/api/replies',
				data: reply
			}). then (function(resp){
				return resp;
			})
		}
	}
})