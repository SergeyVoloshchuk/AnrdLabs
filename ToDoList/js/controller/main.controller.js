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
            firstInfoService.getData().then(function (res) {
                vm.result = res;
            });


        };
    }


})();
