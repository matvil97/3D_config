import { create } from 'zustand'

export const MATERIALS = {
  matte: { roughness: 0.9, metalness: 0.0, label: 'Matte' },
  glossy: { roughness: 0.1, metalness: 0.0, label: 'Glossy' },
  satin: { roughness: 0.4, metalness: 0.1, label: 'Satin' },
  metal: { roughness: 0.2, metalness: 0.9, label: 'Metal' },
}

export const PALETTES = {
  sole: ['#f5f5f5', '#1a1a1a', '#c0392b', '#2980b9', '#27ae60', '#f39c12'],
  upper: ['#e8ff00', '#ffffff', '#1a1a1a', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f97316'],
  accent: ['#1a1a1a', '#ffffff', '#e8ff00', '#e74c3c', '#f39c12', '#00bcd4'],
}

export const useConfig = create((set) => ({
  sole: { color: '#1a1a1a', material: 'matte' },
  upper: { color: '#e8ff00', material: 'satin' },
  accent: { color: '#1a1a1a', material: 'glossy' },
  activeZone: 'upper',

  setZone: (zone, patch) =>
    set((s) => ({ [zone]: { ...s[zone], ...patch } })),
  setActiveZone: (zone) => set({ activeZone: zone }),
}))
