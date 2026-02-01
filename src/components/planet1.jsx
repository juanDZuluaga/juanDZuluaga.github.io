    "use client";

    import { useEffect, useRef } from "react";
    import * as THREE from "three";

    export default function Planet() {
    const mountRef = useRef(null);

    useEffect(() => {
        // 🚀 Escena
        const scene = new THREE.Scene();

        // 📷 Cámara
        const camera = new THREE.PerspectiveCamera(
        75,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
        );
        camera.position.z = 3;

        // 🎥 Renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
        );
        mountRef.current.appendChild(renderer.domElement);

        // 🌍 Geometría del planeta
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(
        "https://threejs.org/examples/textures/earth_atmos_2048.jpg"
        );
        const material = new THREE.MeshStandardMaterial({ map: texture });
        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);

        // 💡 Luces
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 3, 5);
        scene.add(pointLight);

        // ⚡ Animación
        const animate = () => {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.003; // rotación continua
        renderer.render(scene, camera);
        };
        animate();

        // 📐 Responsivo
        const handleResize = () => {
        camera.aspect =
            mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        );
        };
        window.addEventListener("resize", handleResize);

        // 🧹 Limpieza
        return () => {
        window.removeEventListener("resize", handleResize);
        mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
        ref={mountRef}
        className="w-full h-[400px] sm:h-[500px] md:h-[600px]"
        />
    );
    }
