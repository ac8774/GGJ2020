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

init();

function gameLoop() {
    renderAll();
    camx = (camx*0.9+camxgoal*0.1);
    window.requestAnimationFrame(gameLoop);
}

function init(){
    cvs = document.getElementById("gameCanvas");
    ctx = cvs.getContext("2d");
    screenScale = {x:1, y:1};
    loadAudio(audioFiles);
    loadImages(imgNames); // calls start() after loading
}

function start(){
    dlg = new ProductionDialog();
    camx = 0;
    camxgoal = 0;
    window.requestAnimationFrame(gameLoop);
}

function loadImages(names) {
    var count  = names.length;
    var loaded = function() { if (--count == 0) start(); };

    sprites = {};
    for(var n = 0 ; n < names.length ; n++) {
        var name = names[n];
        sprites[name] = new Image();
        sprites[name].onload = loaded;
        sprites[name].src = "img/" + name + ".svg";
    }
}

function loadAudio(names) {
    var count  = names.length;
    sounds = {};
    for(var n = 0 ; n < names.length ; n++) {
        var name = names[n];
        sounds[name] = new Audio();
        sounds[name].src = "Sounds/" + name + ".wav";
    }
}

