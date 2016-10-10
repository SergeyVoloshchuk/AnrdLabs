//тут я пытался писать свой grag and drop


var block1 = document.getElementById("prod");
var block2 = document.getElementById("craft1");
var block3 = document.getElementById("craft2");
var items = document.getElementsByClassName("draggable");
var grag = new function () {

    var elem;
    document.onmousedown = function (e) {
        elem = e.target;
        var coords = getCoords(elem);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        var tooltip = elem.getAttribute('data-tooltip');
        if (!tooltip)
            return;
        elem.style.position = 'absolute';
        document.body.appendChild(elem);
        moveAt(e);

        elem.style.zIndex = 1000; // над другими элементами

        // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(e) {
            elem.style.left = e.pageX - shiftX + 'px';
            elem.style.top = e.pageY - shiftY + 'px';
        }
        // 3, перемещать по экрану
        document.onmousemove = function (e) {
                moveAt(e);
            }
            // 4. отследить окончание переноса
        elem.onmouseup = function () {


            if (!inBlock(block1, elem)) {
                if (!inBlock(block2, elem)) {
                    if (!inBlock(block3, elem)) {
                        coordsEnd(elem);
                    }
                }


            }
            document.onmousemove = null;
            elem.onmouseup = null;

            for (var i = 0; i < items.length; i++) {
                if (items[i] != elem) {

                    if (!blockInBlock(items[i], elem)) {
                        coordsEnd(elem);
                    }


                }


            }
        }
        elem.ondragstart = function () {
            return false;
        };

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset,
                right: box.right + pageXOffset,
                bottom: box.bottom + pageYOffset
            };

        }



        //проверям в блоке ли элемент
        function inBlock(elem1, elem2) { //блок и элемент
            var cords1 = getCoords(elem1);
            var cords2 = getCoords(elem2);
            if (cords1.top < cords2.top && cords1.left < cords2.left && cords1.right > cords2.right && cords1.bottom > cords2.bottom) {
                return true;
            } else {

                return false;
            }
        }
        //не друг ли на друге эелементы
        function blockInBlock(elem1, elem2) {

            var cords1 = getCoords(elem1);
            var cords2 = getCoords(elem2);
            var first = Math.abs(cords1.top - cords2.top);
            var second = Math.abs(cords1.left - cords2.left);
            if ((first < 70 && second > 70) || (first > 70 && second < 70) || first > 70 && second > 70) {

                return true;


            } else {
                console.log("first = " + first);
                console.log("second = " + second);
                console.log("oops");
                return false;

            }

        }

        function coordsEnd(elem) {
            elem.style.left = coords.left + "px";
            elem.style.right = coords.right + "px";
            elem.style.top = coords.top + "px";
            elem.style.bottom = coords.bottom + "px";
        }

    }


};