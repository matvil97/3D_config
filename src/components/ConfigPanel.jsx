import { useConfig, MATERIALS, PALETTES } from '../store/useConfig'

const ZONE_LABELS = {
  upper: 'Upper',
  sole: 'Sole',
  accent: 'Accent & Laces',
}

function ColorSwatch({ zone, color }) {
  const current = useConfig((s) => s[zone].color)
  const setZone = useConfig((s) => s.setZone)
  const active = current === color

  return (
    <button
      onClick={() => setZone(zone, { color })}
      title={color}
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: color,
        border: active ? '2px solid var(--accent)' : '2px solid transparent',
        outline: active ? '2px solid var(--accent)' : '2px solid transparent',
        outlineOffset: 2,
        transition: 'outline 0.15s, transform 0.15s',
        transform: active ? 'scale(1.2)' : 'scale(1)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.1)',
      }}
    />
  )
}

function MatButton({ zone, matKey }) {
  const current = useConfig((s) => s[zone].material)
  const setZone = useConfig((s) => s.setZone)
  const active = current === matKey

  return (
    <button
      onClick={() => setZone(zone, { material: matKey })}
      style={{
        padding: '6px 14px',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.03em',
        background: active ? 'var(--accent)' : 'var(--surface2)',
        color: active ? '#000' : 'var(--text-muted)',
        border: active ? 'none' : '1px solid var(--border)',
        transition: 'background 0.15s, color 0.15s',
      }}
    >
      {MATERIALS[matKey].label}
    </button>
  )
}

function ZoneSection({ zone }) {
  const activeZone = useConfig((s) => s.activeZone)
  const setActiveZone = useConfig((s) => s.setActiveZone)
  const isOpen = activeZone === zone

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setActiveZone(isOpen ? null : zone)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          color: 'var(--text)',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'color 0.15s',
        }}
      >
        <span style={{ color: isOpen ? 'var(--accent)' : 'var(--text)' }}>
          {ZONE_LABELS[zone]}
        </span>
        <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div style={{ padding: '0 20px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Color
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {PALETTES[zone].map((c) => (
                <ColorSwatch key={c} zone={zone} color={c} />
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Finish
            </p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {Object.keys(MATERIALS).map((k) => (
                <MatButton key={k} zone={zone} matKey={k} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function ConfigPanel() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 24,
        transform: 'translateY(-50%)',
        width: 280,
        background: 'var(--surface)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        zIndex: 10,
      }}
    >
      <div style={{ padding: '18px 20px 14px', borderBottom: '1px solid var(--border)' }}>
        <p style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
          Configurator
        </p>
        <h2 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>
          Custom Build
        </h2>
      </div>

      {['upper', 'sole', 'accent'].map((zone) => (
        <ZoneSection key={zone} zone={zone} />
      ))}

      <div style={{ padding: '16px 20px' }}>
        <button
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: 10,
            background: 'var(--accent)',
            color: '#000',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Add to Cart — €249
        </button>
      </div>
    </div>
  )
}
