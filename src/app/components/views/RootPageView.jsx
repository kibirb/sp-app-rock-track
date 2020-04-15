import React, { useEffect, useState } from "react";
import { Table, TableHead, TableRow, TableContainer, TableBody, TableCell, Paper } from "@material-ui/core";

export const RootPageView = (props) => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    props.fetchTracks();
  }, []);

  return (
    <div className="ml-5">
      {!selectedTrack ? (
        <>
          <h3>
            <b>Tracks List</b>
          </h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Track name</TableCell>
                  <TableCell>Artist</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Artwork URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.tracksList.map((result) => (
                  <TableRow
                    key={result.id}
                    hover
                    onClick={() => {
                      setSelectedTrack(result);
                    }}
                  >
                    <TableCell>{result.trackName}</TableCell>
                    <TableCell>{result.artistName}</TableCell>
                    <TableCell>{result.trackPrice}</TableCell>
                    <TableCell>
                      <a href={result.trackViewUrl}>{result.trackViewUrl}</a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          <h3>
            <b>Track Details</b>
          </h3>
          <div>
            <span>
              Artwork URL: <a href={selectedTrack.trackViewUrl}>{selectedTrack.trackViewUrl}</a>
            </span>
            <br />
            <span>Track Name: {selectedTrack.trackName}</span>
            <br />
            <span>Artist: {selectedTrack.artistName}</span>
            <br />
            <span>Track Price: {selectedTrack.trackPrice}</span>
            <br />
            <span>Duration(milis): {selectedTrack.trackTimeMillis}</span>
            <br />
            <span>Release date: {selectedTrack.releaseDate}</span>
          </div>
          <br />
          <div>
            <h4 onClick={() => setSelectedTrack(null)}>{"<< Go Back"}</h4>
          </div>
        </>
      )}
    </div>
  );
};
