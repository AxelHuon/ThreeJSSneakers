import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import GUI from 'lil-gui';
import { gsap, TweenMax } from 'gsap';



// Création de la scène
const scene = new THREE.Scene();

// Chargement de la classe OBJLoader
const loader = new OBJLoader();

// Création de la lumière

const light1 = new THREE.AmbientLight(0xffffff, 0.2);
light1.position.set(0, 0, 4);
scene.add(light1);


const light2 = new THREE.SpotLight(0xffffff, 0);
light2.position.set(0, -5, 4);
scene.add(light2);



TweenMax.to(light2, 2, { intensity: 0.6, delay:2 });





// Tailles de la fenêtre
let sizes = {
	width: window.innerWidth / 2 - 50,
	height:  window.innerHeight
};

// Création de la caméra
let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(0, 0, 4);
scene.add(camera);

// Création du renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true,
	antialias :true,
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

// Fonction de redimensionnement
const resize = () => {
	sizes.width = window.innerWidth / 2 - 50,
	sizes.height = window.innerHeight;
	
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	
	renderer.setSize(sizes.width, sizes.height);
};

resize();

window.addEventListener('resize', resize);


// Création des contrôles de l'Orbit
const controls = new OrbitControls(camera, canvas);
controls.enabled = false;
controls.enableDamping = true;
controls.enableZoom = false; // Disable zoom with scroll
controls.enablePan = false; // Disable panning with left-click

// Activer les contrôles après un délai
setTimeout(() => {
	controls.enabled = true;
}, 3000);



// Chargement des textures
const textureLoader = new THREE.TextureLoader();
let travisScottMocha
let animInitFinish = false
// Chargement de l'objet

loader.load('/assets/sneakers/travisScottMocha/baked_mesh_modified.obj', function (object) {
	// Chargement de la texture diffuse
	textureLoader.load('/assets/sneakers/travisScottMocha/baked_mesh_tex0.png', function (diffuseTexture) {
		// Chargement de la texture d'occlusion ambiante (aoMap)
		textureLoader.load('/assets/sneakers/travisScottMocha/baked_mesh_ao0.png', function (aoTexture) {
			// Chargement de la texture normale
			textureLoader.load('/assets/sneakers/travisScottMocha/baked_mesh_norm0.png', function (normalTexture) {
				// Appliquer les textures à l'objet OBJ
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
	
	// Ajout de l'objet à la scène
	scene.add(object);
	
	// Configuration de l'échelle, de la position et de la rotation de l'objet
	object.scale.set(9, 9, 9);
	object.name = 'travisScottMocha';
	object.position.set(2.3, 0, 0);
	object.rotation.set(0, -6, -1);
	// Récupération de l'objet à animer
	travisScottMocha = scene.getObjectByName('travisScottMocha');
	console.log(travisScottMocha)
	
	
	if (travisScottMocha) {
		// Animation de l'objet
		function animateObject() {
			TweenMax.to(travisScottMocha.rotation, 3, { y: 3.61 });
			TweenMax.to(travisScottMocha.position, 3, { x: -0.4 });
			requestAnimationFrame(animateObject);
		}
		animateObject();
	}
}, function (xhr) {
	console.log((xhr.loaded / xhr.total * 100) + '% chargé');
}, function (error) {
	console.error('Erreur de chargement', error);
});




// Fonction d'animation
const animate = () => {

	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);
};

animate();
