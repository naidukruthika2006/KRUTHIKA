import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import "./PhotoCard3D.css";

const photoPath = "/portfolio/assets/card-photo.svg";

function Card() {
  const group = useRef(null);
  const photo = useTexture(photoPath);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.28;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.25}>
      <group ref={group} rotation={[0.04, -0.18, 0]}>
        <mesh>
          <boxGeometry args={[2.5, 3.5, 0.12]} />
          <meshStandardMaterial color="#172033" metalness={0.65} roughness={0.28} />
        </mesh>
        <mesh position={[0, 0, 0.071]}>
          <planeGeometry args={[2.22, 3.22]} />
          <meshBasicMaterial map={photo} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

export default function PhotoCard3D() {
  return (
    <div className="photo-card-3d" aria-label="3D photo card">
      <Canvas camera={{ position: [0, 0, 6], fov: 32 }}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[3, 4, 5]} intensity={3} color="#b9d7ff" />
        <pointLight position={[-3, -2, 2]} intensity={2} color="#9b7cff" />
        <Card />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={1.2} maxPolarAngle={1.9} />
      </Canvas>
    </div>
  );
}
