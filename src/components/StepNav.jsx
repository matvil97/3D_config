import { useState } from 'react'
import { useRecipe } from '../store/useRecipe'

function NavButton({ onClick, disabled, children, primary, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '10px 24px',
        borderRadius: 10,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-mono)',
        background: disabled
          ? 'rgba(255,255,255,0.03)'
          : primary
          ? hovered ? color : `${color}cc`
          : hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        color: disabled
          ? 'var(--text-ghost)'
          : primary
          ? '#000'
          : hovered ? 'var(--text)' : 'var(--text-dim)',
        border: primary ? 'none' : '1px solid var(--border)',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        transition: 'all 0.18s var(--ease-out-expo)',
      }}
    >
      {children}
    </button>
  )
}

export function StepNav() {
  const { stepIndex, nextStep, prevStep, getActiveRecipe, getCurrentStep } = useRecipe()
  const recipe = getActiveRecipe()
  const step = getCurrentStep()
  if (!recipe || !step) return null

  const total = recipe.steps.length
  const num = String(stepIndex + 1).padStart(2, '0')
  const tot = String(total).padStart(2, '0')

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 18,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'clamp(500px, calc(100vw - 300px), 760px)',
        background: 'var(--panel)',
        backdropFilter: 'blur(28px) saturate(160%)',
        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
        border: '1px solid var(--border)',
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 0.5px rgba(255,255,255,0.04) inset',
        zIndex: 10,
      }}
    >
      {/* Progress bar — segmented */}
      <div style={{ display: 'flex', gap: 2, padding: '0 1px' }}>
        {recipe.steps.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 2,
              background: i <= stepIndex ? recipe.color : 'rgba(255,255,255,0.08)',
              transition: `background 0.4s ${i * 0.06}s`,
            }}
          />
        ))}
      </div>

      <div style={{ padding: '18px 22px 20px' }}>
        {/* Top row: step indicator + recipe */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 26,
              fontWeight: 600,
              color: recipe.color,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              transition: 'color 0.4s',
            }}>
              {num}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-ghost)',
              letterSpacing: '0.04em',
            }}>
              / {tot}
            </span>
            <span style={{
              fontSize: 10,
              color: 'var(--text-ghost)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginLeft: 6,
            }}>
              {recipe.emoji} {recipe.name}
            </span>
          </div>

          {/* Object tags */}
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: 260 }}>
            {step.objects.slice(0, 5).map((obj, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 8.5,
                  padding: '3px 8px',
                  borderRadius: 5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: obj.type === 'utensil'
                    ? `${recipe.color}18`
                    : 'rgba(123,198,122,0.1)',
                  color: obj.type === 'utensil'
                    ? recipe.color
                    : '#7bc67a',
                  border: `1px solid ${obj.type === 'utensil' ? `${recipe.color}35` : 'rgba(123,198,122,0.25)'}`,
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                {obj.id.replace(/_/g, ' ')}
              </span>
            ))}
            {step.objects.length > 5 && (
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 8.5,
                color: 'var(--text-ghost)',
                padding: '3px 6px',
              }}>
                +{step.objects.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Main content row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontSize: 19,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: 6,
              lineHeight: 1.1,
            }}>
              {step.title}
            </h2>
            <p style={{
              fontSize: 12,
              color: 'var(--text-dim)',
              lineHeight: 1.6,
              maxWidth: 480,
            }}>
              {step.desc}
            </p>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: 8, flexShrink: 0, alignItems: 'center' }}>
            <NavButton
              onClick={prevStep}
              disabled={stepIndex === 0}
              color={recipe.color}
            >
              ← Prev
            </NavButton>
            <NavButton
              onClick={nextStep}
              disabled={stepIndex === total - 1}
              primary
              color={recipe.color}
            >
              Next →
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  )
}
