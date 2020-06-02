let scene, camera, light, renderer;


$(function(){
	init();
});

function init()
{
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x2980b9);

	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
	light = new THREE.AmbientLight(0xecf0f1);

	scene.add(light);

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	let loader = new THREE.GLTFLoader();
	loader.load("../resources/3dModels/CelloModel.glb", (gltf) => {
		scene.add(gltf.scene);
		renderer.renderer(scene, camera);
	});
}