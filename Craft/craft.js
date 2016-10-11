var elements = document.getElementsByClassName("draggable");

function Formula(name, ingr1, ingr2) {
    this.name = name;
    this.ingr1 = ingr1;
    this.ingr2 = ingr2;
};

function Ingredient(name, obj) {
    this.name = name;
    this.obj = obj;
};
//
var prod = document.getElementById("prod");
var block1 = document.getElementById("craft1");
var block2 = document.getElementById("craft2");
var block3 = document.getElementById("craftResult");
var blockFormula1 = document.getElementById("formula1");
var blockFormula2 = document.getElementById("formula2");
var blockFormula3 = document.getElementById("formula3");
var inpFormulaName = document.getElementById("formulaName");
var elem1 = block1.getElementsByClassName("draggable");
var elem2 = block2.getElementsByClassName("draggable");
var elem3 = block3.getElementsByClassName("draggable");
var productKolbasa = new Ingredient("Kolbasa", "null");
var productBaton = new Ingredient("Baton", "null");
var productPero = new Ingredient("Pero", "null");
var productKetchup = new Ingredient("Ketchup", "null");
var productButer = new Ingredient("Buter", "null");
var productMakar = new Ingredient("Makaroshki s ketchupom", "null");

var masProd = [productKolbasa, productBaton, productPero, productKetchup, productButer, productMakar];

for (var i = 0; i < elements.length; i++) {
    elem = elements[i].getAttribute("alt");
    for (var j = 0; j < masProd.length; j++) {
        if (masProd[j].name == elem) {

            masProd[j].obj = elements[i];

        }
    }
}

var formulaButer = new Formula("Buter", productKolbasa, productBaton);
var formulaMakaron = new Formula("Makaroshki s ketchupom", productPero, productKetchup);
var formules = [formulaButer, formulaMakaron];

var but = document.getElementById("result");
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
        if ((formules[i].ingr1.obj == elem1[0] && formules[i].ingr2.obj == elem2[0]) || (formules[i].ingr1.obj == elem2[0] && formules[i].ingr2.obj == elem1[0])) {

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
    var clone = new Ingredient();
    clone.obj = thisIngr.obj.cloneNode(true);
    clone.name = thisIngr.name;
    console.log(clone.name);
    var now = Date.now();
    clone.obj.setAttribute("id", "item" + now);
    clone.obj.style.display = "inline-block";
    block3.appendChild(clone.obj);



};
document.onclick = function fun(e) {
    var thisEl = document.getElementById(e.target.id);
    for (var i = 0; i < elements.length; i++) {
        if (thisEl == elements[i]) {
            getFormula(e, thisEl);
            break;
        }

    }

    function getFormula(ev, thisEl) {
        var thisFormula;
        for (var i = 0; i < formules.length; i++) {
            if (formules[i].ingr1.obj == thisEl || formules[i].ingr2.obj == thisEl) {
                thisFormula = formules[i];
                break;
            }
        }
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
//        var thisIngr;
//        var name;
//        for (var i = 0; i < masProd.length; i++) {
//            name = masProd[i].name;
//            if (thisFormula.name == name) {
//                thisIngr = masProd[i].obj;
//                break;
//            }
//        }
//        var clone1 = thisFormula.ingr1.obj.cloneNode(true);
//        var clone2 = thisFormula.ingr2.obj.cloneNode(true);
//        var clone3 = thisIngr.cloneNode(true);
//        var now = Date.now();
//        clone1.setAttribute("id", "item" + now);
//        now += 1;
//        clone2.setAttribute("id", "item" + now);
//        now += 1;
//        clone3.setAttribute("id", "item" + now);
//        clone1.style.display = "inline-block";
//        clone2.style.display = "inline-block";
//        clone3.style.display = "inline-block";
//        blockFormula1.appendChild(clone1);
//        blockFormula2.appendChild(clone2);
//        blockFormula3.appendChild(clone3);
//        inpFormulaName.value = thisFormula.name;
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
        var clone1 = new Ingredient();
        var clone2 = new Ingredient();
        var clone3 = new Ingredient();
        clone1.obj = thisFormula.ingr1.obj.cloneNode(true);
        clone1.name = thisIngr.name;
        var now = Date.now();
        clone1.obj.setAttribute("id", "item" + now);
        clone1.obj.style.display = "inline-block";
        blockFormula1.appendChild(clone1.obj);
        now += 1;
        clone2.obj = thisFormula.ingr2.obj.cloneNode(true);
        clone2.name = thisIngr.name;
        var now = Date.now();
        clone2.obj.setAttribute("id", "item" + now);
        clone2.obj.style.display = "inline-block";
        blockFormula2.appendChild(clone2.obj);
        now += 1;
        clone3.obj = thisIngr.obj.cloneNode(true);
        clone3.name = thisIngr.name;
        var now = Date.now();
        clone3.obj.setAttribute("id", "item" + now);
        clone3.obj.style.display = "inline-block";
        blockFormula3.appendChild(clone3.obj);
        inpFormulaName.value = thisFormula.name;


    }
};