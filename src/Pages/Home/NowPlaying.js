import React, { Component } from 'react';
import MovieItem from "./MovieItem";
import styled from "styled-components";
export class NowPlaying extends Component {
  render() {
    let movies = this.props.movies.results || [ ]
    return (
      <StyledNowPlaying>
        <h2>Now Playing</h2>
        <StyledMovies>
          {movies.map((movie) =>
            <MovieItem key={movie.id} data={movie}/>
          )}
        </StyledMovies>
      </StyledNowPlaying>
    );
  }
}
const StyledNowPlaying = styled.div`
  padding: 2em;
  max-width: 1400px;
  margin: 0 auto;
  h2{
  transition: width .5s ease, background-color .5s ease;
  color: #111;
  }
  `;
  const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


NowPlaying.defaultProps = {'movies':{'results':[]}};
