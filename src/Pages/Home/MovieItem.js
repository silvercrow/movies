import React, { Component } from 'react';
import Button from "../../Components/Button";
class MovieItem extends Component {
  render() { 
    let movie = this.props.data;
    return (
      <div  className="card">
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
            <Button/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MovieItem;


