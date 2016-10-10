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

//
//var alt;
//var objt;
//var ingr;
//var ingrs = [];
//for (var i = 0; i < elements.length; i++) {
//    elem = elements[i].getAttribute("alt");
//    objt = elements[i];
//    ingr = new Ingredient(elem, objt);
//    ingrs.push(ingr);
//}
//var ingr1;
//var ingr2;
//var ingr3;
//var ingr4;
//for (var i = 0; i < ingrs.length; i++) {
//    if (ingrs[i].name == "Kolbasa")
//        ingr1 = ingrs[i];
//    if (ingrs[i].name == "Baton")
//        ingr2 = ingrs[i];
//     if (ingrs[i].name == "Pero")
//        ingr3 = ingrs[i];
//    if (ingrs[i].name == "Ketchup")
//        ingr4 = ingrs[i];
//}
//
//var formulaButer = new Formula("Buter", ingr1, ingr2);
//var formulaMakaron = new Formula("Makaroshki s ketchupom", ingr3, ingr4);
var formules = [formulaButer, formulaMakaron];

var but = document.getElementById("result");
but.onclick = function (e) {
    var prod = document.getElementById("prod");
    var block1 = document.getElementById("craft1");
    var block2 = document.getElementById("craft2");
    var block3 = document.getElementById("craftResult");
    var elem1 = block1.getElementsByClassName("draggable");
    var elem2 = block2.getElementsByClassName("draggable");
    var elem3 = block3.getElementsByClassName("draggable");
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

    var thisIngr;
    var name;
    for (var i = 0; i < masProd.length; i++) {
        name = masProd[i].name;
        if (nName == name) {
            thisIngr = masProd[i].obj;
            break;
        }
    }
    var clone = thisIngr.cloneNode(true);
    var now = Date.now();

    clone.setAttribute("id", "item" + now);

    clone.style.display = "inline-block";
    //document.appendChild(clone.obj);
    //thisIngr.obj.style.display = "inline-block";
   block3.appendChild(clone);
    //block3.appendChild(thisIngr.obj);


};