(function () {
    'use strict';
    angular
        .module('app.helpers')
        .service('pathFactory', PathService)

    function PathService() {
        var pathMass = [
            'js/json/first.json',
            'js/json/second.json',
            'js/json/third.json'
];
        this.getRandomIndex = getRandomIndex;
        this.getPathByIndex = getPathByIndex;

        function getPathByIndex(index) {
            return pathMass[index];
        }

        function getRandomIndex() {
            var num = Math.floor(Math.random() * pathMass.length);
            return pathMass[num];
        }
    }
})();
