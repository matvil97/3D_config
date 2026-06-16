import { useState } from 'react'
import { useRecipe } from '../store/useRecipe'

const DIFF_LABEL = { Facile: 'Easy', Moyen: 'Medium', Difficile: 'Hard' }

function RecipeItem({ recipe, isActive, onClick, index }) {
  const [hovered, setHovered] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 18px 10px 16px',
        borderLeft: `2px solid ${isActive ? recipe.color : 'transparent'}`,
        background: isActive
          ? `linear-gradient(90deg, ${recipe.color}0d, transparent)`
          : hovered
          ? 'rgba(255,255,255,0.025)'
          : 'transparent',
        transition: 'all 0.22s var(--ease-out-expo)',
        textAlign: 'left',
        cursor: 'pointer',
      }}
    >
      {/* Index number */}
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: isActive ? recipe.color : 'var(--text-ghost)',
        flexShrink: 0,
        width: 18,
        transition: 'color 0.3s',
        letterSpacing: '0.05em',
      }}>
        {num}
      </span>

      {/* Emoji */}
      <span style={{ fontSize: 16, flexShrink: 0, lineHeight: 1 }}>
        {recipe.emoji}
      </span>

      {/* Name + meta */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: 11.5,
          fontWeight: isActive ? 500 : 400,
          color: isActive ? 'var(--text)' : hovered ? 'rgba(237,232,220,0.72)' : 'var(--text-dim)',
          letterSpacing: isActive ? '-0.01em' : '0',
          transition: 'color 0.2s, font-weight 0.2s',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginBottom: 2,
        }}>
          {recipe.name}
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          color: 'var(--text-ghost)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {recipe.duration}
        </p>
      </div>

      {/* Difficulty dot */}
      <div style={{
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: isActive ? recipe.color : 'rgba(255,255,255,0.12)',
        transition: 'background 0.3s',
        flexShrink: 0,
      }} />
    </button>
  )
}

export function RecipeList() {
  const { recipes, activeId, setRecipe } = useRecipe()

  return (
    <aside
      style={{
        position: 'absolute',
        top: '50%',
        left: 18,
        transform: 'translateY(-50%)',
        width: 230,
        maxHeight: '72vh',
        background: 'var(--panel)',
        backdropFilter: 'blur(28px) saturate(160%)',
        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 0.5px rgba(255,255,255,0.04) inset',
        zIndex: 10,
      }}
    >
      {/* Panel header */}
      <div style={{
        padding: '14px 18px 12px',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          color: 'var(--text-ghost)',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          marginBottom: 4,
        }}>
          Recettes
        </p>
        <p style={{
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: '-0.025em',
          color: 'var(--text)',
        }}>
          10 à explorer
        </p>
      </div>

      {/* List */}
      <div style={{ overflowY: 'auto', flex: 1, paddingTop: 4, paddingBottom: 4 }}>
        {recipes.map((recipe, i) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            isActive={recipe.id === activeId}
            onClick={() => setRecipe(recipe.id)}
            index={i}
          />
        ))}
      </div>
    </aside>
  )
}
