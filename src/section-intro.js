import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { gsap, TweenMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../static/assets/scss/main.css"
// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Création de la scène
const scene = new THREE.Scene();

// Chargement de la classe OBJLoader
const loader = new OBJLoader();

// Création des lumières
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
ambientLight.position.set(0, 0, 4);
scene.add(ambientLight);

const purpleLight = new THREE.SpotLight(0xff00ff, 0);
purpleLight.position.set(0, -5, 4);
scene.add(purpleLight);

// Animation des lumières
TweenMax.to(ambientLight, 2, { intensity: 0.7, delay: 2 });
TweenMax.to(purpleLight, 2, { intensity: 0.5, delay: 1 });

// Création de la caméra
const sizes = {
  width: window.innerWidth / 2 - 50,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(0, 0, 4);
scene.add(camera);

// Création du renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

// Fonction de redimensionnement
const resize = () => {
  sizes.width = window.innerWidth / 2 - 50;
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

// Activer les contrôles après un délai
setTimeout(() => {
  controls.enabled = false;
}, 3000);

// Chargement des textures et de l'objet
const textureLoader = new THREE.TextureLoader();
let travisScottMocha;

// Fonction de chargement de l'objet
loader.load('/assets/sneakers/travisScottMocha/baked_mesh_modified.obj', function (object) {
  // Chargement des textures
  textureLoader.load('/assets/sneakers/travisScottMocha/baked_mesh_tex0.png', function (diffuseTexture) {
    textureLoader.load('/assets/sneakers/travisScottMocha/baked_mesh_ao0.png', function (aoTexture) {
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
      console.error("Erreur de chargement de la texture d'occlusion ambiante", error);
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
  
  // Gestion des boutons d'animation
  let button1 = document.getElementById('button1');
  let button2 = document.getElementById('button2');
  let button3 = document.getElementById('button3');
  
  if (travisScottMocha) {
    // Animation de l'objet
    function animateObject(pose = 0) {
      console.log(pose);
      if (pose === 0) {
        TweenMax.to(travisScottMocha.rotation, 3, { y: 3.61 });
        TweenMax.to(travisScottMocha.position, 3, { x: -0.4 });
        requestAnimationFrame(animateObject);
      } else if (pose === 1) {
        TweenMax.to(travisScottMocha.position, 1, { x: 0 });
        TweenMax.to(travisScottMocha.rotation, 1, { y: 3, x: 0, z: 0 });
      } else if (pose === 2) {
        TweenMax.to(travisScottMocha.position, 1, { x: 0 });
        TweenMax.to(travisScottMocha.rotation, 1, { y: 3.78, x: 0, z: 0 });
      } else if (pose === 3) {
        TweenMax.to(travisScottMocha.position, 1, { x: 0 });
        TweenMax.to(travisScottMocha.rotation, 1, { y: 0.82, x: 0, z: 0 });
      }
    }
    
    button1.addEventListener('click', () => {
      animateObject(1);
    });
    button2.addEventListener('click', () => {
      animateObject(2);
    });
    button3.addEventListener('click', () => {
      animateObject(3);
    });
    
    animateObject();
  }
}, function (xhr) {
  console.log((xhr.loaded / xhr.total) * 100 + '% chargé');
}, function (error) {
  console.error('Erreur de chargement', error);
});

// Gestion de la rotation de l'objet avec la souris
window.addEventListener('mousemove', function (event) {
  travisScottMocha = scene.getObjectByName('travisScottMocha');
  
  let deltaX = event.movementX
  let deltaY = event.movementY
  
  travisScottMocha.rotation.x += deltaY * 0.001;
  travisScottMocha.rotation.y += deltaX * 0.001;
});

// Animation de la scène
const animate = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();

// Animation du logo Nike
gsap.to('.logo-nike', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.section-intro',
    start: '-30px top',
    end: 'bottom+=100px',
    scrub: true,
  },
});
