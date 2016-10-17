
var elements = ElementsModule.getElemsDrag();
var prod = ElementsModule.getBlockProd();
var block1 = ElementsModule.getBlockCraft1();
var block2 = ElementsModule.getBlockCraft2();
var block3 = ElementsModule.getBlockCraftResult();
var blockFormula1 = ElementsModule.getBlockFormula1();
var blockFormula2 = ElementsModule.getBlockFormula2();
var blockFormula3 = ElementsModule.getBlockFormula3();
var inpFormulaName = ElementsModule.getInputNameFormula();
var but = ElementsModule.getButtonCraftResult();

var elem1  = block1.getElementsByClassName("draggable");
var elem2 = block2.getElementsByClassName("draggable");
var elem3 = block3.getElementsByClassName("draggable");




//хранит все продукты
var masProd = ObjectModule.getMasProd;


var elem;
for (var i = 0; i < elements.length; i++) {
    elem = elements[i].getAttribute("alt");
    for (var j = 0; j < masProd.length; j++) {
        if (masProd[j].name == elem) {
            masProd[j].obj = elements[i];

        }
    }
}
render();

var formules = ObjectModule.getFormules;


but.onclick = function (e) {
    if (elem3.length > 0) {
        prod.appendChild(elem3[0]);
        return;
    }
    if (elem1.length == 0 || elem2.length == 0) {
        alert("Поместите продукты в ячейки!");
        return;
    }
    var nName;
    for (var i = 0; i < formules.length; i++) {
        if ((formules[i].ingr1.obj.getAttribute("alt") == elem1[0].getAttribute("alt") && formules[i].ingr2.obj.getAttribute("alt") == elem2[0].getAttribute("alt")) || (formules[i].ingr1.obj.getAttribute("alt") == elem2[0].getAttribute("alt") && formules[i].ingr2.obj.getAttribute("alt") == elem1[0].getAttribute("alt"))) {

            nName = formules[i].name;
            break;
        }

    }

    var thisIngr = new Ingredient();
    var name;
    for (var i = 0; i < masProd.length; i++) {
        name = masProd[i].name;
        if (nName == name) {
            thisIngr.obj = masProd[i].obj;
            thisIngr.name = masProd[i].name;
            break;
        }
    }
    cloneIngrAndAppendChild(thisIngr, block3,1,true);



}
document.onclick = function fun(e) {
    var thisEl = document.getElementById(e.target.id);
    for (var i = 0; i < elements.length; i++) {
        if (thisEl == elements[i]) {
            getFormula(e, thisEl);
            break;
        }

    }

    function getFormula(ev, thisEl) {

        var elemForm1 = blockFormula1.getElementsByClassName("draggable");
        var elemForm2 = blockFormula2.getElementsByClassName("draggable");
        var elemForm3 = blockFormula3.getElementsByClassName("draggable");
        if (elemForm1.length > 0 || elemForm2.length > 0 || elemForm3.length > 0) {

            blockFormula1.removeChild(elemForm1[0]);
            blockFormula2.removeChild(elemForm2[0]);
            blockFormula3.removeChild(elemForm3[0]);
            inpFormulaName.value = "Здесь будет название";
            return fun(e);

        }
        var thisFormula;
        for (var i = 0; i < formules.length; i++) {
            if (formules[i].name === thisEl.getAttribute("alt")) {
                thisFormula = formules[i];
                break;
            }

        }

        if (!thisFormula)
            return;

        var thisIngr = new Ingredient();
        var name;
        for (var i = 0; i < masProd.length; i++) {
            name = masProd[i].name;
            if (thisFormula.name == name) {
                thisIngr.obj = masProd[i].obj;
                thisIngr.name = masProd[i].name;
                break;
            }
        }
        cloneIngrAndAppendChild(thisFormula.ingr1, blockFormula1,1,false);
        cloneIngrAndAppendChild(thisFormula.ingr2, blockFormula2,2,false);
        cloneIngrAndAppendChild(thisIngr, blockFormula3,3,false);
        inpFormulaName.value = thisFormula.name;


    }
}

function render() {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none") {
            for (var j = 0; j < masProd.length; j++) {
                if (elements[i] === masProd[j].obj) {
                    cloneIngrAndAppendChild(masProd[j],ElementsModule.getBlockForFormula(),j,false);
                }
            }

        }
    }
}

function cloneIngrAndAppendChild(thisIngr, inBlockAppend, iter,flag) {
    var clone = new Ingredient;
    var now = Date.now();
    clone.obj = thisIngr.obj.cloneNode(true);
    clone.name = thisIngr.name;
    clone.obj.setAttribute("id", "item" + now + iter);
    clone.obj.style.display = "inline-block";
    clone.obj.setAttribute("draggable", flag);
    inBlockAppend.appendChild(clone.obj);
}
