import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Stars, TorusKnot, Sphere } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function MorphingObject() {
  const ref = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.18;
    ref.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.6}>
      <Icosahedron ref={ref} args={[1.5, 5]}>
        <MeshDistortMaterial
          color={isDark ? "#d946ef" : "#f0abfc"}
          emissive={isDark ? "#22d3ee" : "#fce7f3"}
          emissiveIntensity={isDark ? 0.7 : 0.25}
          roughness={isDark ? 0.1 : 0.4}
          metalness={isDark ? 0.95 : 0.3}
          distort={0.5}
          speed={2.4}
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitingKnot() {
  const ref = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime * 0.6;
    ref.current.position.x = Math.cos(t) * 3.2;
    ref.current.position.z = Math.sin(t) * 3.2;
    ref.current.position.y = Math.sin(t * 1.5) * 0.6;
    ref.current.rotation.x = t;
    ref.current.rotation.y = t * 1.2;
  });
  return (
    <TorusKnot ref={ref} args={[0.35, 0.12, 128, 16]}>
      <meshStandardMaterial
        color={isDark ? "#22d3ee" : "#7dd3fc"}
        emissive={isDark ? "#d946ef" : "#fbcfe8"}
        emissiveIntensity={isDark ? 0.8 : 0.3}
        metalness={0.9}
        roughness={0.15}
      />
    </TorusKnot>
  );
}

function FloatingSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime + position[0]) * 0.4;
  });
  return (
    <Float speed={2} floatIntensity={1.2}>
      <Sphere ref={ref} args={[0.18, 24, 24]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </Sphere>
    </Float>
  );
}

function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null);
  useFrame((s) => {
    if (ref.current) ref.current.position.z = (s.clock.elapsedTime * 0.6) % 2;
  });
  return (
    <gridHelper
      ref={ref}
      args={[60, 60, "#22d3ee", "#7c3aed"]}
      position={[0, -2.6, 0]}
    />
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }
    return arr;
  }, []);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.06;
      ref.current.rotation.x = s.clock.elapsedTime * 0.02;
    }
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
      <pointsMaterial size={0.045} color="#d946ef" transparent opacity={0.75} />
    </points>
  );
}

export function Scene3D() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={isDark ? 0.35 : 0.85} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 1.6 : 1} color={isDark ? "#22d3ee" : "#ffffff"} />
        <pointLight position={[-10, -10, -5]} intensity={1} color={isDark ? "#d946ef" : "#fce7f3"} />
        <pointLight position={[0, 5, -8]} intensity={0.8} color={isDark ? "#a855f7" : "#c4b5fd"} />

        <MorphingObject />
        <OrbitingKnot />

        <FloatingSphere position={[-2.5, 1, -1]} color={isDark ? "#22d3ee" : "#7dd3fc"} />
        <FloatingSphere position={[2.6, -1.2, -0.5]} color={isDark ? "#d946ef" : "#f0abfc"} />
        <FloatingSphere position={[1.5, 1.8, -2]} color={isDark ? "#a855f7" : "#c4b5fd"} />

        {isDark ? (
          <>
            <Stars radius={60} depth={60} count={4000} factor={4.5} fade speed={1.8} />
            <GridFloor />
          </>
        ) : (
          <Particles />
        )}
      </Suspense>
    </Canvas>
  );
}
