import { createSlice } from '@reduxjs/toolkit';
import { TRADITIONALPAINTINGS, SCULPTURESANDINSTALLATIONS, PERFORMANCEANDKINETICART, OTHERART } from '../../app/shared/ARTWORK';

const initialState = {
    traditionalPaintingsArray: TRADITIONALPAINTINGS,
    sculpturesAndInstallationsArray: SCULPTURESANDINSTALLATIONS,
    performanceAndKineticArtArray: PERFORMANCEANDKINETICART,
    otherArtArray: OTHERART
};

const traditionalPaintingsSlice = createSlice({
    name: 'traditionalPaintings',
    initialState
});

export const traditionalPaintingsReducer = traditionalPaintingsSlice.reducer;

export const selectAllTraditionalPaintings = (state) => {
    return state.traditionalPaintings.traditionalPaintingsArray;
};

const sculpturesAndInstallationsSlice = createSlice({
    name: 'sculpturesAndInstallations',
    initialState
});

export const sculpturesAndInstallationsReducer = sculpturesAndInstallationsSlice.reducer;

export const selectAllSculpturesAndInstallations = (state) => {
    return state.sculpturesAndInstallations.sculpturesAndInstallationsArray;
};

const performanceAndKineticArtSlice = createSlice({
    name: 'performanceAndKineticArt',
    initialState
});

export const performanceAndKineticArtReducer = performanceAndKineticArtSlice.reducer;

export const selectAllPerformanceAndKineticArt = (state) => {
    return state.performanceAndKineticArt.performanceAndKineticArtArray;
};

const otherArtSlice = createSlice({
    name: 'otherArt',
    initialState
});

export const otherArtReducer = otherArtSlice.reducer;

export const selectAllOtherArt = (state) => {
    return state.otherArt.otherArtArray;
};