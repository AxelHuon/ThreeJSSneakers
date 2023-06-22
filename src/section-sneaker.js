import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader.js";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader.js";
import GUI from 'lil-gui';
import {gsap, TweenMax} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const windowHeight = window.innerHeight;
const scrollHeight = document.body.scrollHeight;


gsap.to('.container-sneakers', {
	opacity: 1,
	scrollTrigger: {
		trigger: '.container-sneakers',
		start: () => `top+=${window.innerHeight * 1.5}`, // Début de l'animation après 200vh de défilement
		end: () => `top+=${window.innerHeight * 2.2}`, // Début de l'animation après 200vh de défilement
		scrub: true,
	}
});

gsap.to('.container-logo-jordan', {
	opacity: 0.9,
	scrollTrigger: {
		trigger: '.container-logo-jordan',
		start: () => `top+=${window.innerHeight * 9}`, // Début de l'animation après 200vh de défilement
		end: () => `top+=${window.innerHeight * 10}`, // Début de l'animation après 200vh de défilement
		scrub: true,
	}
});




// Création de la scène
const scene = new THREE.Scene();

// Chargement de la classe OBJLoader
const loader = new OBJLoader();

// Création de la lumière
const light1 = new THREE.AmbientLight(0xffffff, 0.2);
light1.position.set(0, 0, 4);
scene.add(light1);


const light2 = new THREE.AmbientLight(0xffffff, 0);
light2.position.set(0, -5, 4);
scene.add(light2);


const light3 = new THREE.SpotLight(0xff00ff, 0);
light3.position.set(0, -5, 4);
scene.add(light3);


TweenMax.to(light2, 2, {intensity: 0.5, delay: 2});
TweenMax.to(light3, 2, {intensity: 0.5, delay: 1});


// Tailles de la fenêtre
let sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};

// Création de la caméra
let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(0, 0, 4);
scene.add(camera);


// Création du renderer
const canvas = document.querySelector(".sneakers-webgl");
const renderer = new THREE.WebGLRenderer({
	canvas: canvas, alpha: true, antialias: true,
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

// Fonction de redimensionnement
const resize = () => {
	sizes.width = window.innerWidth,
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



// Chargement des textures et de l'object
const textureLoader = new THREE.TextureLoader();
let travisScottMocha2
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
	object.name = 'travisScottMocha2';
	// Récupération de l'objet à animer
	travisScottMocha2 = scene.getObjectByName('travisScottMocha2');
	
	
	
	// Création de l'animation de ScrollTrigger une fois que travisScottMocha2 est défini
	 gsap.to(travisScottMocha2.rotation, {
		x:0.3,
		y: 3.61,
		z:-1,
		scrollTrigger: {
			trigger: ".container-sneakers",
			start: () => `top+=${window.innerHeight * 1.5}`, // Début de l'animation après 200vh de défilement
			end: () => `top+=${window.innerHeight * 2.2}`, // Début de l'animation après 200vh de défilement
			scrub: true,
		},
	});
	
	gsap.to(travisScottMocha2.position, {
		y: 0.34,
		scrollTrigger: {
			trigger: ".container-sneakers",
			start: () => `top+=${window.innerHeight * 1.5}`, // Début de l'animation après 200vh de défilement
			end: () => `top+=${window.innerHeight * 2.2}`, // Début de l'animation après 200vh de défilement
			scrub: true,
		},
	});
	
	gsap.to(camera.position, {
		x:-1.16,
		y: -3.12,
		z:1.8,
		scrollTrigger: {
			trigger: ".container-sneakers",
			start: () => `top+=${window.innerHeight * 1.5}`, // Début de l'animation après 200vh de défilement
			end: () => `top+=${window.innerHeight * 2}`, // Début de l'animation après 200vh de défilement
			scrub: true,
		},
	});
	
	
	const timeline = gsap.timeline();
	timeline
		.fromTo(".content-part-1", { opacity: 0 }, { opacity: 1, duration: 0.5 })
		.addLabel("visible", "+=0") // étiquette pour la partie visible
		.fromTo(".content-part-1", { opacity: 1 }, { opacity: 1, duration: 0 }) // maintenir l'opacité à 1
		.addLabel("invisible", "+=0") // étiquette pour la partie invisible
		.fromTo(".content-part-1", { opacity: 1 }, { opacity: 0, duration: 0.5 });
	
	ScrollTrigger.create({
		trigger: ".content-part-1",
		start: () => `top+=${window.innerHeight * 2}`,
		end: () => `top+=${window.innerHeight * 4}`,
		animation: timeline,
		scrub: true
	});
	
	
	gsap.fromTo(
		camera.position, // Élément cible de l'animation
		{
			x: -1.16,
			y: -3.12,
			z: 1.8,
		},
		{
			x: 2, // Position finale en X
			y: 2, // Position finale en Y
			z: 2, // Position finale en Z
			scrollTrigger: {
				trigger: ".container-sneakers",
				start: () => `top+=${window.innerHeight * 4}`, // Début de l'animation après 200vh de défilement
				end: () => `top+=${window.innerHeight * 5}`, // Fin de l'animation après 220vh de défilement
				scrub: true,
			},
		}
	);
	
	
	const timeline2 = gsap.timeline();
	timeline2
		.fromTo(".content-part-2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
		.addLabel("visible", "+=0") // étiquette pour la partie visible
		.fromTo(".content-part-2", { opacity: 1 }, { opacity: 1, duration: 0 }) // maintenir l'opacité à 1
		.addLabel("invisible", "+=0") // étiquette pour la partie invisible
		.fromTo(".content-part-2", { opacity: 1 }, { opacity: 0, duration: 0.5 });
	
	ScrollTrigger.create({
		trigger: ".content-part-2",
		start: () => `top+=${window.innerHeight * 5}`,
		end: () => `top+=${window.innerHeight * 7}`,
		animation: timeline2,
		scrub: true
	});
	
	
	
	
	gsap.fromTo(
		camera.position, // Élément cible de l'animation
		{
			x: 2, // Position finale en X
			y: 2, // Position finale en Y
			z: 2, // Position finale en Z
		},
		{
			x: 0, // Position finale en X
			y: 0, // Position finale en Y
			z: 4, // Position finale en Z
			scrollTrigger: {
				trigger: ".container-sneakers",
				start: () => `top+=${window.innerHeight * 7}`, // Début de l'animation après 200vh de défilement
				end: () => `top+=${window.innerHeight * 8}`, // Fin de l'animation après 220vh de défilement
				scrub: true,
			},
		}
	);
	
	
	
	gsap.fromTo(
		travisScottMocha2.position, // Élément cible de l'animation
		{
			y: 0.34,
			x: 0, // Position finale en Y
			z: 0, // Position finale en Z
		},
		{
			x: 0, // Position finale en X
			y: 0, // Position finale en Y
			z: 0, // Position finale en Z
			scrollTrigger: {
				trigger: ".container-sneakers",
				start: () => `top+=${window.innerHeight * 7}`, // Début de l'animation après 200vh de défilement
				end: () => `top+=${window.innerHeight * 8}`, // Fin de l'animation après 220vh de défilement
				scrub: true,
			},
		}
	);
	
	
	
	gsap.fromTo(
		travisScottMocha2.rotation, // Élément cible de l'animation
		{
			x:0.3,
			y: 3.61,
			z:-1,
		},
		{
			x: 0, // Position finale en X
			y: 0, // Position finale en Y
			z: 0, // Position finale en Z
			scrollTrigger: {
				trigger: ".container-sneakers",
				start: () => `top+=${window.innerHeight * 7}`, // Début de l'animation après 200vh de défilement
				end: () => `top+=${window.innerHeight * 8}`, // Fin de l'animation après 220vh de défilement
				scrub: true,
			},
		}
	);
	
	
	
	gsap.fromTo(
		travisScottMocha2.rotation, // Élément cible de l'animation
		{
			x: 0, // Position finale en X
			y: 0, // Position finale en Y
			z: 0, // Position finale en Z
		},
		{
			x: 0, // Position finale en X
			y: -9.39, // Position finale en Y
			z: 0, // Position finale en Z
			scrollTrigger: {
				trigger: ".container-sneakers",
				start: () => `top+=${window.innerHeight * 8}`, // Début de l'animation après 200vh de défilement
				end: () => `top+=${window.innerHeight * 9}`, // Fin de l'animation après 220vh de défilement
				scrub: true,
			},
		}
	);
	
	
	
	gsap.fromTo(
		camera.position, // Élément cible de l'animation
		{
			x: 0, // Position finale en X
			y: 0, // Position finale en Y
			z: 4, // Position finale en Z
		},
		{
			x: 0, // Position finale en X
			y: 0, // Position finale en Y
			z: 10, // Position finale en Z
			scrollTrigger: {
				trigger: ".container-sneakers",
				start: () => `top+=${window.innerHeight * 8}`, // Début de l'animation après 200vh de défilement
				end: () => `top+=${window.innerHeight * 9}`, // Fin de l'animation après 220vh de défilement
				scrub: true,
			},
		}
	);
	
	
	
	// Appel à la fonction d'animation
	animate();
	
	
}, function (xhr) {
	console.log((xhr.loaded / xhr.total * 100) + '% chargé');
}, function (error) {
	console.error('Erreur de chargement', error);
});


let clock = new THREE.Clock();


// Fonction d'animation
const animate = () => {
	
	const time = clock.getElapsedTime();

	travisScottMocha2.position.y = Math.cos( time*1.5 ) * 0.1;
	
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);
	
};
animate();




