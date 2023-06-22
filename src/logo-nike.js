import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { FlakesTexture } from "three/addons/textures/FlakesTexture.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

// Création de la scène
const scene = new THREE.Scene();

// Tailles de la fenêtre
let sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

let obj;

// Création de la caméra
let camera = new THREE.PerspectiveCamera(
	45,
	sizes.width / sizes.height
);
camera.position.set(0, 0, 4);
scene.add(camera);

// Création du renderer
const canvas = document.querySelector('.nike-logo');
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true,
	antialias: true,
});

// Fonction de redimensionnement
const resize = () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
};

resize();
window.addEventListener('resize', resize);

const controls = new OrbitControls(camera, canvas);
controls.enabled = false;

// Configuration du renderer
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

let envmaploader = new THREE.PMREMGenerator(renderer);

var mtlLoader = new MTLLoader();

// Chargement de la texture environnementale
new RGBELoader().load('/assets/hdr/cayley_interior_4k.hdr', function (hdmr) {
	let envmap = envmaploader.fromCubemap(hdmr);
	
	// Création de la lumière
	const pointLight = new THREE.PointLight(0xffffff, 1);
	pointLight.position.set(0, 0, 20);
	scene.add(pointLight);
	
	// Création de la texture des flocons
	let texture = new THREE.CanvasTexture(new FlakesTexture());
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.x = 10;
	texture.repeat.y = 6;
	
	// Options des matériaux
	const materialOptions = {
		clearcoat: 1.0,
		clearcoatRoughness: 0.1,
		metalness: 1.0,
		roughness: 0.0,
		color: 0x8418ca,
		normalMap: texture,
		normalScale: new THREE.Vector2(0.15, 0.15),
		envMap: envmap.texture,
	};
	
	// Création du matériau du logo
	let logomaterial = new THREE.MeshPhysicalMaterial(materialOptions);
	
	// Chargement du fichier MTL
	mtlLoader.load('/assets/NikeLogo/nike.mtl', function (materials) {
		materials.preload();
		var objLoader = new OBJLoader();
		objLoader.setMaterials(materials);
		
		// Chargement du fichier OBJ
		objLoader.load(
			'/assets/NikeLogo/nike.obj',
			function (object) {
				obj = object;
				// Appliquer le matériau à chaque maillage du logo
				object.traverse(function (child) {
					if (child instanceof THREE.Mesh) {
						child.material = logomaterial;
					}
				});
				scene.add(object);
			},
			function (xhr) {
				console.log((xhr.loaded / xhr.total) * 100 + '% chargé');
			},
			function (error) {
				console.error('Erreur de chargement', error);
			}
		);
	});
});

// Fonction d'animation
const animate = () => {
	if (obj) {
		obj.rotation.y += 0.005;
	}
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);
};

// Lancement de l'animation
animate();
