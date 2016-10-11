(function() {
    'use strict';
    angular
        .module('cookModule')
        .factory('cookFactory', cookFactory);
    cookFactory.$inject = ['$http'];
    /* @ngInject */
    function cookFactory($http) {
        var service = {
            getRecipe: getRecipe
        };
        return service;
        ////////////////
        var items = '';
        var food = '';
        function getRecipe(items, food) {
        	return $http({
        		method: 'GET',
        		url: 'http://www.recipepuppy.com/api/',
        		params: {
        			i: items,
        			q: food,
        		}
                
        	}).then(function(result) {
        		return result.data.results; // changed here
        	},function(error){
                console.log(error);
                return error;
            });
        }
    }
})();