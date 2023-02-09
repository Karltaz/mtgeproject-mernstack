import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import productReducer from './reducers/productReducers';
import filterReducer from './reducers/filterReducers';




const store = configureStore({
  reducer: {
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,
    products: productReducer,
    filters: filterReducer,
  },
})

export default store;  

 
