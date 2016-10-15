var Formula = function (name, ingr1, ingr2) {
    this.name = name;
    this.ingr1 = ingr1;
    this.ingr2 = ingr2;
};
var Ingredient = function (name, obj) {
    this.name = name;
    this.obj = obj;
};

var ObjectModule = function () {

    var productKolbasa = new Ingredient("Колбаса");
    var productBaton = new Ingredient("Батон");
    var productPero = new Ingredient("Макароны");
    var productKetchup = new Ingredient("Кетчуп");
    var productButer = new Ingredient("Бутер");
    var productMakar = new Ingredient("Макароны с кетчупом");
    var productMakKetchKolb = new Ingredient("Макароны с четчупом и колбасой");

    //хранит все продукты
    var masProd = [productKolbasa, productBaton, productPero, productKetchup, productButer, productMakar, productMakKetchKolb];

    var formulaButer = new Formula("Бутер", productKolbasa, productBaton);
    var formulaMakaron = new Formula("Макароны с кетчупом", productPero, productKetchup);
    var formulaMakKetKolb = new Formula("Макароны с четчупом и колбасой", productKolbasa, productMakar);

    //хранит все рецепты
    var formules = [formulaButer, formulaMakaron, formulaMakKetKolb];

    return {
        getMasProd: masProd,
        getFormules: formules

    };
}();
