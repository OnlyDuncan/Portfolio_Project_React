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

export const selectTraditionalPaintingById = (id) => (state) => {
    return state.traditionalPaintings.traditionalPaintingsArray.find(
        (traditionalPainting) => traditionalPainting.id === parseInt(id)
    );
};

const sculpturesAndInstallationsSlice = createSlice({
    name: 'sculpturesAndInstallations',
    initialState
});

export const sculpturesAndInstallationsReducer = sculpturesAndInstallationsSlice.reducer;

export const selectAllSculpturesAndInstallations = (state) => {
    return state.sculpturesAndInstallations.sculpturesAndInstallationsArray;
};

export const selectSculptureOrInstallationById = (id) => (state) => {
    return state.sculpturesAndInstallations.sculpturesAndInstallationsArray.find(
        (sculptureOrInstallation) => sculptureOrInstallation.id === parseInt(id)
    );
};

const performanceAndKineticArtSlice = createSlice({
    name: 'performanceAndKineticArt',
    initialState
});

export const performanceAndKineticArtReducer = performanceAndKineticArtSlice.reducer;

export const selectAllPerformanceAndKineticArt = (state) => {
    return state.performanceAndKineticArt.performanceAndKineticArtArray;
};

export const selectPerformanceOrKineticArtById = (id) => (state) => {
    return state.performanceAndKineticArt.performanceAndKineticArtArray.find(
        (performanceOrKineticArt) => performanceOrKineticArt.id === parseInt(id)
    );
};

const otherArtSlice = createSlice({
    name: 'otherArt',
    initialState
});

export const otherArtReducer = otherArtSlice.reducer;

export const selectAllOtherArt = (state) => {
    return state.otherArt.otherArtArray;
};

export const selectOtherArtById = (id) => (state) => {
    return state.otherArt.otherArtArray.find(
        (otherArt) => otherArt.id === parseInt(id)
    );
};