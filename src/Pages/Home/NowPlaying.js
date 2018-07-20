import React, { Component } from 'react';
import MovieItem from "./MovieItem";
export class NowPlaying extends Component {
  render() {
    let movies = this.props.movies.results || [ ]
    return (
      <div className="NowPlaying">
        <h2>Now Playing</h2>
        <div className="NowPlayingMovies">
          {movies.map((movie) =>
            <MovieItem data={movie}/>
          )}
        </div>
      </div>
    );
  }
}


NowPlaying.defaultProps = {'movies':{'results':[]}};
