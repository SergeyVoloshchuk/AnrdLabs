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

var elem1;
var elem2;
var elem3;

elem1 = block1.getElementsByClassName("draggable");
elem2 = block2.getElementsByClassName("draggable");
elem3 = block3.getElementsByClassName("draggable");



function Formula(name, ingr1, ingr2) {
    this.name = name;
    this.ingr1 = ingr1;
    this.ingr2 = ingr2;
};

function Ingredient(name, obj) {
    this.name = name;
    this.obj = obj;
};



var productKolbasa = new Ingredient("Колбаса");
var productBaton = new Ingredient("Батон");
var productPero = new Ingredient("Макароны");
var productKetchup = new Ingredient("Кетчуп");
var productButer = new Ingredient("Бутер");
var productMakar = new Ingredient("Макароны с кетчупом");
var productMakKetchKolb = new Ingredient("Макароны с четчупом и колбасой");

//хранит все продукты
var masProd = [productKolbasa, productBaton, productPero, productKetchup, productButer, productMakar, productMakKetchKolb];

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
var formulaButer = new Formula("Бутер", productKolbasa, productBaton);
var formulaMakaron = new Formula("Макароны с кетчупом", productPero, productKetchup);
var formulaMakKetKolb = new Formula("Макароны с четчупом и колбасой", productKolbasa, productMakar);
//хранит все рецепты
var formules = [formulaButer, formulaMakaron, formulaMakKetKolb];


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
    cloneIngrAndAppendChild(thisIngr, block3);



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
        cloneIngrAndAppendChild(thisFormula.ingr1, blockFormula1);
        cloneIngrAndAppendChild(thisFormula.ingr2, blockFormula2);
        cloneIngrAndAppendChild(thisIngr, blockFormula3);
        inpFormulaName.value = thisFormula.name;


    }
}

function render() {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none") {
            for (var j = 0; j < masProd.length; j++) {
                if (elements[i] === masProd[j].obj) {
                    cloneIngrAndAppendChild(masProd[j], ElementsModule.getBlockForFormula(), j);
                }
            }

        }
    }
}

function cloneIngrAndAppendChild(thisIngr, inBlockAppend, iter) {

    var clone = new Ingredient();
    var now = Date.now();
    clone.obj = thisIngr.obj.cloneNode(true);
    clone.name = thisIngr.name;
    clone.obj.setAttribute("id", "item" + now + iter);
    clone.obj.style.display = "inline-block";
    inBlockAppend.appendChild(clone.obj);
}