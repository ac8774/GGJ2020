
function playSound(name) {
    sounds[name].play()
}

function gameLoop() {
    renderAll();
    camx = (camx*0.9+camxgoal*0.1);
    window.requestAnimationFrame(gameLoop);
}

function init(){
    cvs = document.getElementById("gameCanvas");
    ctx = cvs.getContext("2d");
    cvs.addEventListener('mousedown', handleMouseEvent);
    cvs.addEventListener('touchstart', handleMouseEvent);
    cvs.addEventListener('mousemove', handleMouseEvent);
    cvs.addEventListener('mouseup', handleMouseEvent);
    cvs.addEventListener('touchend', handleMouseEvent);
    document.addEventListener("keydown",handleKeyEvent);
    screenScale = {x:1, y:1};
    initPhysics()
    loadAudio(audioFiles);
    loadImages(imgNames); // calls start() after loading
}

function start(){
    dlg = new ProductionDialog();
    sb  = new StatusBar();
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
