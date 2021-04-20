import { configureStore } from '../configureStore/store';

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
