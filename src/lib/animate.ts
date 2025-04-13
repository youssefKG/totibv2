import * as THREE from "three";
function animate(
  render: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  mesh: THREE.Mesh,
) {
  requestAnimationFrame(() => animate(render, scene, camera, mesh));
  mesh.rotation.y += 0.01;
  render.render(scene, camera);
}

export default animate;
