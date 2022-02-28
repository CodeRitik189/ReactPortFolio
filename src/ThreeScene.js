import React, { Component } from 'react';
import * as THREE from 'three';
import  './index.css';
class ThreeScene extends Component{
  componentDidMount(){
    const { innerWidth: width, innerHeight: height } = window;
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4
    window.addEventListener('scroll', onscroll);
    onscroll=()=>{
        const t = document.body.getBoundingClientRect().top;
        this.camera.position.z = t * -0.008;
        this.camera.rotation.x = t * 0.00005;
        this.camera.rotation.y = t * 0.00005;
    }
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //ADD CUBE
    //const geometry = new THREE.BoxGeometry(1, 1, 1)
    //const material = new THREE.MeshBasicMaterial({ color: '#433F81'  })
    //this.cube = new THREE.Mesh(geometry, material)
    //this.scene.add(this.cube)
    let i=100;
    while(i--){
    const geometry = new THREE.TextureLoader().load('curlybracket.png');
    const star = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), new THREE.MeshBasicMaterial({ map: geometry }));
    const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(130));

    star.position.set(x, y, z);
    this.scene.add(star);
    const geometry2 = new THREE.TextureLoader().load('parenthesis.png');
    const star2 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), new THREE.MeshBasicMaterial({ map: geometry2}));
    const [x2, y2, z2] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(130));
    star2.position.set(x2, y2, z2);
    this.scene.add(star2);

    const geometry3 = new THREE.TextureLoader().load('semicolon.jpg');
    const star3 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), new THREE.MeshBasicMaterial({ map: geometry3}));
     const [x3, y3, z3] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(130));
    star3.position.set(x3, y3, z3);
    this.scene.add(star3);
    }
    this.start()
  }
componentDidUpdate(prevProps, prevState){
  if(prevProps.width!==this.props.width){
    const { innerWidth: width, innerHeight: height } = window;
     this.camera.aspect = width/height;
     this.renderer.setSize(width, height)
  }
}
componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
   //this.cube.rotation.x += 0.01
   //this.cube.rotation.y += 0.01
   for(let i=0;i<300;i++){
    this.scene.children[i].rotation.x+=0.03;
    this.scene.children[i].rotation.y+=0.01;
    this.scene.children[i].rotation.z+=0.03;
   }
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div style={{position:"fixed" ,width: '400px', height: '400px',zIndex:"-2" }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeScene