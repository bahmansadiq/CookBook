(function() {
    'use strict';

    angular
        .module('cookModule')
        .controller('cookController', cookController);

    cookController.$inject = ['$http', 'cookFactory'];
    
    /* @ngInject */
    function cookController($http, cookFactory) {
        var vm = this;
        vm.title = 'cookController';
        vm.all =[];
        vm.name;
        vm.ingrdeients;
        vm.link;
        vm.img;
        vm.ingList = [];
        vm.ingInput;
        vm.entreeSearch;

        activate();

        ////////////////

        function activate() {
        }
        // matches recipes to put into table
        vm.goRecipe = function(items, food) {
        	cookFactory.getRecipe(items, food).then(
        		function(foodReady) {
        			vm.all = foodReady;

        		},function(error){
                    console.log(error);
                })
        }
        // adds items to a list
        vm.addIng = function(){
            if(vm.ingList.indexOf(vm.ingInput) === -1){
                vm.ingList.push(vm.ingInput);
             }
        }
        // remove items
        vm.rmIng = function(removeMe){
            var index = 0;
            index = vm.ingList.indexOf(removeMe);
            vm.ingList.splice(index, 1);
        }

    }
})();