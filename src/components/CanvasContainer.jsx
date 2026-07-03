import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShapes = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={3} position={[3, 2, -8]}>
        <Sphere args={[2, 64, 64]}>
          <MeshDistortMaterial color="#ec4899" distort={0.5} speed={2} roughness={0} metalness={0.8} clearcoat={1} clearcoatRoughness={0.1} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={4} position={[-4, -2, -10]}>
        <Sphere args={[2.5, 64, 64]}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.6} speed={1.5} roughness={0} metalness={0.8} clearcoat={1} clearcoatRoughness={0.1} />
        </Sphere>
      </Float>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2} position={[0, -4, -6]}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial color="#3b82f6" distort={0.4} speed={3} roughness={0} metalness={0.8} clearcoat={1} clearcoatRoughness={0.1} />
        </Sphere>
      </Float>
      <Float speed={1} rotationIntensity={1} floatIntensity={3} position={[5, -3, -12]}>
        <Sphere args={[3, 64, 64]}>
          <MeshDistortMaterial color="#06b6d4" distort={0.3} speed={1} roughness={0} metalness={0.8} clearcoat={1} clearcoatRoughness={0.1} />
        </Sphere>
      </Float>
    </>
  );
};

const CanvasContainer = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <AnimatedShapes />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
