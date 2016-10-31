(function () {
    'use strict';
    angular.module('app.helpers')
        .service('firstInfoService', FirstInfoService);
    FirstInfoService.$inject = ['$http', '$q'];

    function FirstInfoService($http, $q) {
        var service = {
            getData: getData,
            getDataAsync: getDataAsync
        };
        return service;

        function getData(path) {
            return $http.get(path).then(function (res) {
                return res.data;
            })
        }

        function getDataAsync() {
            var deferred = $q.defer();
            setTimeout(function () {
                console.log('first promise resolved');
                deferred.resolve('1');
            }, 2000);
            return deferred.promise;
        }

    }
})();
