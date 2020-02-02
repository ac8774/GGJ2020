var ingredientNames = [
    "Generic garbage",
    "Compost",
    "Mixed recycling",
    "Gravel",
    "Glass shards",
    "Dog food",
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
    "Comparable nutritional value to your\n"+
        "kid's school lunch.",
    "placeholder",
    "placeholder",
    "Delicious, nutritrous, and best of all..."+
        "\nSHINY!",
    "Cheap and safe growth hormones!* \n"+
        "*Statement not evaluated by the FDA",
    "Lovingly decayed in small batches.",
    "placeholder",
    "We have 'em.",
    "placeholder"
];

var ingredientImgNames = [
    "ic/generic_garbage",
    "ic/compost",
    "ic/mixed_recycling",
    "ic/gravel",
    "ic/glass_shards",
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
    100,
    1,
    100,
    10
];

var ingredientBasePeaks = [
    200000,
    200000,
    200000,
    200000,
    200000,
    200000,
    1500,
    100,
    300,
    1000,
    5000,
    250
];

var ingredientBaseTastes = [
    25,
    30,
    30,
    40,
    40,
    55,
    60,
    35,
    80,
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

function ingredientFlavorText(name){
    return ingredientFlavorTexts[ingredientNames.indexOf(name)];
}

function costOf(name, amount){
    return ingredientCost(name) * amount
}

function tastinessOf(name, amount){
    peak = ingredientPeakQty(name);
    return ingredientPeakTaste(name) * (1 - Math.abs(peak - amount) / peak)
}

function totalCost(){
    var s = 0
    ingredientNames.forEach(n => {
        if(n in recipe)
            s += costOf(n,recipe[n])
    })
    return s;
}
function totalTaste(){
    var s = 0
    ingredientNames.forEach(n => {
        if(n in recipe)
            s += tastinessOf(n,recipe[n])
    })
    return s;
}
