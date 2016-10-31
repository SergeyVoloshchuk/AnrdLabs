(function () {
    'use strict';

    angular.module('app').controller('MainController', MainController);
    MainController.$inject = ['firstInfoService', '$q', 'pathFactory'];

    function MainController(firstInfoService, $q, pathFactory) {
        var vm = this;
        //
        //
        activate();


        function activate() {
            console.log('Main Controller activated');
            var path = pathFactory.getRandomIndex();
            firstInfoService.getData(path).then(function (res) {
                vm.person = res;
                return firstInfoService.getData(res.pathToList);
            }).then(function (res) {
                vm.list = res;
            });



        };
    }


})();
