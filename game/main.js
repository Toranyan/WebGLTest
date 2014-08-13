
var mWidth = 400;
var mHeight = 300;

//camera
var mFOV = 45;
var mAspect = mWidth / mHeight;

var mScene = new THREE.Scene();

var mCamera = new THREE.PerspectiveCamera(mFOV, window.innerWidth / window.innerHeight, 0.1, 1000);
var mRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

