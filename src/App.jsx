import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useRecipe } from './store/useRecipe'
import { Kitchen } from './components/Kitchen'
import { RecipeList } from './components/RecipeList'
import { StepNav } from './components/StepNav'

export default function App() {
  const recipe = useRecipe((s) => s.getActiveRecipe())

  // Propagate active recipe color as CSS custom property
  useEffect(() => {
    if (recipe?.color) {
      document.documentElement.style.setProperty('--recipe-color', recipe.color)
    }
  }, [recipe?.color])

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>

      {/* Ambient background glow — shifts with recipe */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 55% 45% at 62% 42%, ${recipe?.color ?? '#e8a04a'}14 0%, transparent 65%)`,
          transition: 'background 0.8s var(--ease-in-out)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* 3D Canvas — behind UI */}
      <Canvas
        shadows
        camera={{ position: [0, 3.8, 7.5], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <Kitchen />
      </Canvas>

      {/* Header */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '22px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10,
        pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text)',
          }}>
            Kitchen
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--recipe-color)',
            letterSpacing: '0.05em',
            transition: 'color 0.4s',
          }}>
            3D
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--text-ghost)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Drag · Scroll
          </span>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--recipe-color)',
            letterSpacing: '0.06em',
            transition: 'color 0.4s',
          }}>
            {recipe?.emoji} {recipe?.name}
          </div>
        </div>
      </header>

      {/* Thin top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${recipe?.color ?? '#e8a04a'}90, transparent)`,
        transition: 'background 0.6s',
        zIndex: 20,
      }} />

      {/* Overlays */}
      <RecipeList />
      <StepNav />
    </div>
  )
}
