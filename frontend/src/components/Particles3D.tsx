import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

type SprinklesProps = {
  count?: number;
  radius?: number;
};

function cssHslVarToThreeColor(varName: string, fallbackHex: string): THREE.Color {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  // Expect format like: "197 70% 45%"
  const match = raw.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);
  if (!match) return new THREE.Color(fallbackHex);
  const h = parseFloat(match[1]);
  const s = parseFloat(match[2]) / 100;
  const l = parseFloat(match[3]) / 100;
  const color = new THREE.Color();
  color.setHSL(h / 360, s, l);
  return color;
}

function Sprinkles({ count = 1000, radius = 18 }: SprinklesProps) {
  const pointsRef = useRef<THREE.Points>(null);

    const { positions, colors, sizes, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const phs = new Float32Array(count);

    const primary = cssHslVarToThreeColor('--royal-blue', '#1b75bb');

    for (let i = 0; i < count; i++) {
      // Random point inside a sphere
      const r = Math.cbrt(Math.random()) * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos[i * 3 + 0] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color near brand blue, darker overall
      const c = primary.clone();
      cols[i * 3 + 0] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;

      siz[i] = 1.0; // uniform, not used when sizeAttenuation is false
      phs[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, colors: cols, sizes: siz, phases: phs };
  }, [count, radius]);

  const materialRef = useRef<THREE.PointsMaterial>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.06;
      pointsRef.current.rotation.x = Math.sin(t * 0.25) * 0.12;
      pointsRef.current.position.z = Math.sin(t * 0.2) * 0.5;
    }
    // Keep size constant for uniform look
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial ref={materialRef} vertexColors size={2.4} sizeAttenuation={false} transparent opacity={0.9} depthWrite={false} />
    </points>
  );
}

export default function Particles3D() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <Sprinkles />
      </Canvas>
    </div>
  );
}


