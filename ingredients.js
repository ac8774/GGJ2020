var ingredientNames = [
    "Generic garbage",
    "Compost",
    "Mixed recycling",
    "Gravel",
    "Glass shards",
    "Whole cows",
    "Glitter",
    "Growth hormones",
    "Radioactive waste",
    "Assorted narcotics",
    '"The Meats"',
    '"Secret Sauce"'
];

var ingredientFlavorTexts = [
    "Garden variety garbage.",
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
    "placeholder",
    "Cheap & safe growth hormones!* \n*This statement has not \nbeen evaluated by the FDA.",
    "Lovingly exploded in small batches.",
    "placeholder",
    "We have 'em.",
    "placeholder"
];

var ingredientImgNames = [
    "ic/generic_garbage",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder",
    "ic/placeholder"
];

var ingredientCosts = [
    1,
    10,
    10,
    15,
    15,
    100,
    25,
    1000,
    5,
    1000000,
    100,
    1000
];

var ingredientBaseQtys = [
    10000,
    10000,
    10000,
    10000,
    10000,
    1000,
    10,
    1,
    10000,
    1,
    100,
    10
];

var ingredientBasePeaks = [
    20000,
    20000,
    20000,
    20000,
    20000,
    20000,
    150,
    10,
    5000,
    100,
    500,
    25
];

var ingredientBaseTastes = [
    25,
    30,
    30,
    40,
    40,
    70,
    50,
    30,
    30,
    100,
    50,
    75
];

for(var i=0;i<12;i++){
    ingredientBasePeaks[i] = ingredientBasePeaks[i] * (Math.random()*.5+.75);
    ingredientBaseTastes[i] = ingredientBaseTastes[i] * (Math.random()*.5+.75);
}

function ingredientImgName(name){
    return ingredientImgNames[ingredientNames.indexOf(name)];
}

function ingredientCost(name){
    return ingredientCosts[ingredientNames.indexOf(name)];
}

function ingredientBaseQty(name){
    return ingredientBaseQtys[ingredientNames.indexOf(name)];
}

function ingredientPeakQty(name){
    return ingredientBasePeaks[ingredientNames.indexOf(name)];
}

function ingredientPeakTaste(name){
    return ingredientBaseTastes[ingredientNames.indexOf(name)];
}

function costOf(name, amount){
    return ingredientCost(name) * amount
}

function tastinessOf(name, amount){
    peak = ingredientPeakQty(name);
    return ingredientPeakTaste(name) * (1 - Math.abs(peak - amount) / peak)
}
