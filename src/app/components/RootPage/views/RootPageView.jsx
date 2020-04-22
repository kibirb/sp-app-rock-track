import React, { useEffect } from "react";
import { Table, TableHead, TableRow, TableContainer, TableBody, TableCell, Paper } from "@material-ui/core";

export const RootPageView = (props) => {
  useEffect(() => {
    props.fetchTracks();
  }, []);

  return (
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
              <TableRow key={result.id} hover onClick={() => props.history.push(`/track/${result.trackId}`)}>
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
  );
};
