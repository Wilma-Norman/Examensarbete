import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 
const material = new THREE.MeshStandardMaterial( { 
    color: 0x049ef4,
    roughness: 0.4,
    metalness: 0.6,
} ); 
const torusKnot = new THREE.Mesh( geometry, material ); 
scene.add( torusKnot );

camera.position.x = 50;

function animate() {
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    ring.rotation.x += 0.01;
    ring.rotation.y += 0.005;
    ring.rotation.z += 0.01;
    moon.rotation.y += 0.01;
    earth.rotation.y += 0.002;
   
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500)
scene.add(hemiLight)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)
scene.add(pointLight)


//const ambientLight = new THREE.AmbientLight(0xfffff, 0.5);
//scene.add(ambientLight);

//const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//directionalLight.position.set(5, 5, 5);
//scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//controls.dampingFactor = 0.03;


const moon = new THREE.Mesh(
    new THREE.SphereGeometry(10, 32, 32),
    new THREE.MeshStandardMaterial({
      color:  0xff69b4,
      wireframe: true,
    })
  );
  
  scene.add(moon)

  moon.position.z = 30;
moon.position.setX(30);

const ring = new THREE.Mesh(
    new THREE.TorusGeometry( 10, 3, 16, 100 ),
    new THREE.MeshBasicMaterial( {        
        color: 0xfff,
        wireframe: true
    })
)


scene.add(ring)
ring.position.z = 50;
ring.position.setY(10);



const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('./public/earth.jpg'); 

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(8, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture
  })
);

scene.add(earth);
earth.position.x = 50;
earth.position.setX(-50)



function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color: 0xffff})
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 200 ))
  
    star.position.set(x, y, z);
    scene.add(star)
  }

  Array(1000).fill().forEach(addStar)
  



  