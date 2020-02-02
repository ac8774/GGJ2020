var cvs;
var ctx;
var screenScale;

var imgNames=[
    "dialog_background",
    "dialog_title_background",
    "recipe_buns",
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
    "ic/mixed_recycling",
    "ic/placeholder"
];
var sprites;
var camx;
var camxgoal;

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

var recipe = {}
var activeIngredient;

var burgertimer = 60;
var camera = {
  x: 0,
  y: 0,
  s: 1
};
var world = null;
var g_groundBody;


init();
