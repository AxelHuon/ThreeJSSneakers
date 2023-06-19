// Import des bibliothèques et des modules nécessaires
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import GUI from 'lil-gui';
import { gsap, TweenMax } from 'gsap';

// Création de la scène
const scene = new THREE.Scene();
const loader = new OBJLoader();

// Ajout de la lumière ambiante
const light = new THREE.AmbientLight(0xffffff, 1);
light.position.set(0, 10, 5);
scene.add(light);

// Tailles de la fenêtre
let sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};

// Caméra
let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(0, 0, 4);
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true
});

// Redimensionnement de la fenêtre
const resize = () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	
	renderer.setSize(sizes.width, sizes.height);
};

resize();

window.addEventListener('resize', resize);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enabled = false;
controls.enableDamping = true;

// Activation des controls après un délai
setTimeout(() => {
	controls.enabled = true;
}, 3000); // Activation des controls après 3 secondes

// TextureLoader
const textureLoader = new THREE.TextureLoader();

// Chargement de l'objet
loader.load('baked_mesh_modified.obj', function (object) {
	// Chargement des textures
	textureLoader.load('baked_mesh_tex0.png', function (diffuseTexture) {
		textureLoader.load('baked_mesh_ao0.png', function (aoTexture) {
			textureLoader.load('baked_mesh_norm0.png', function (normalTexture) {
				// Application des textures à l'objet
				scene.traverse(function (child) {
					if (child instanceof THREE.Mesh) {
						child.material.map = diffuseTexture;
						child.material.aoMap = aoTexture;
						child.material.normalMap = normalTexture;
						child.material.needsUpdate = true;
					}
				});
			}, undefined, function (error) {
				console.error('Erreur de chargement de la texture normale', error);
			});
		}, undefined, function (error) {
			console.error('Erreur de chargement de la texture d\'occlusion ambiante', error);
		});
	}, undefined, function (error) {
		console.error('Erreur de chargement de la texture diffuse', error);
	});
	
	// Ajout de l'objet à la scène et configuration des propriétés
	object.scale.set(9, 9, 9);
	object.name = 'DarkMocha';
	object.position.set(4.5, 0, 0);
	object.rotation.set(-1, -6, 0);
	
	// GUI
	const gui = new GUI();
	const cubeFolder = gui.addFolder('Sneakers');
	cubeFolder.add(object.position, 'x', 0, Math.PI * 2);
	cubeFolder.add(object.rotation, 'x', 0, Math.PI * 2);
	cubeFolder.add(object.rotation, 'y', 0, Math.PI * 2);
	cubeFolder.add(object.rotation, 'z', 0, Math.PI * 2);
	cubeFolder.open();
	
	// Animation de l'objet
	const objectToAnimate = scene.getObjectByName('DarkMocha');
	if (objectToAnimate) {
		function animateObject() {
			TweenMax.to(objectToAnimate.rotation, 3, { y: 3.61 });
			TweenMax.to(objectToAnimate.position, 3, { x: 0 });
			requestAnimationFrame(animateObject);
		}
		animateObject();
	}
	
	scene.add(object);
}, function (xhr) {
	// Progression du chargement
	console.log((xhr.loaded / xhr.total * 100) + '% chargé');
}, function (error) {
	// Erreur de chargement
	console.error('Erreur de chargement', error);
});

// Fonction d'animation
const animate = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);
};

// Appel de la fonction d'animation
animate();
