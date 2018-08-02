import React, { Component } from 'react';
import Button from "../../Components/Button";
import styled from "styled-components";

class MovieItem extends Component {
  render() { 
    let movie = this.props.data;
    return (
      <StyledCard>
        <StyledCardLeft>
          <StyledCardImg src={'http://image.tmdb.org/t/p/w342'+movie.poster_path} alt={movie.title}/>
        </StyledCardLeft>
        <StyledCardRight>
          <StyledCardContent>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </StyledCardContent>
          <Button>Show More</Button>
        </StyledCardRight>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
    padding: 0.9em 1em;
    border-bottom: 1px solid #ddd;
    border-left: 6px solid transparent;
    display:flex;
    &:hover {
      background: #eee;
    }
`;

const StyledCardLeft = styled.div`
  width: 40%;
  height: auto;
  float: left;
  overflow: hidden;
  background: transparent;
`;

const StyledCardRight = styled.div`
  width: 60%;
  float: left;
  height: auto;
`;

const StyledCardContent = styled.div`
height:140px;
overflow:hidden;
margin-bottom:5px;

h2 {
  font-weight: bold;
  text-align: left;
  font-size: 14px;
  margin: 10px 0 0 0;
  padding: 0 0 0 10px;
  letter-spacing: 1px;
}
p{
  font-size:14px;
  padding: 0 10px 10px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* number of lines to show */
  line-height: 14px;        /* fallback */
  max-height: 72px;  
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;

}
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: auto;
  position: relative;
`;
 
export default MovieItem;


