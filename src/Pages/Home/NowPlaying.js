import React from "react";



export class NowPlaying extends React.Component {
  render() {
    const movies = this.props.movies.results || [ ]
    return (
      <div className="NowPlaying">
      <h2>Now Playing</h2>
      
      <div className="NowPlayingMovies">
        {movies.map((movie) =>
          <div key={movie.id} className="card">
            <div className="card_left">
              <img src={'http://image.tmdb.org/t/p/w342'+movie.poster_path} alt={movie.title}/>
            </div>
            <div className="card_right">
              <h1>{movie.title}</h1>
              <div className="card_right__details">
                <ul>
                  <li>{movie.releasedate}</li>
                </ul>
                <div className="card_right__rating">
                  <div className="card_right__rating__stars">
                  </div>
                </div>

                <div className="card_right__button">
                  <a href="" target="_blank">View</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      </div>
    );
  }
}


NowPlaying.defaultProps = {'movies':{'results':[]}};
