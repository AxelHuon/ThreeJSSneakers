import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader.js"
import GUI from 'lil-gui';
import { gsap } from 'gsap';
import {TweenMax} from "gsap/gsap-core";


// Scene
const scene = new THREE.Scene();
const loader = new OBJLoader();


const light = new THREE.AmbientLight(0xffffff, 1);
light.position.set(0, 10, 5);
scene.add(light);


// Sizes
let sizes = {
	width: window.innerWidth, height: window.innerHeight
}

// Camera
let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 4)
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
	canvas: canvas, alpha: true
})

const resize = () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	
	// Mettre à jour le ratio de la caméra
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	
	renderer.setSize(sizes.width, sizes.height);
}

resize();

window.addEventListener('resize', resize);


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enabled = false;
controls.enableDamping = true;


// Enable controls after a delay
setTimeout(() => {
	controls.enabled = true;
}, 3000); // Enable controls after 3 seconds


// Création d'un TextureLoader
const textureLoader = new THREE.TextureLoader();




loader.load('baked_mesh_modified.obj', function (object) {
	
	
	// Chargement de la texture diffuse
	textureLoader.load('baked_mesh_tex0.png', function (diffuseTexture) {
		// Chargement de la texture d'occlusion ambiante (aoMap)
		textureLoader.load('baked_mesh_ao0.png', function (aoTexture) {
			// Chargement de la texture normale
			textureLoader.load('baked_mesh_norm0.png', function (normalTexture) {
				// Appliquer les textures à votre objet OBJ
				scene.traverse(function (child) {
					if (child instanceof THREE.Mesh) {
						child.material.map = diffuseTexture;
						child.material.aoMap = aoTexture;
						child.material.normalMap = normalTexture;
						child.material.needsUpdate = true; // Assurez-vous que la mise à jour du matériau est activée
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
	
	

	scene.add(object);
	// Définir l'échelle de l'objet
	object.scale.x = 9; // Augmenter la taille sur l'axe x
	object.scale.y = 9; // Augmenter la taille sur l'axe y
	object.scale.z = 9; // Augmenter la taille sur l'axe z
	object.name = 'DarkMocha';
	
	object.position.z = 0;
	object.position.x = 4.5;
	object.rotation.z = -1;
	object.rotation.y = -6;
	const gui = new GUI()
	const cubeFolder = gui.addFolder('Sneakers')
	cubeFolder.add(object.position, 'x', 0, Math.PI * 2)
	cubeFolder.add(object.rotation, 'x', 0, Math.PI * 2)
	cubeFolder.add(object.rotation, 'y', 0, Math.PI * 2)
	cubeFolder.add(object.rotation, 'z', 0, Math.PI * 2)
	cubeFolder.open()
	
	
	var objectToAnimate = scene.getObjectByName('DarkMocha');
	
	if (objectToAnimate) {
		// Animation de l'objet
		function animateObject() {
			// Utiliser GSAP pour animer la rotation sur l'axe des y de 1 à 3 sur une durée de 2 secondes
			TweenMax.to(objectToAnimate.rotation, 3, { y: 3.61});
			TweenMax.to(objectToAnimate.position, 3, { x: 0});
			// Appeler la fonction de rendu récursivement
			requestAnimationFrame(animateObject);
		}
		
		// Lancer l'animation de l'objet
		animateObject();
	}
	
	
	
	
}, function (xhr) {
	// Cette fonction sera appelée pendant le chargement
	console.log((xhr.loaded / xhr.total * 100) + '% chargé');
}, function (error) {
	// Cette fonction sera appelée s'il y a une erreur de chargement
	console.error('Erreur de chargement', error);
});










// Animate
const animate = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);
};

animate()
