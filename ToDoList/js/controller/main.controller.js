(function () {
    'use strict';

    angular.module('app').controller('MainController', MainController);
    MainController.$inject = ['dataService', '$q', 'pathFactory'];

    function MainController(dataService, $q, pathFactory) {
        var vm = this;

        vm.addTodo = addTodo;

        activate();


        function activate() {
            console.log('Main Controller activated');
            var path = pathFactory.getRandomIndex();
            dataService.getData(path).then(function (res) {
                vm.person = res;
                return dataService.getData(res.pathToList);
            }).then(function (res) {
                vm.list = res;
                return dataService.getData(res.pathToNext);
            }).then(function (res) {
                vm.message = res.message;
            });
        }

        function addTodo() {
            if (!vm.todoText) {
                alert("Enter text");
                return;
            }
            var obj = {
                name: vm.todoText,
                flag: false
            };
            vm.list.todo.push(obj);
            vm.todoText = "";
        }
    }


})();
