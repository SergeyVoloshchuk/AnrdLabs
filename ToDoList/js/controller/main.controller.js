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
            console.log("path = " + path);
            firstInfoService.getData(path).then(function (res) {
                vm.result = res;
            });



        };
    }


})();
