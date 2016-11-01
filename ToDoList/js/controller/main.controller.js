(function () {
    'use strict';

    angular.module('app').controller('MainController', MainController);
    MainController.$inject = ['dataService', 'pathFactory', 'listService'];

    function MainController(dataService, pathFactory, listService) {
        var vm = this;

        vm.random = random;
        vm.addTodo = addTodo;

        activate();

        function activate() {
            console.log('Main Controller activated');
            var path = pathFactory.getRandomIndex(); //getting random path for next step
            dataService.getData(path).then(function (res) {
                vm.person = res;
                return dataService.getData(res.pathToList);
            }).then(function (res) {
                listService.setList(res);
                vm.list = listService.getList();
                return dataService.getData(res.pathToNext);
            }).then(function (res) {
                vm.messages = res.messages;
                vm.countMess = res.messages.length;
            });

        }
        //add tolo element in page
        function addTodo() {
            vm.todoText = listService.add(vm.todoText);
        }
        //load page on random user
        function random() {
            activate();
        }


    }


})();
