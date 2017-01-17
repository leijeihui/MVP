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
				return resp;
			})
		},
		removeOne: function(question){
			return $http({
				method: 'DELETE',
				url: '/api/questions',
				params: {question: question}
			}).then(function(resp){
				return resp;
			})
		},
		getJoke: function(){
			return $http({
				method: 'GET',
				url: 'http://api.icndb.com/jokes/random?limitTo=[nerdy]'
			}).then(function(resp){
				return resp.data
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