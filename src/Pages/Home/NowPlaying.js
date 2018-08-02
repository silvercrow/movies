import React, { Component } from 'react';
import MovieItem from "./MovieItem";
import styled from "styled-components";
export class NowPlaying extends Component {
  render() {
    let movies = this.props.movies.results || [ ]
    return (
      <StyledNowPlaying>
        <h2>Now Playing</h2>
        <div className="NowPlayingMovies">
          {movies.map((movie) =>
            <MovieItem key={movie.id} data={movie}/>
          )}
        </div>
      </StyledNowPlaying>
    );
  }
}
const StyledNowPlaying = styled.div`
width: 350px;
height: 100%;
border-right: 1px solid #ddd;
`;

NowPlaying.defaultProps = {'movies':{'results':[]}};
