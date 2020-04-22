import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const TrackDetailsView = (props) => {
  const [track, setTrack] = useState(null);
  const { trackId } = useParams();
  const tracksList = useSelector((state) => state.tracksList);

  useEffect(() => {
    props.fetchTracks();
  }, []);

  useEffect(() => {
    if (tracksList.length) {
      setTrack(tracksList.find((x) => x.trackId == trackId));
    }
  }, [tracksList, trackId]);

  return (
    <>
      {track && (
        <>
          <h3>
            <b>Track Details</b>
          </h3>
          <div>
            <span>
              Artwork URL: <a href={track.trackViewUrl}>{track.trackViewUrl}</a>
            </span>
            <br />
            <span>Track Name: {track.trackName}</span>
            <br />
            <span>Artist: {track.artistName}</span>
            <br />
            <span>Track Price: {track.trackPrice}</span>
            <br />
            <span>Duration(milis): {track.trackTimeMillis}</span>
            <br />
            <span>Release date: {track.releaseDate}</span>
          </div>
          <br />
          <div>
            <Link to="/">{"<< Go Back"}</Link>
          </div>
        </>
      )}
    </>
  );
};
