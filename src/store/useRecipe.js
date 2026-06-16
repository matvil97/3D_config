import { create } from 'zustand'
import { RECIPES } from '../data/recipes'

export const useRecipe = create((set, get) => ({
  recipes: RECIPES,
  activeId: RECIPES[0].id,
  stepIndex: 0,

  setRecipe: (id) => set({ activeId: id, stepIndex: 0 }),

  nextStep: () => {
    const { activeId, stepIndex, recipes } = get()
    const recipe = recipes.find((r) => r.id === activeId)
    if (stepIndex < recipe.steps.length - 1) set({ stepIndex: stepIndex + 1 })
  },

  prevStep: () => {
    const { stepIndex } = get()
    if (stepIndex > 0) set({ stepIndex: stepIndex - 1 })
  },

  getActiveRecipe: () => {
    const { activeId, recipes } = get()
    return recipes.find((r) => r.id === activeId)
  },

  getCurrentStep: () => {
    const { activeId, stepIndex, recipes } = get()
    const recipe = recipes.find((r) => r.id === activeId)
    return recipe?.steps[stepIndex]
  },
}))
