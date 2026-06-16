import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { ContactShadows, OrbitControls, Html } from '@react-three/drei'
import { useRecipe } from '../store/useRecipe'
import { UTENSIL_MAP } from './objects/Utensils'
import { INGREDIENT_MAP } from './objects/Ingredients'

const LABEL_Y = {
  pan: 0.22, pot: 0.72, bowl: 0.42, salad_bowl: 0.52, cutting_board: 0.18,
  knife: 0.12, whisk: 0.56, blender: 0.88, rolling_pin: 0.18, ladle: 0.44,
  spatula: 0.56, tongs: 0.44, baking_dish: 0.22, glass: 0.52, colander: 0.44,
  egg: 0.32, tomato: 0.28, onion: 0.30, cheese: 0.26, apple: 0.32,
  banana: 0.22, pasta_dry: 0.50, pasta_cooked: 0.18, lettuce: 0.30,
  bread: 0.28, flour: 0.42, butter: 0.22, milk: 0.54, mozzarella: 0.26,
  pizza_dough: 0.10, tomato_sauce: 0.22, basil: 0.30, eggplant: 0.36,
  zucchini: 0.18, pepper: 0.32, lemon: 0.24, croutons: 0.18,
  pancetta: 0.22, honey: 0.38, salt: 0.26, sugar: 0.28, herbs: 0.28,
  oil_bottle: 0.54, yeast: 0.16, pancake_stack: 0.24, carrot: 0.16,
}

const LABEL_STYLE = {
  color: 'rgba(237,232,220,0.65)',
  fontSize: '8px',
  fontFamily: "'SF Mono', 'JetBrains Mono', monospace",
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  whiteSpace: 'nowrap',
  padding: '3px 7px',
  background: 'rgba(7,6,10,0.72)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '4px',
  backdropFilter: 'blur(8px)',
  lineHeight: '1',
  pointerEvents: 'none',
}

// easeOutBack — slight overshoot for a satisfying land
function easeOutBack(p) {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2)
}

function Counter() {
  return (
    <group>
      <mesh position={[0, -0.07, 0]} receiveShadow>
        <boxGeometry args={[8, 0.14, 3.5]} />
        <meshStandardMaterial color="#1c140d" roughness={0.88} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.001, 0]} receiveShadow>
        <boxGeometry args={[8, 0.002, 3.5]} />
        <meshStandardMaterial color="#2a1e12" roughness={0.3} metalness={0.15} />
      </mesh>
      <mesh position={[0, -0.005, 1.74]}>
        <boxGeometry args={[8, 0.01, 0.06]} />
        <meshStandardMaterial color="#3a2810" roughness={0.6} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.9, -1.78]} receiveShadow>
        <boxGeometry args={[8, 1.8, 0.06]} />
        <meshStandardMaterial color="#100d08" roughness={0.95} metalness={0} />
      </mesh>
      {[-2, -1, 0, 1, 2].map((x, i) => (
        <mesh key={i} position={[x * 1.2, 0.88, -1.75]}>
          <boxGeometry args={[0.02, 1.7, 0.01]} />
          <meshStandardMaterial color="#1a1410" roughness={0.95} />
        </mesh>
      ))}
      {[0.2, 0.8].map((y, i) => (
        <mesh key={i} position={[0, y, -1.75]}>
          <boxGeometry args={[8, 0.015, 0.01]} />
          <meshStandardMaterial color="#1a1410" roughness={0.95} />
        </mesh>
      ))}
    </group>
  )
}

const DROP_HEIGHT = 2.2
const DURATION = 0.52
const STAGGER = 0.1

function SceneObject({ obj, index }) {
  const Component = obj.type === 'utensil' ? UTENSIL_MAP[obj.id] : INGREDIENT_MAP[obj.id]
  if (!Component) return null

  const [x, z] = obj.pos
  const labelY = LABEL_Y[obj.id] ?? 0.3
  const label = obj.id.replace(/_/g, ' ')

  const groupRef = useRef()
  const elapsed = useRef(0)
  const done = useRef(false)

  useFrame((_, delta) => {
    if (done.current) return
    elapsed.current += delta
    const t = Math.max(0, elapsed.current - index * STAGGER)
    const p = Math.min(1, t / DURATION)
    const e = easeOutBack(p)
    if (groupRef.current) {
      groupRef.current.position.y = (1 - e) * DROP_HEIGHT
    }
    if (p >= 1) done.current = true
  })

  return (
    <group ref={groupRef} position={[x, DROP_HEIGHT, z]}>
      <Component />
      <Html
        position={[0, labelY, 0]}
        center
        distanceFactor={10}
        zIndexRange={[0, 0]}
        style={LABEL_STYLE}
      >
        {label}
      </Html>
    </group>
  )
}

function Scene() {
  const step = useRecipe((s) => s.getCurrentStep())
  const stepIndex = useRecipe((s) => s.stepIndex)
  const activeId = useRecipe((s) => s.activeId)
  const objects = step?.objects ?? []

  return (
    <>
      <ambientLight intensity={0.35} />
      <hemisphereLight skyColor="#ffd070" groundColor="#0e0904" intensity={0.55} />

      <directionalLight
        position={[1, 6, 3]}
        intensity={1.6}
        color="#fff8f0"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.5}
        shadow-camera-far={18}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.0005}
      />
      <directionalLight position={[-4, 3, -1]} intensity={0.3} color="#c8d8ff" />
      <pointLight position={[0, 1.2, -2]} intensity={0.6} color="#ff9040" distance={5} />

      <Counter />

      {objects.map((obj, i) => (
        <SceneObject
          key={`${activeId}-${stepIndex}-${obj.type}-${obj.id}-${i}`}
          obj={obj}
          index={i}
        />
      ))}

      <ContactShadows
        position={[0, 0.002, 0]}
        opacity={0.55}
        scale={10}
        blur={3}
        far={1.2}
        color="#000"
      />

      <OrbitControls
        enablePan={false}
        minDistance={3.5}
        maxDistance={11}
        minPolarAngle={Math.PI / 10}
        maxPolarAngle={Math.PI / 2.3}
        dampingFactor={0.06}
        enableDamping
        target={[0, 0.3, 0]}
      />
    </>
  )
}

export function Kitchen() {
  return <Scene />
}
