(function () {
    'use strict';
    angular.module('app.list')
        .service('listService', ListService);

    function ListService() {
        var todoList;

        this.getList = getList;
        this.setList = setList;


        function setList(list) {
            todoList = list;
        }

        function getList() {
            return todoList;
        }

    }
})();
