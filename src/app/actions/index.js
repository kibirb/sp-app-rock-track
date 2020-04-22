import { constants } from "../constants";

export const fetchTracks = (payload) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://itunes.apple.com/search?term=rock&media=music`;

  return (dispatch) => {
    dispatch({ type: constants.FETCH_TRACKS_REQUEST });

    return fetch(proxyurl + url)
      .then((response) => response.json())
      .then((response) => {
        return dispatch({
          type: constants.FETCH_TRACKS_SUCCESS,
          payload: response,
        });
      });
  };
};
