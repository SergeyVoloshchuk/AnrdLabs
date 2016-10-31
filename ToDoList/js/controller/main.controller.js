(function () {
    'use strict';

    angular.module('app').controller('MainController', MainController);
    MainController.$inject = ['dataService', 'pathFactory'];

    function MainController(dataService, pathFactory) {
        var vm = this;

        vm.addTodo = addTodo;
        vm.random = random;

        activate();


        function activate() {
            console.log('Main Controller activated');
            var path = pathFactory.getRandomIndex(); //getting random path for next step
            dataService.getData(path).then(function (res) {
                vm.person = res;
                return dataService.getData(res.pathToList);
            }).then(function (res) {
                vm.list = res;
                return dataService.getData(res.pathToNext);
            }).then(function (res) {
                vm.messages = res.messages;
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

        function random() {
            console.log("Karusel karusel");
            activate();
        }
    }


})();
