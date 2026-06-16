export function Egg() {
  return (
    <group>
      <mesh position={[0, 0.12, 0]} castShadow>
        <sphereGeometry args={[0.12, 16, 14]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.55} metalness={0} />
      </mesh>
    </group>
  )
}

export function Tomato() {
  return (
    <group>
      <mesh position={[0, 0.09, 0]} castShadow>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#e03030" roughness={0.5} metalness={0} />
      </mesh>
      <mesh position={[0, 0.18, 0]} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.04, 8]} />
        <meshStandardMaterial color="#3a7a3a" roughness={0.8} metalness={0} />
      </mesh>
    </group>
  )
}

export function Onion() {
  return (
    <group>
      <mesh position={[0, 0.1, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#d4a847" roughness={0.7} metalness={0} />
      </mesh>
      {/* onion lines */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const a = (deg * Math.PI) / 180
        return (
          <mesh key={i} position={[Math.sin(a) * 0.075, 0.12, Math.cos(a) * 0.075]} castShadow>
            <sphereGeometry args={[0.008, 8, 8]} />
            <meshStandardMaterial color="#c09030" roughness={0.8} />
          </mesh>
        )
      })}
    </group>
  )
}

export function Cheese() {
  return (
    <group>
      <mesh position={[0, 0.07, 0]} castShadow>
        <boxGeometry args={[0.32, 0.14, 0.22]} />
        <meshStandardMaterial color="#e8c84a" roughness={0.7} metalness={0} />
      </mesh>
      {/* rind edge */}
      <mesh position={[0.16, 0.07, 0]} castShadow>
        <boxGeometry args={[0.02, 0.14, 0.22]} />
        <meshStandardMaterial color="#d4a030" roughness={0.8} metalness={0} />
      </mesh>
    </group>
  )
}

export function Apple() {
  return (
    <group>
      <mesh position={[0, 0.1, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#c82020" roughness={0.4} metalness={0} />
      </mesh>
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.006, 0.006, 0.05, 8]} />
        <meshStandardMaterial color="#5a3020" roughness={0.9} />
      </mesh>
    </group>
  )
}

export function Banana() {
  return (
    <group rotation={[0, 0, -0.15]}>
      {/* approximated banana with 3 cylinders at slight angles */}
      <mesh position={[0, 0.05, 0]} rotation={[0, 0, 0.3]} castShadow>
        <cylinderGeometry args={[0.04, 0.03, 0.28, 12]} />
        <meshStandardMaterial color="#ffe234" roughness={0.5} metalness={0} />
      </mesh>
      <mesh position={[0.06, 0.07, 0]} rotation={[0, 0, 0.6]} castShadow>
        <cylinderGeometry args={[0.03, 0.02, 0.12, 10]} />
        <meshStandardMaterial color="#ffd800" roughness={0.5} metalness={0} />
      </mesh>
    </group>
  )
}

export function PastaDry() {
  // bundle of dry spaghetti
  const sticks = []
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2
    const r = 0.04 + Math.random() * 0.02
    sticks.push(
      <mesh
        key={i}
        position={[Math.cos(angle) * r, 0.18, Math.sin(angle) * r]}
        castShadow
      >
        <cylinderGeometry args={[0.004, 0.004, 0.36, 6]} />
        <meshStandardMaterial color="#e8d89a" roughness={0.8} metalness={0} />
      </mesh>
    )
  }
  return <group>{sticks}</group>
}

export function PastaCooked() {
  return (
    <group>
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 0.3,
            i * 0.025 + 0.015,
            (Math.random() - 0.5) * 0.2,
          ]}
          rotation={[0, (i * Math.PI) / 3, 0]}
          castShadow
        >
          <torusGeometry args={[0.09 + i * 0.01, 0.012, 6, 16]} />
          <meshStandardMaterial color="#d4b870" roughness={0.7} metalness={0} />
        </mesh>
      ))}
    </group>
  )
}

export function Lettuce() {
  return (
    <group>
      {[0.28, 0.22, 0.16, 0.1].map((r, i) => (
        <mesh key={i} position={[0, i * 0.04 + 0.02, 0]} castShadow>
          <cylinderGeometry args={[r, r * 0.6, 0.04, 16]} />
          <meshStandardMaterial
            color={`hsl(120, ${40 + i * 8}%, ${28 + i * 5}%)`}
            roughness={0.8}
            metalness={0}
          />
        </mesh>
      ))}
    </group>
  )
}

export function Bread() {
  return (
    <group>
      <mesh position={[0, 0.07, 0]} castShadow>
        <boxGeometry args={[0.28, 0.14, 0.15]} />
        <meshStandardMaterial color="#c07e3a" roughness={0.85} metalness={0} />
      </mesh>
      <mesh position={[0, 0.135, 0]} castShadow>
        <sphereGeometry args={[0.14, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#d4924a" roughness={0.8} metalness={0} />
      </mesh>
    </group>
  )
}

export function Flour() {
  return (
    <group>
      {/* bag shape */}
      <mesh position={[0, 0.12, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.24, 16]} />
        <meshStandardMaterial color="#f0ede6" roughness={0.9} metalness={0} />
      </mesh>
      {/* label */}
      <mesh position={[0, 0.12, 0.105]} castShadow>
        <planeGeometry args={[0.16, 0.12]} />
        <meshStandardMaterial color="#d4c8a0" roughness={0.9} />
      </mesh>
    </group>
  )
}

export function Butter() {
  return (
    <group>
      <mesh position={[0, 0.05, 0]} castShadow>
        <boxGeometry args={[0.32, 0.1, 0.14]} />
        <meshStandardMaterial color="#f5d060" roughness={0.65} metalness={0} />
      </mesh>
      {/* wrapper paper ends */}
      <mesh position={[0.16, 0.05, 0]} castShadow>
        <boxGeometry args={[0.01, 0.1, 0.14]} />
        <meshStandardMaterial color="#f0e8c8" roughness={0.9} />
      </mesh>
    </group>
  )
}

export function Milk() {
  return (
    <group>
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.32, 20]} />
        <meshStandardMaterial color="#f4f4f4" roughness={0.5} metalness={0} />
      </mesh>
      <mesh position={[0, 0.37, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.07, 0.06, 20]} />
        <meshStandardMaterial color="#dcdcdc" roughness={0.5} />
      </mesh>
      {/* label stripe */}
      <mesh position={[0, 0.19, 0.07]} castShadow>
        <planeGeometry args={[0.1, 0.14]} />
        <meshStandardMaterial color="#4a90d9" roughness={0.8} />
      </mesh>
    </group>
  )
}

export function Mozzarella() {
  return (
    <mesh position={[0, 0.08, 0]} castShadow>
      <sphereGeometry args={[0.08, 16, 12]} />
      <meshStandardMaterial color="#f8f4ea" roughness={0.6} metalness={0} />
    </mesh>
  )
}

export function PizzaDough() {
  return (
    <mesh position={[0, 0.01, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[0.55, 0.5, 0.025, 32]} />
      <meshStandardMaterial color="#e8d89a" roughness={0.85} metalness={0} />
    </mesh>
  )
}

export function TomatoSauce() {
  return (
    <group>
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.1, 20]} />
        <meshStandardMaterial color="#c0392b" roughness={0.6} metalness={0} />
      </mesh>
    </group>
  )
}

export function Basil() {
  return (
    <group>
      {/* stem */}
      <mesh position={[0, 0.08, 0]} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.16, 8]} />
        <meshStandardMaterial color="#3a6a2a" roughness={0.9} />
      </mesh>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2
        const h = 0.04 + (i % 3) * 0.06
        return (
          <mesh key={i} position={[Math.cos(a) * 0.07, h, Math.sin(a) * 0.07]} rotation={[0.4, a, 0.1]} castShadow>
            <sphereGeometry args={[0.045, 8, 6]} />
            <meshStandardMaterial color={i % 2 === 0 ? '#2d7a2d' : '#3a8c3a'} roughness={0.8} metalness={0} />
          </mesh>
        )
      })}
    </group>
  )
}

export function Eggplant() {
  return (
    <group>
      <mesh position={[0, 0.13, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 14]} />
        <meshStandardMaterial color="#5b2d8e" roughness={0.5} metalness={0} />
      </mesh>
      {/* leafy top */}
      <mesh position={[0, 0.23, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.02, 0.06, 12]} />
        <meshStandardMaterial color="#2d7a30" roughness={0.8} />
      </mesh>
    </group>
  )
}

export function Zucchini() {
  return (
    <group rotation={[0, 0.5, 0]}>
      <mesh position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.04, 0.035, 0.32, 14]} />
        <meshStandardMaterial color="#4a8c4a" roughness={0.7} metalness={0} />
      </mesh>
      <mesh position={[-0.165, 0.04, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.015, 0.04, 10]} />
        <meshStandardMaterial color="#3a7030" roughness={0.8} />
      </mesh>
    </group>
  )
}

export function Pepper() {
  return (
    <group>
      <mesh position={[0, 0.1, 0]} castShadow>
        <sphereGeometry args={[0.08, 14, 12]} />
        <meshStandardMaterial color="#e06020" roughness={0.5} metalness={0} />
      </mesh>
      <mesh position={[0, 0.185, 0]} castShadow>
        <cylinderGeometry args={[0.01, 0.01, 0.04, 8]} />
        <meshStandardMaterial color="#2d7a30" roughness={0.8} />
      </mesh>
    </group>
  )
}

export function Lemon() {
  return (
    <mesh position={[0, 0.08, 0]} castShadow>
      <sphereGeometry args={[0.075, 14, 12]} />
      <meshStandardMaterial color="#f5e040" roughness={0.6} metalness={0} />
    </mesh>
  )
}

export function Croutons() {
  const pieces = [
    [0, 0, 0], [0.05, 0.02, 0.05], [-0.06, 0.015, -0.04],
    [0.07, 0.025, -0.06], [-0.04, 0.03, 0.08],
  ]
  return (
    <group>
      {pieces.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y + 0.02, z]} rotation={[0, i * 0.5, 0]} castShadow>
          <boxGeometry args={[0.045, 0.04, 0.045]} />
          <meshStandardMaterial color="#c8903a" roughness={0.85} metalness={0} />
        </mesh>
      ))}
    </group>
  )
}

export function Pancetta() {
  const pieces = [[0, 0, 0], [0.12, 0, 0.06], [-0.09, 0, -0.08], [0.05, 0, -0.12]]
  return (
    <group>
      {pieces.map(([x, y, z], i) => (
        <mesh key={i} position={[x, 0.025, z]} rotation={[0, i * 0.4, 0]} castShadow>
          <boxGeometry args={[0.14, 0.04, 0.09]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#c05060' : '#e07080'} roughness={0.6} metalness={0} />
        </mesh>
      ))}
    </group>
  )
}

export function Honey() {
  return (
    <group>
      <mesh position={[0, 0.12, 0]} castShadow>
        <cylinderGeometry args={[0.055, 0.065, 0.18, 20]} />
        <meshStandardMaterial color="#e8a020" roughness={0.2} metalness={0} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.055, 0.04, 16]} />
        <meshStandardMaterial color="#c07010" roughness={0.4} />
      </mesh>
    </group>
  )
}

export function Salt() {
  return (
    <group>
      <mesh position={[0, 0.07, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.5} metalness={0} />
      </mesh>
      <mesh position={[0, 0.13, 0]} castShadow>
        <cylinderGeometry args={[0.025, 0.04, 0.03, 16]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
      </mesh>
    </group>
  )
}

export function Sugar() {
  return (
    <group>
      <mesh position={[0, 0.08, 0]} castShadow>
        <boxGeometry args={[0.14, 0.12, 0.1]} />
        <meshStandardMaterial color="#f8f4f0" roughness={0.7} metalness={0} />
      </mesh>
    </group>
  )
}

export function Herbs() {
  const count = 8
  return (
    <group>
      {/* bundle stem */}
      <mesh position={[0, 0.06, 0]} castShadow>
        <cylinderGeometry args={[0.012, 0.012, 0.12, 8]} />
        <meshStandardMaterial color="#5a3a20" roughness={0.9} />
      </mesh>
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2
        const r = 0.06 + (i % 2) * 0.02
        const h = 0.08 + (i % 3) * 0.04
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * r, h, Math.sin(a) * r]}
            rotation={[0.5, a, 0.15]}
            castShadow
          >
            <boxGeometry args={[0.06, 0.008, 0.025]} />
            <meshStandardMaterial color={i % 3 === 0 ? '#2d7a2d' : '#3a8c3a'} roughness={0.8} metalness={0} />
          </mesh>
        )
      })}
    </group>
  )
}

export function OilBottle() {
  return (
    <group>
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.055, 0.065, 0.28, 20]} />
        <meshStandardMaterial color="#b8c858" roughness={0.1} metalness={0} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0.36, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.04, 0.06, 12]} />
        <meshStandardMaterial color="#909060" roughness={0.4} />
      </mesh>
    </group>
  )
}

export function Yeast() {
  return (
    <mesh position={[0, 0.04, 0]} castShadow>
      <boxGeometry args={[0.08, 0.06, 0.06]} />
      <meshStandardMaterial color="#c8b070" roughness={0.7} metalness={0} />
    </mesh>
  )
}

export function PancakeStack() {
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, i * 0.045 + 0.02, 0]} castShadow>
          <cylinderGeometry args={[0.2 - i * 0.015, 0.22 - i * 0.01, 0.04, 24]} />
          <meshStandardMaterial color="#d4904a" roughness={0.7} metalness={0} />
        </mesh>
      ))}
    </group>
  )
}

export function Carrot() {
  return (
    <group rotation={[0, 0.3, 0]}>
      <mesh position={[0, 0.04, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.015, 0.04, 0.22, 12]} />
        <meshStandardMaterial color="#e86020" roughness={0.7} metalness={0} />
      </mesh>
      <mesh position={[-0.12, 0.04, 0]} castShadow>
        <cylinderGeometry args={[0.01, 0.01, 0.06, 8]} />
        <meshStandardMaterial color="#2d7a30" roughness={0.8} />
      </mesh>
    </group>
  )
}

// Map ingredient id → component
export const INGREDIENT_MAP = {
  egg: Egg,
  tomato: Tomato,
  onion: Onion,
  cheese: Cheese,
  apple: Apple,
  banana: Banana,
  pasta_dry: PastaDry,
  pasta_cooked: PastaCooked,
  lettuce: Lettuce,
  bread: Bread,
  flour: Flour,
  butter: Butter,
  milk: Milk,
  mozzarella: Mozzarella,
  pizza_dough: PizzaDough,
  tomato_sauce: TomatoSauce,
  basil: Basil,
  eggplant: Eggplant,
  zucchini: Zucchini,
  pepper: Pepper,
  lemon: Lemon,
  croutons: Croutons,
  pancetta: Pancetta,
  honey: Honey,
  salt: Salt,
  sugar: Sugar,
  herbs: Herbs,
  oil_bottle: OilBottle,
  yeast: Yeast,
  pancake_stack: PancakeStack,
  carrot: Carrot,
}
