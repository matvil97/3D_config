const STEEL = { color: '#c8c8c8', roughness: 0.2, metalness: 0.8 }
const STEEL_DARK = { color: '#888', roughness: 0.3, metalness: 0.7 }
const WOOD = { color: '#8B5E3C', roughness: 0.9, metalness: 0 }
const WOOD_LIGHT = { color: '#c49a6c', roughness: 0.85, metalness: 0 }
const BLACK = { color: '#1a1a1a', roughness: 0.6, metalness: 0.1 }
const WHITE_CERAMIC = { color: '#f0ede6', roughness: 0.5, metalness: 0 }
const GLASS_MAT = { color: '#a8d4e6', roughness: 0.05, metalness: 0.0, transparent: true, opacity: 0.6 }

export function Pan() {
  return (
    <group>
      {/* pan body */}
      <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.55, 0.5, 0.08, 32]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      {/* rim */}
      <mesh position={[0, 0.09, 0]} castShadow>
        <torusGeometry args={[0.53, 0.015, 8, 32]} />
        <meshStandardMaterial {...STEEL_DARK} />
      </mesh>
      {/* handle */}
      <mesh position={[0.78, 0.04, 0]} rotation={[0, 0, 0.1]} castShadow>
        <boxGeometry args={[0.5, 0.035, 0.05]} />
        <meshStandardMaterial {...BLACK} />
      </mesh>
      <mesh position={[0.61, 0.04, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.05, 12]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial {...STEEL_DARK} />
      </mesh>
    </group>
  )
}

export function Pot() {
  return (
    <group>
      <mesh position={[0, 0.22, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.38, 0.35, 0.44, 32]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      {/* lid */}
      <mesh position={[0, 0.46, 0]} castShadow>
        <cylinderGeometry args={[0.39, 0.37, 0.04, 32]} />
        <meshStandardMaterial {...STEEL_DARK} />
      </mesh>
      <mesh position={[0, 0.50, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.06, 16]} />
        <meshStandardMaterial {...BLACK} />
      </mesh>
      {/* handles */}
      {[-1, 1].map((s, i) => (
        <group key={i} position={[s * 0.42, 0.26, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.06, 0.08, 0.04]} />
            <meshStandardMaterial {...STEEL_DARK} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

export function Bowl() {
  return (
    <group>
      <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.38, 0.2, 0.24, 32]} />
        <meshStandardMaterial {...WHITE_CERAMIC} />
      </mesh>
      <mesh position={[0, 0.24, 0]} castShadow>
        <torusGeometry args={[0.36, 0.02, 8, 32]} />
        <meshStandardMaterial {...WHITE_CERAMIC} />
      </mesh>
    </group>
  )
}

export function SaladBowl() {
  return (
    <group>
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.28, 0.3, 32]} />
        <meshStandardMaterial color="#3a6b3a" roughness={0.7} metalness={0} />
      </mesh>
      <mesh position={[0, 0.3, 0]} castShadow>
        <torusGeometry args={[0.48, 0.02, 8, 32]} />
        <meshStandardMaterial color="#2d5230" roughness={0.8} metalness={0} />
      </mesh>
    </group>
  )
}

export function CuttingBoard() {
  return (
    <group>
      <mesh position={[0, 0.02, 0]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 0.04, 0.9]} />
        <meshStandardMaterial {...WOOD_LIGHT} />
      </mesh>
      {/* wood grain lines */}
      {[-0.3, 0, 0.3].map((z, i) => (
        <mesh key={i} position={[0, 0.041, z]}>
          <boxGeometry args={[1.45, 0.001, 0.015]} />
          <meshStandardMaterial color="#a07040" roughness={0.9} />
        </mesh>
      ))}
      {/* handle notch */}
      <mesh position={[0.8, 0.025, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
        <meshStandardMaterial {...WOOD} />
      </mesh>
    </group>
  )
}

export function Knife() {
  return (
    <group rotation={[0, 0.3, 0]}>
      {/* blade */}
      <mesh position={[0.25, 0.015, 0]} castShadow>
        <boxGeometry args={[0.6, 0.008, 0.055]} />
        <meshStandardMaterial color="#d8d8d8" roughness={0.1} metalness={0.95} />
      </mesh>
      {/* bolster */}
      <mesh position={[-0.07, 0.015, 0]} castShadow>
        <boxGeometry args={[0.06, 0.025, 0.06]} />
        <meshStandardMaterial {...STEEL_DARK} />
      </mesh>
      {/* handle */}
      <mesh position={[-0.22, 0.015, 0]} castShadow>
        <boxGeometry args={[0.28, 0.022, 0.05]} />
        <meshStandardMaterial {...WOOD} />
      </mesh>
    </group>
  )
}

export function Whisk() {
  return (
    <group>
      {/* handle */}
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.025, 0.02, 0.3, 12]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      {/* wires */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const angle = (deg * Math.PI) / 180
        return (
          <mesh key={i} position={[Math.sin(angle) * 0.05, 0.06, Math.cos(angle) * 0.05]} castShadow>
            <torusGeometry args={[0.065, 0.005, 6, 16, Math.PI]} />
            <meshStandardMaterial {...STEEL} />
          </mesh>
        )
      })}
      {/* collar */}
      <mesh position={[0, 0.10, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.025, 0.04, 12]} />
        <meshStandardMaterial {...STEEL_DARK} />
      </mesh>
    </group>
  )
}

export function Blender() {
  return (
    <group>
      {/* base */}
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.26, 0.16, 32]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.2} />
      </mesh>
      {/* jar */}
      <mesh position={[0, 0.38, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.18, 0.44, 32]} />
        <meshStandardMaterial color="#c8e8f0" roughness={0.05} metalness={0} transparent opacity={0.65} />
      </mesh>
      {/* lid */}
      <mesh position={[0, 0.62, 0]} castShadow>
        <cylinderGeometry args={[0.21, 0.2, 0.04, 32]} />
        <meshStandardMaterial color="#222" roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.66, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.06, 16]} />
        <meshStandardMaterial color="#444" roughness={0.5} />
      </mesh>
    </group>
  )
}

export function RollingPin() {
  return (
    <group rotation={[0, 0.5, 0]}>
      <mesh position={[0, 0.035, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.045, 0.7, 20]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial {...WOOD_LIGHT} />
      </mesh>
      {/* handles */}
      {[-1, 1].map((s, i) => (
        <mesh key={i} position={[s * 0.42, 0.035, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.1, 12]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial {...WOOD} />
        </mesh>
      ))}
    </group>
  )
}

export function Ladle() {
  return (
    <group rotation={[0, 0.2, 0]}>
      {/* handle */}
      <mesh position={[0.3, 0.2, 0]} rotation={[0, 0, -0.4]} castShadow>
        <cylinderGeometry args={[0.018, 0.015, 0.55, 10]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      {/* cup */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
    </group>
  )
}

export function Spatula() {
  return (
    <group rotation={[0, -0.3, 0]}>
      {/* handle */}
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.018, 0.4, 10]} />
        <meshStandardMaterial {...BLACK} />
      </mesh>
      {/* blade */}
      <mesh position={[0, 0.02, 0]} castShadow>
        <boxGeometry args={[0.1, 0.01, 0.14]} />
        <meshStandardMaterial color="#333" roughness={0.7} metalness={0.1} />
      </mesh>
    </group>
  )
}

export function Tongs() {
  return (
    <group rotation={[0, 0.4, 0]}>
      {[0.02, -0.02].map((z, i) => (
        <group key={i} position={[0, 0, z]}>
          <mesh position={[0, 0.18, 0]} castShadow>
            <cylinderGeometry args={[0.012, 0.010, 0.35, 8]} />
            <meshStandardMaterial {...STEEL} />
          </mesh>
          <mesh position={[0, 0.01, z * 3]} rotation={[0.4 * (i ? 1 : -1), 0, 0]} castShadow>
            <boxGeometry args={[0.015, 0.08, 0.012]} />
            <meshStandardMaterial {...STEEL} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

export function BakingDish() {
  return (
    <group>
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.0, 0.1, 0.65]} />
        <meshStandardMaterial color="#b5472a" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* rim */}
      <mesh position={[0, 0.11, 0]} castShadow>
        <boxGeometry args={[1.06, 0.02, 0.7]} />
        <meshStandardMaterial color="#a03a20" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* handles */}
      {[-1, 1].map((s, i) => (
        <mesh key={i} position={[s * 0.58, 0.10, 0]} castShadow>
          <boxGeometry args={[0.1, 0.04, 0.1]} />
          <meshStandardMaterial color="#8a2a12" roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

export function Glass() {
  return (
    <group>
      <mesh position={[0, 0.18, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.065, 0.36, 24]} />
        <meshStandardMaterial {...GLASS_MAT} />
      </mesh>
      {/* base */}
      <mesh position={[0, 0.01, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.075, 0.075, 0.02, 24]} />
        <meshStandardMaterial color="#a8d4e6" roughness={0.1} metalness={0} />
      </mesh>
    </group>
  )
}

export function Colander() {
  return (
    <group>
      <mesh position={[0, 0.16, 0]} castShadow>
        <cylinderGeometry args={[0.38, 0.28, 0.22, 32]} />
        <meshStandardMaterial color="#c0a0a0" roughness={0.4} metalness={0.4} />
      </mesh>
      {/* feet */}
      {[0, 120, 240].map((deg, i) => {
        const a = (deg * Math.PI) / 180
        return (
          <mesh key={i} position={[Math.sin(a) * 0.2, 0.03, Math.cos(a) * 0.2]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
            <meshStandardMaterial color="#a08080" roughness={0.5} metalness={0.3} />
          </mesh>
        )
      })}
    </group>
  )
}

// Map utensil id → component
export const UTENSIL_MAP = {
  pan: Pan,
  pot: Pot,
  bowl: Bowl,
  salad_bowl: SaladBowl,
  cutting_board: CuttingBoard,
  knife: Knife,
  whisk: Whisk,
  blender: Blender,
  rolling_pin: RollingPin,
  ladle: Ladle,
  spatula: Spatula,
  tongs: Tongs,
  baking_dish: BakingDish,
  glass: Glass,
  colander: Colander,
}
