// couple of constants
var POS_X = 1800;
var POS_Y = 500;
var POS_Z = 1800;
var WIDTH = 1000;
var HEIGHT = 600;

var FOV = 45;
var NEAR = 1;
var FAR = 4000;

// some global variables and initialization code
// simple basic renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH,HEIGHT);
renderer.setClearColorHex(0x111111);

// add it to the target element
var mapDiv = document.getElementById("globe");
mapDiv.appendChild(renderer.domElement);

// setup a camera that points to the center
var camera = new THREE.PerspectiveCamera(FOV,WIDTH/HEIGHT,NEAR,FAR);
camera.position.set(POS_X,POS_Y, POS_Z);
camera.lookAt(new THREE.Vector3(0,0,0));

// create a basic scene and add the camera
var scene = new THREE.Scene();
scene.add(camera);

// we wait until the document is loaded before loading the
// density data.
$(document).ready(function()  {
    jQuery.get('data.csv', function(data) {
        //addDensity(CSVToArray(data));
        addLights();
        addEarth();
        addClouds();
        render();
    });
});
