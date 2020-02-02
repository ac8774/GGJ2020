var cvs;
var ctx;
var screenScale;

var imgNames=[
    "dialog_background",
    "dialog_title_background",
    "recipe_buns",
    "recipe_bun_top",
    "recipe_bun_bottom",
    "ingredient_viewer_background",
    "info_box_background",
    "factory_background",
    "factory_foreground",
    "icon_button",
    "icon_button_pressed",
    "text_button",
    "text_button_pressed",
    "burger",

    //Icons
    "ic/next_turn",
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
    "ic/secret_sauce",
    "ic/plus",
    "ic/minus",
    "ic/placeholder"
];
var sprites;

var camx;
var camxgoal;
var camcallback = function(){};

var audioFiles=[
    "plop",
    "click_down",
    "click_up",
    "crunch",
    "factory",
    "bell",
    "swipe",
    "truck_drive_away"
];
var sounds;

//Global ingame objects
var dlg; //Current dialog
var sb;  //Status bar

var recipe = {};
var activeIngredient;

var money;
var week;
var lastWeekTaste;

var burgertimer = 60;
var camera = {
  x: 0,
  y: 0,
  s: 1
};
var world = null;
var g_groundBody;

document.addEventListener('DOMContentLoaded', function() {
   init();
},false);
