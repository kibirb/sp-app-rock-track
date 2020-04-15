import { createSelector } from 'reselect';

export default createSelector(
    (state) => state.isLoading,
    (state) => state.tracksList,
    (isLoading, tracksList) => {

    return {
        isLoading,
        tracksList
    };
});