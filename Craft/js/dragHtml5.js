var elements = ElementsModule.getElemsDrag();
var block1 = ElementsModule.getBlockCraft1();
var block2 = ElementsModule.getBlockCraft2();
var prod = ElementsModule.getBlockProd();
var bl;
//установим атрибут drag для всех элементов 
for (var i = 0; i < elements.length; i++)
    elements[i].setAttribute("draggable", "true");



document.ondragstart = function (e) {
    dragStart(e);
};

block1.ondragenter = function (e) {
    dragEnter(e);
};

block1.ondrop = function (e) {
    dragDrop(e);
};

block1.ondragover = function (e) {
    dragOver(e);
};

block2.ondragenter = function (e) {
    dragEnter(e);
};

block2.ondrop = function (e) {
    dragDrop(e);
};

block2.ondragover = function (e) {
    dragOver(e);
};

prod.ondragenter = function (e) {
    dragEnter(e);
};

prod.ondrop = function (e) {
    dragDrop(e);
};

prod.ondragover = function (e) {
    dragOver(e);
};

function dragOver(e) {
    e.preventDefault();

};

function dragDrop(e) {
    if (!inBlocks() && bl != prod|| e.target.tagName==="IMG") {
        return false;
    }

    var data = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
    e.stopPropagation();

    return false;

};

function dragEnter(e) {
    e.preventDefault();
    bl = e.target;
};

function dragStart(ev) {

    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    return true;
};

function inBlocks() {
    var el = bl.getElementsByClassName("draggable")
    if (el.length > 0) {
        return false;
    } else return true;




}
