(function () {
    'use strict';

    angular.module('app').controller('MainController', MainController);
    MainController.$inject = ['firstInfoService', '$q'];

    function MainController(firstInfoService, $q) {
        var vm = this;
        //
        //
        activate();

        function activate() {
            console.log('Main Controller activated');
            var path = 'js/json/first.json';
            firstInfoService.getData(path).then(function (res) {
                vm.result = res;
            });



        };
    }


})();
