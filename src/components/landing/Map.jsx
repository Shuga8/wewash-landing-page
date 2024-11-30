import React, { useEffect } from "react";
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.161/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.161/examples/jsm/controls/OrbitControls.js";
import default_img from "../../assets/map/textures/00_earthmap1k.jpg";
import lights_img from "../../assets/map/textures/03_earthlights1k.jpg";
import cloud_img from "../../assets/map/textures/04_earthcloudmap.jpg";
import alpha_img from "../../assets/map/textures/05_earthcloudmaptrans.jpg";

import getStarfield from "../../assets/map/getStarfield";
import { getFresnelMat } from "../../assets/map/getFresnelMat";

const Map = () => {
  useEffect(() => {
    const mapDiv = document.querySelector("#map");
    const existingCanvas = mapDiv.querySelector("canvas");

    if (existingCanvas) {
      console.warn("Canvas already exists, skipping renderer setup.");
      return;
    }

    const w = mapDiv.scrollWidth;
    const h = mapDiv.scrollHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    mapDiv.appendChild(renderer.domElement);
    new OrbitControls(camera, renderer.domElement);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
    scene.add(earthGroup);

    new OrbitControls(camera, renderer.domElement);

    const detail = 12;
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.IcosahedronGeometry(1, detail);
    const material = new THREE.MeshStandardMaterial({
      map: loader.load(default_img),
    });
    const earthMesh = new THREE.Mesh(geometry, material);
    earthGroup.add(earthMesh);

    const lightMat = new THREE.MeshBasicMaterial({
      map: loader.load(lights_img),
      blending: THREE.AdditiveBlending,
    });

    const lightsMesh = new THREE.Mesh(geometry, lightMat);
    earthGroup.add(lightsMesh);

    const cloudMat = new THREE.MeshStandardMaterial({
      map: loader.load(cloud_img),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      alphaMap: loader.load(alpha_img),
    });

    const cloudMesh = new THREE.Mesh(geometry, cloudMat);
    cloudMesh.scale.setScalar(1.003);
    earthGroup.add(cloudMesh);

    const stars = getStarfield({ numStars: 2000 });
    scene.add(stars);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    const fresnelMat = getFresnelMat();
    const glowMesh = new THREE.Mesh(geometry, fresnelMat);
    glowMesh.scale.setScalar(1.01);
    earthGroup.add(glowMesh);

    function animate() {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.002;
      lightsMesh.rotation.y += 0.002;
      cloudMesh.rotation.y += 0.0028;
      glowMesh.rotation.y += 0.002;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      mapDiv.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            * {
              margin: 0 !important;
            }
          `,
        }}
      />
      <div className="relative w-[100vw] h-[100vh]">
        <div
          className="w-[100%] h-[100%] absolute z-[2] top-0 left-0"
          id="map"
        ></div>

        {/* <div className="overlay absolute z-[1000] w-[100%] h-[100%] top-0 left-0 bg-black opacity-25"></div> */}
      </div>
    </>
  );
};

export default Map;
