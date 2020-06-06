import { GLTFLoader } from "../js/three.js/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "../js/three.js/examples/jsm/controls/OrbitControls.js";


$(function() {
	init("Cello");
	init("Organ");
	init("Piano");
	init("Trumpet");
	init("Synth");
});

function init(instrument) {
	let scene, camera, light, renderer;
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x2980b9);

	camera = new THREE.PerspectiveCamera(
		40,
		window.innerWidth / window.innerHeight,
		1,
		5000,
	);
	light = new THREE.AmbientLight(0xecf0f1);

	scene.add(light);

	renderer = new THREE.WebGLRenderer({ 
		antialias: true,
		alpha: true,
		autoClear: true,
		physicallyCorrectLights: true,
	 });
	renderer.setSize(window.innerWidth / 1.1, window.innerHeight / 1.1);

	document.getElementById("render").appendChild(renderer.domElement);

	let controls = new OrbitControls(camera, renderer.domElement);
	controls.addEventListener("change", renderer);

	let loader = new GLTFLoader();
	loader.load("../resources/3dModels/" + instrument + "Model.glb", function(gltf) {
		gltf.scene.scale.set(.5, .5, .5);
		gltf.scene.position.x = 0;
		gltf.scene.position.y = 0
		gltf.scene.position.z = 0;
		camera.position.set(0, 0, 10);
		scene.add(gltf.scene);
		animate();
	});
	
	function animate()
	{
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
}
