var cvs;
var ctx;
var screenScale;

var imgNames=[
    "dialog_background",
    "dialog_title_background",
    "info_box_background",
    "factory_background",
    "icon_button",
    "icon_button_pressed",
    "text_button",
    "text_button_pressed",
    "burger",

    //Icons
    "ic/generic_garbage",
    "ic/placeholder"
];
var sprites;
var camx;
var camxgoal;

var audioFiles=[
   "addingTo",
    "click_Click_DOWN",
    "click_Click_UP",
    "Crunch",
    "factorySound",
    "bell",
    "swipe_Remove",
    "truckDriveAway"
];
var sounds;

//Global ingame objects
var dlg; //Current dialog

var burgertimer = 60;
var camera = {
  x: 0,
  y: 0,
  s: 1
};
var world = null;
var g_groundBody;


init();
