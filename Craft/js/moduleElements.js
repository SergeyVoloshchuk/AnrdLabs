var ElementsModule = function () {
    var _elements = document.getElementsByClassName("draggable");
    var block1 = document.getElementById("craft1");
    var block2 = document.getElementById("craft2");
    var block3 = document.getElementById("craftResult");
    var blockFormula1 = document.getElementById("formula1");
    var blockFormula2 = document.getElementById("formula2");
    var blockFormula3 = document.getElementById("formula3");
    var prod = document.getElementById("prod");
    var inpFormulaName = document.getElementById("formulaName");
    var but = document.getElementById("result");
    var blockForFormula = document.getElementById("forFormula");

    function getBlockForFormula(){
        return blockForFormula;
    }
    function getButtonCraftResult() {
        return but;
    }

    function getInputNameFormula() {
        return inpFormulaName;
    }

    function getElementsDrag() {
        return _elements;
    }

    function getBlockCraft1() {
        return block1;
    }

    function getBlockCraft2() {
        return block2;
    }

    function getBlockCraftResult() {
        return block3;
    }

    function getBlockFormula1() {
        return blockFormula1;
    }

    function getBlockFormula2() {
        return blockFormula2;
    }

    function getBlockFormula3() {
        return blockFormula3;
    }

    function getBlockProds() {
        return prod;
    }




    return {
        getElemsDrag: getElementsDrag,
        getBlockCraft1: getBlockCraft1,
        getBlockCraft2: getBlockCraft2,
        getBlockFormula1: getBlockFormula1,
        getBlockFormula2: getBlockFormula2,
        getBlockProd: getBlockProds,
        getBlockCraftResult: getBlockCraftResult,
        getBlockFormula3: getBlockFormula3,
        getInputNameFormula: getInputNameFormula,
        getButtonCraftResult : getButtonCraftResult,
        getBlockForFormula : getBlockForFormula

    };
}();