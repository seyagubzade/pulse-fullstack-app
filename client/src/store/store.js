import { configureStore } from '@reduxjs/toolkit'
import { menuReducer } from './menu/menuSlice'
import { wishlistReducer } from './wishlist/wishlistSlice';


const store = configureStore({
    reducer: {
        menu: menuReducer,
        wishlist: wishlistReducer
    } 
})

export default store;