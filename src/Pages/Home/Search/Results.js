import React from "react";
import MovieItem from "../MovieItem";
import styled from "styled-components";

export class SearchResults extends React.Component {
  render() {
    let movies = this.props.movies.results || [ ];
    return (
      <StyledSearchResults>
        <h2>Search Results</h2>
        <StyledMovies>
            {movies.map((movie) =>
              <MovieItem data={movie}/>
            )}
        </StyledMovies>
      </StyledSearchResults>
    );
  }
}
const StyledSearchResults = styled.div`
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

