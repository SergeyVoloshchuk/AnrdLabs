(function () {
    angular.module("app")
        .controller("MyController", function ($scope) {
            $scope.test = "OK";
            $scope.parent = [
            ["first", "second"],
            ["three", "four"]
        ];
            $scope.remove = function (index, count) {
                $scope.parent[count].splice(index, 1);
            }
        });
})();
