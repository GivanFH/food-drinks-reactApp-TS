import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { FavoritesSliceType, createFavoriteSlice } from './favoritesSlice';

                                //...a = set, get, api
export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),

})))