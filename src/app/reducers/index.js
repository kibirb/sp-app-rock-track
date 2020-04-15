const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_TRACKS_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCH_TRACKS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                tracksList: action.payload.results
            };
        default:
            return state;
    }
};

export default reducer;