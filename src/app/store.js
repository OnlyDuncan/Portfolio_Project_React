import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { 
  traditionalPaintingsReducer, 
  sculpturesAndInstallationsReducer, 
  performanceAndKineticArtReducer,
  otherArtReducer
} from '../components/portfolio/portfolioSlice';

export const store = configureStore({
  reducer: {
    traditionalPaintings: traditionalPaintingsReducer,
    sculpturesAndInstallations: sculpturesAndInstallationsReducer,
    performanceAndKineticArt: performanceAndKineticArtReducer,
    otherArt: otherArtReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});