import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"

// Scene
const scene = new THREE.Scene();
const loader = new OBJLoader();



const light = new THREE.AmbientLight(0xffffff, 1);
light.position.set(0, 10, 5);
scene.add(light);



loader.load(
    'baked_mesh_modified.obj',
    function(object) {
        
        // Définir l'échelle de l'objet
        object.scale.x = 4; // Augmenter la taille sur l'axe x
        object.scale.y = 4; // Augmenter la taille sur l'axe y
        object.scale.z = 4; // Augmenter la taille sur l'axe z
        
        // Ajouter l'objet à votre scène
        scene.add(object);
    },
    function(xhr) {
        // Fonction de progression du chargement
        console.log((xhr.loaded / xhr.total * 100) + '% chargé');
    },
    function(error) {
        // Fonction de gestion des erreurs de chargement
        console.error('Erreur de chargement', error);
    }
);




// Sizes
const sizes = {
    width: 1500,
    height: 800
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 4)
scene.add( camera );




// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha : true
})

renderer.setSize( sizes.width, sizes.height );

// Controls
const controls = new OrbitControls( camera, canvas )
controls.enableDamping = true


/*Loader Object Sneakers*/
loader.load(
    'baked_mesh_modified.obj',
    function(object) {
        // Cette fonction sera appelée lorsque le chargement sera terminé
        
        // Ajoutez l'objet à votre scène
        scene.add(object);
        
        // Définir l'échelle de l'objet
        object.scale.x = 10; // Augmenter la taille sur l'axe x
        object.scale.y = 10; // Augmenter la taille sur l'axe y
        object.scale.z = 10; // Augmenter la taille sur l'axe z
        
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
