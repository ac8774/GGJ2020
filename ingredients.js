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
    "9 out of 10 dentists recommend using\ncompost instead of regular dirt.",
    "Unsorted and unsanitary!",
    "Comparable nutritional value to the\n"+
        "average school lunch.",
    "Pre-smashed for your convenience.",
    "If it's safe enough for dogs,\nit's the safest thing here.",
    "Delicious, nutritrous, and best of all..."+
        "\nSHINY!",
    "Cheap and safe growth hormones!* \n"+
        "*Statement not evaluated by the FDA",
    "Lovingly decayed in small batches.",
    "Extracted from your local water supply.",
    "We have 'em.",
    "Don't ask."
];

var ingredientImgNames = [
    "ic/generic_garbage",
    "ic/compost",
    "ic/mixed_recycling",
    "ic/gravel",
    "ic/glass_shards",
    "ic/dog_food",
    "ic/glitter",
    "ic/growth_hormones",
    "ic/radioactive_waste",
    "ic/assorted_narcotics",
    "ic/the_meats",
    "ic/secret_sauce"
];

var ingredientsUnlocked = [];

var ingredientCosts = [
    100,
    300,
    300,
    400,
    500,
    1000,
    1500,
    4000,
    8000,
    10000,
    10000,
    15000
];

var ingredientBaseQtys = [];

var ingredientBasePeaks = [
    3,
    2,
    2,
    1,
    1,
    0,
    0,
    0,
    0,
    2,
    3,
    5
];

var ingredientBaseTastes = [];

for(var i=0;i<12;i++){
    ingredientBaseQtys[i]    = 100;
    ingredientBasePeaks[i]  += Math.random()*11;
    ingredientBasePeaks[i]  *= 100;
    ingredientBaseTastes[i]  = ingredientCosts[i]*
                               (Math.random()*.5+.75)*
                               (i+10);
    ingredientsUnlocked[i]    = i<4;
}

function ingredientImgName(name){
    return ingredientImgNames[ingredientNames.indexOf(name)];
}

function ingredientUnlocked(name){
    return ingredientsUnlocked[ingredientNames.indexOf(name)];
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
