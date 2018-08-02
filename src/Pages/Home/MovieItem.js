import React, { Component } from 'react';
import Button from "../../Components/Button";
import styled from "styled-components";

class MovieItem extends Component {
  render() { 
    let movie = this.props.data;
    return (
      <StyledCard background={'http://image.tmdb.org/t/p/w342'+movie.poster_path}>
        <StyledCardInfo>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          <Button>Show More</Button>
        </StyledCardInfo>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  background-image: url(${props => props.background});
  margin: 1em;
  width: 185px;
  height: 270px;
  border-radius: 9px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.4s ease all;
  transform: none;
  backface-visibility: hidden;
  position: relative;
  display:flex;
`;

const StyledCardInfo = styled.div`
  opacity: 0;
  position: relative;
  transform: translateY(15px);
  transition: .4s ease all;
  padding: 0.5em;
  text-align: center;
  background-color: rgba(32, 35, 44, 0.8);
  width:100%;

  h3 {
    font-weight: bold;
    text-align: left;
    font-size: 14px;
    margin: 10px 0 0 0;
    padding: 0 0 0 10px;
    letter-spacing: 1px;
    color: #ffc423;
    height:20%;
    overflow:hidden;
  }
  p{
    font-size:14px;
    padding: 0 5px 5px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5; /* number of lines to show */
    line-height: 15px;        /* fallback */
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: #ffff;
    height:45%;
  }
  &:hover{
    opacity: 1;
    display: block;
    transform: none;
  }
`;

export default MovieItem;


