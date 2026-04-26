import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function MorphingObject() {
  const ref = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.4, 4]}>
        <MeshDistortMaterial
          color={isDark ? "#3b82f6" : "#93c5fd"}
          emissive={isDark ? "#06b6d4" : "#dbeafe"}
          emissiveIntensity={isDark ? 0.55 : 0.18}
          roughness={isDark ? 0.15 : 0.45}
          metalness={isDark ? 0.95 : 0.25}
          distort={0.4}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
}

function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null);
  useFrame((s) => {
    if (ref.current) ref.current.position.z = (s.clock.elapsedTime * 0.5) % 2;
  });
  return (
    <gridHelper
      ref={ref}
      args={[40, 40, "#06b6d4", "#1e3a8a"]}
      position={[0, -2.5, 0]}
    />
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#93c5fd" transparent opacity={0.7} />
    </points>
  );
}

export function Scene3D() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={isDark ? 0.3 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 1.4 : 0.9} color={isDark ? "#06b6d4" : "#ffffff"} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color={isDark ? "#3b82f6" : "#dbeafe"} />
        <MorphingObject />
        {isDark ? (
          <>
            <Stars radius={50} depth={50} count={3000} factor={4} fade speed={1.5} />
            <GridFloor />
          </>
        ) : (
          <Particles />
        )}
      </Suspense>
    </Canvas>
  );
}
