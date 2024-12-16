import React, { useEffect } from "react";
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.161/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.161/examples/jsm/controls/OrbitControls.js";

import getStarfield from "../../assets/map/getStarfield";

const StarsLayout = () => {
  useEffect(() => {
    const mapDiv = document.querySelector("#map");
    const existingCanvas = mapDiv.querySelector("canvas");
    if (existingCanvas) {
      console.warn("Canvas already exists, skipping renderer setup.");
      return;
    }
    const { width: w, height: h } = mapDiv.getBoundingClientRect();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 2.5;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mapDiv.appendChild(renderer.domElement);
    new OrbitControls(camera, renderer.domElement);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    const stars = getStarfield({ numStars: 2000 });
    scene.add(stars);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    function handleWindowResize() {
      const { width, height } = mapDiv.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (window.matchMedia("(max-width: 600px)").matches) {
        camera.position.z = 3.3;
      } else {
        camera.position.z = 2.5;
      }
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      mapDiv.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="relative min-w-[100vw] h-[200vh]">
        <div
          className="w-[100%] h-[100%] absolute z-[2] top-0 left-0"
          id="map"
        ></div>
      </div>
    </>
  );
};

export default StarsLayout;
