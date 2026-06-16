import { useMemo } from 'react'
import * as THREE from 'three'
import { useConfig, MATERIALS } from '../store/useConfig'

function useMat(zone) {
  const { color, material } = useConfig((s) => s[zone])
  const { roughness, metalness } = MATERIALS[material]
  return { color, roughness, metalness }
}

// Shoe profile silhouette (side view, heel=left/negative X, toe=right/positive X)
function buildUpperShape() {
  const s = new THREE.Shape()
  s.moveTo(-0.72, 0.12)           // heel base
  s.lineTo(-0.74, 0.48)           // heel back wall
  s.quadraticCurveTo(-0.7, 0.58, -0.58, 0.60)  // collar curve
  s.quadraticCurveTo(-0.3, 0.58, -0.05, 0.40)   // throat slope
  s.quadraticCurveTo(0.25, 0.32,  0.55, 0.28)   // vamp
  s.quadraticCurveTo(0.70, 0.24,  0.76, 0.18)   // toe box front
  s.lineTo(0.76, 0.12)            // toe bottom edge
  s.lineTo(-0.72, 0.12)           // back along midsole
  return s
}

function buildSoleShape() {
  const s = new THREE.Shape()
  s.moveTo(-0.78, 0.00)           // heel bottom-back
  s.lineTo(-0.78, 0.13)           // heel back wall
  s.lineTo(-0.72, 0.13)           // heel midsole ledge
  s.lineTo(0.76, 0.13)            // along midsole
  s.lineTo(0.80, 0.06)            // toe tip
  s.lineTo(0.80, 0.00)            // toe bottom
  s.lineTo(-0.78, 0.00)           // back
  return s
}

const EXTRUDE = { depth: 0.54, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.02, bevelSegments: 2 }
const EXTRUDE_SOLE = { depth: 0.58, bevelEnabled: false }

function UpperBody() {
  const mat = useMat('upper')
  const geo = useMemo(() => new THREE.ExtrudeGeometry(buildUpperShape(), EXTRUDE), [])
  return (
    <mesh geometry={geo} position={[0, 0, -0.27]} castShadow receiveShadow>
      <meshStandardMaterial {...mat} />
    </mesh>
  )
}

function Sole() {
  const mat = useMat('sole')
  const geo = useMemo(() => new THREE.ExtrudeGeometry(buildSoleShape(), EXTRUDE_SOLE), [])
  return (
    <mesh geometry={geo} position={[0, 0, -0.29]} castShadow receiveShadow>
      <meshStandardMaterial {...mat} />
    </mesh>
  )
}

// 3 diagonal slash boxes that form a "swoosh-like" mark on each side
const SLASH_DATA = [
  { x: -0.2, y: 0.20, w: 0.55, h: 0.055, rot: -0.18 },
  { x:  0.0, y: 0.26, w: 0.42, h: 0.045, rot: -0.12 },
  { x:  0.16, y: 0.31, w: 0.28, h: 0.036, rot: -0.06 },
]

function Accents() {
  const mat = useMat('accent')

  return (
    <group>
      {/* tongue — centered in shoe width (shoe spans z: -0.27 to +0.27) */}
      <mesh position={[-0.04, 0.46, 0]} castShadow>
        <boxGeometry args={[0.26, 0.12, 0.22]} />
        <meshStandardMaterial {...mat} />
      </mesh>

      {/* side stripes — thin slashes on left face (z=+0.27) and right face (z=-0.27) */}
      {SLASH_DATA.map((s, i) => (
        <group key={i}>
          {/* left face */}
          <mesh position={[s.x, s.y, 0.275]} rotation={[0, 0, s.rot]} castShadow>
            <boxGeometry args={[s.w, s.h, 0.012]} />
            <meshStandardMaterial {...mat} />
          </mesh>
          {/* right face */}
          <mesh position={[s.x, s.y, -0.275]} rotation={[0, 0, s.rot]} castShadow>
            <boxGeometry args={[s.w, s.h, 0.012]} />
            <meshStandardMaterial {...mat} />
          </mesh>
        </group>
      ))}

      {/* lace eyelets — 4 pairs */}
      {[0.40, 0.20, 0.0, -0.20].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.40, 0.19]} castShadow>
            <cylinderGeometry args={[0.018, 0.018, 0.04, 8]} />
            <meshStandardMaterial color="#b0b0b0" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh position={[x, 0.40, -0.19]} castShadow>
            <cylinderGeometry args={[0.018, 0.018, 0.04, 8]} />
            <meshStandardMaterial color="#b0b0b0" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* lace thread */}
          <mesh position={[x, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.008, 0.008, 0.36, 6]} />
            <meshStandardMaterial color="#f5f5f5" roughness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

export function Sneaker() {
  // No auto-rotation — OrbitControls handles interaction
  // rotation.y ≈ 63° shows left-side profile with heel at left, toe at right
  return (
    <group position={[0, -0.55, 0]} scale={1.55} rotation={[0.05, 1.1, 0]}>
      <Sole />
      <UpperBody />
      <Accents />
    </group>
  )
}
