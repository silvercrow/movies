import React from "react";
import MovieItem from "./MovieItem";
export class SearchResults extends React.Component {

  render() {
    let movies = this.props.movies.results || [ ];
    return (
      <div className="SearchResults">
        <h2>Search Results</h2>
        <div className="NowPlayingMovies">
            {movies.map((movie) =>
              <MovieItem data={movie}/>
            )}
        </div>

      </div>
    );
  }
}


