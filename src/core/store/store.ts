import { configureStore } from "@reduxjs/toolkit";
import dialogueReducer from "./slices/dialogueSlice";
import loaderReducer, { fetchData } from "./slices/loaderSlice";
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice'

// Define a middleware that logs the API requests and responses
const apiMiddleware = (storeAPI) => (next) => (action) => {
  console.log('here');
  
  if (action.type.startsWith('loader/')) {
    console.log(`API request: ${action.type}`);
    next(action).then(() => {
      console.log(`API response: ${action.type}`, storeAPI.getState().data);
    });
  } else {
    next(action);
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    dialogue: dialogueReducer,
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

store.dispatch(fetchData());


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
