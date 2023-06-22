import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js';
import GUI from 'lil-gui';
import { gsap, TweenMax } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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

TweenMax.to(light2, 2, { intensity: 0.5, delay: 2 });
TweenMax.to(light3, 2, { intensity: 0.5, delay: 1 });

// Tailles de la fenêtre
let sizes = {
  width: window.innerWidth / 2 - 50,
  height: window.innerHeight,
};

// Création de la caméra
let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
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
  (sizes.width = window.innerWidth / 2 - 50),
    (sizes.height = window.innerHeight);

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

// Chargement des textures et de l'object
const textureLoader = new THREE.TextureLoader();
let travisScottMocha;
loader.load(
  '/assets/sneakers/travisScottMocha/baked_mesh_modified.obj',
  function (object) {
    // Chargement de la texture diffuse
    textureLoader.load(
      '/assets/sneakers/travisScottMocha/baked_mesh_tex0.png',
      function (diffuseTexture) {
        // Chargement de la texture d'occlusion ambiante (aoMap)
        textureLoader.load(
          '/assets/sneakers/travisScottMocha/baked_mesh_ao0.png',
          function (aoTexture) {
            // Chargement de la texture normale
            textureLoader.load(
              '/assets/sneakers/travisScottMocha/baked_mesh_norm0.png',
              function (normalTexture) {
                // Appliquer les textures à l'objet OBJ
                scene.traverse(function (child) {
                  if (child instanceof THREE.Mesh) {
                    child.material.map = diffuseTexture;
                    child.material.aoMap = aoTexture;
                    child.material.normalMap = normalTexture;
                    child.material.needsUpdate = true;
                  }
                });
              },
              undefined,
              function (error) {
                console.error(
                  'Erreur de chargement de la texture normale',
                  error
                );
              }
            );
          },
          undefined,
          function (error) {
            console.error(
              "Erreur de chargement de la texture d'occlusion ambiante",
              error
            );
          }
        );
      },
      undefined,
      function (error) {
        console.error('Erreur de chargement de la texture diffuse', error);
      }
    );

    // Ajout de l'objet à la scène
    scene.add(object);
    // Configuration de l'échelle, de la position et de la rotation de l'objet
    object.scale.set(9, 9, 9);
    object.name = 'travisScottMocha';
    object.position.set(2.3, 0, 0);
    object.rotation.set(0, -6, -1);
    // Récupération de l'objet à animer
    travisScottMocha = scene.getObjectByName('travisScottMocha');

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
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% chargé');
  },
  function (error) {
    console.error('Erreur de chargement', error);
  }
);

window.addEventListener('mousemove', function (event) {
  travisScottMocha = scene.getObjectByName('travisScottMocha');

  // Calculez la différence de position de la souris
  var deltaX =
    event.movementX || event.mozMovementX || event.webkitMovementX || 0;
  var deltaY =
    event.movementY || event.mozMovementY || event.webkitMovementY || 0;

  // Appliquez la rotation à votre objet

  travisScottMocha.rotation.x += deltaY * 0.001; // Ajustez la vitesse de rotation selon vos besoins
  travisScottMocha.rotation.y += deltaX * 0.001; // Ajustez la vitesse de rotation selon vos besoins
});

// Fonction d'animation
const animate = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();

gsap.to('.logo-nike', {
  top: '50%',
  opacity: 0,
  scale: 3.2,
  scrollTrigger: {
    trigger: '.section-intro',
    start: '-30px top',
    end: 'bottom+=100px',
    scrub: true,
  },
});

/*Logo Nike*/

// Création de la scène
const scene2 = new THREE.Scene();

// Tailles de la fenêtre
let sizes2 = {
  width: window.innerWidth,
  height: window.innerHeight,
};

let obj; // déclare l'objet en dehors du callback de chargement

// Création de la caméra
let camera2 = new THREE.PerspectiveCamera(45, sizes2.width / sizes2.height);
camera2.position.set(0, 0, 4);
scene2.add(camera2);

// Création du renderer
const canvas2 = document.querySelector('.nike-logo');
const renderer2 = new THREE.WebGLRenderer({
  canvas: canvas2,
  alpha: true,
  antialias: true,
});

// Fonction de redimensionnement
const resize2 = () => {
  sizes2.width = window.innerWidth;
  sizes2.height = window.innerHeight;
  camera2.aspect = sizes2.width / sizes2.height;
  camera2.updateProjectionMatrix();
  renderer2.setSize(sizes2.width, sizes2.height);
};

resize2();

window.addEventListener('resize', resize2);

const controls2 = new OrbitControls(camera, canvas);
controls2.enabled = false;

renderer2.outputEncoding = THREE.sRGBEncoding;
renderer2.toneMapping = THREE.ACESFilmicToneMapping;
renderer2.toneMappingExposure = 1.25;

let envmaploader = new THREE.PMREMGenerator(renderer2);

var mtlLoader = new MTLLoader();

new RGBELoader().load('/assets/hdr/cayley_interior_4k.hdr', function (hdmr) {
  let envmap = envmaploader.fromCubemap(hdmr);
  // Lumière ponctuelle pour une source de lumière intense et focalisée
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(0, 0, 20);
  scene2.add(pointLight);

  let texture = new THREE.CanvasTexture(new FlakesTexture());
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 10;
  texture.repeat.y = 6;

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

  let logomaterial = new THREE.MeshPhysicalMaterial(materialOptions);

  mtlLoader.load('/assets/NikeLogo/nike.mtl', function (materials) {
    // Set the materials for the OBJLoader
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);

    // Now load your .obj
    objLoader.load(
      '/assets/NikeLogo/nike.obj',
      function (object) {
        obj = object; // affecte l'objet à la variable obj

        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            // Apply the material to each mesh
            child.material = logomaterial;
          }
        });
        // Ajoutez l'objet à la scène ici
        scene2.add(object);
      },
      function (xhr) {
        // Code à exécuter pendant le chargement
        console.log((xhr.loaded / xhr.total) * 100 + '% chargé');
      },
      function (error) {
        // Code à exécuter en cas d'erreur de chargement
        console.error('Erreur de chargement', error);
      }
    );
  });
});

const animate2 = () => {
  if (obj) {
    obj.rotation.y += 0.005; // change la rotation de l'objet à chaque appel de la fonction animate
  }
  controls2.update();
  renderer2.render(scene2, camera2);
  window.requestAnimationFrame(animate2);
};
animate2();
