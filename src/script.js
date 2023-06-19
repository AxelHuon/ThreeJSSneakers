import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import GUI from 'lil-gui';


// Scene
const scene = new THREE.Scene();
const loader = new OBJLoader();



const light = new THREE.AmbientLight(0xffffff, 1);
light.position.set(0, 10, 5);
scene.add(light);







// Sizes
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
let camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 4)
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: false
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
const controls = new OrbitControls( camera, canvas )
controls.enabled = false


var clock = new THREE.Clock();


    loader.load(
        'baked_mesh_modified.obj',
        function(object) {
            
            
            
            
            // Cette fonction sera appelée lorsque le chargement sera terminé
            // Ajoutez l'objet à votre scène
            scene.add(object);
            
            // Définir l'échelle de l'objet
            object.scale.x = 9; // Augmenter la taille sur l'axe x
            object.scale.y = 9; // Augmenter la taille sur l'axe y
            object.scale.z = 9; // Augmenter la taille sur l'axe z
            
            object.position.z = 0;
            object.position.x = 1;
            object.rotation.z = -1;
            object.rotation.y = 84.9;
            
            // Variables pour l'animation de rotation
            let startRotation = object.rotation.clone(); // Point de départ
            let endRotation = new THREE.Euler(0, 78.5, -1); // Point d'arrivée
            let elapsedTime = 0; // Temps écoulé depuis le début de l'animation
            
            // Fonction de rendu pour l'animation
            function render() {
                // Calculer le delta entre deux frames en secondes
                var delta = clock.getDelta();
                
                // Calculer le pourcentage de progression (entre 0 et 1) en fonction du temps écoulé
                var progress = Math.min(elapsedTime / 3, 1); // 2 secondes
                
                // Interpoler la rotation entre le point de départ et d'arrivée
                var currentRotation = new THREE.Euler().copy(startRotation);
                currentRotation.x += (endRotation.x - startRotation.x) * progress;
                currentRotation.y += (endRotation.y - startRotation.y) * progress;
                currentRotation.z += (endRotation.z - startRotation.z) * progress;
                
                // Appliquer la rotation à l'objet
                object.rotation.copy(currentRotation);
                
                // Mettre à jour le temps écoulé
                elapsedTime += delta;
                
                // Appeler la fonction de rendu récursivement
                requestAnimationFrame(render);
            }
            
            // Appeler la fonction de rendu pour lancer l'animation
            render();
        },
        function(xhr) {
            // Cette fonction sera appelée pendant le chargement
            console.log((xhr.loaded / xhr.total * 100) + '% chargé');
        },
        function(error) {
            // Cette fonction sera appelée s'il y a une erreur de chargement
            console.error('Erreur de chargement', error);
        }
    );





// Création d'un TextureLoader
const textureLoader = new THREE.TextureLoader();

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






// Animate
const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};

animate()
