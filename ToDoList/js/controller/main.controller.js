(function () {
    'use strict';

    angular.module('app').controller('MainController', MainController);
    MainController.$inject = ['dataService', 'pathFactory', 'listService'];

    function MainController(dataService, pathFactory, listService) {
        var vm = this;

        vm.random = random;
        vm.addTodo = addTodo;
        vm.onRead = onRead;

        activate();

        function activate() {
            console.log('Main Controller activated');
            getDataForStartPage();


        }
        //add tolo element in page
        function addTodo() {
            vm.todoText = listService.add(vm.todoText);
        }

        function getDataForStartPage() {
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
        //load page on random user
        function random() {
            console.log("update page with new parametrs");
            getDataForStartPage();
        }

        function onRead(index) {
            if (vm.messages[index].flag) {
                return;
            }
            vm.messages[index].flag = true;
            vm.countMess = vm.countMess - 1;
        }


    }


})();
