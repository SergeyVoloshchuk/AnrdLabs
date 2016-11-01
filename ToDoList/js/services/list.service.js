(function () {
    'use strict';
    angular.module('app.list')
        .service('listService', ListService);

    function ListService() {
        var todoList;

        this.getList = getList;
        this.setList = setList;
        this.add = add;


        function setList(list) {
            todoList = list;
        }

        function getList() {
            return todoList;
        }

        function add(text) {
            var element = {
                name: text,
                flag: false
            };
            if (!element) {
                alert("Error!Enter text");
                return;
            }
            todoList.todo.push(element);
            return text = "";
        }

    }
})();
