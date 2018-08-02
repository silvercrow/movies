import React from "react";
import MovieItem from "./MovieItem";
import styled from "styled-components";

export class SearchResults extends React.Component {
  render() {
    let movies = this.props.movies.results || [ ];
    return (
      <StyledSearchResults>
        <h2>Search Results</h2>
        <div className="NowPlayingMovies">
            {movies.map((movie) =>
              <MovieItem data={movie}/>
            )}
        </div>

      </StyledSearchResults>
    );
  }
}
const StyledSearchResults = styled.div`
width: 350px;
height: 100%;
border-right: 1px solid #ddd;
`;


