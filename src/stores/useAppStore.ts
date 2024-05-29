import { create } from 'zustand'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'

                                //...a = set, get, api
export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...createRecipesSlice(...a)
}))