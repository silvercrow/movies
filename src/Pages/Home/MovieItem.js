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
  width: 25%;
  height: 100%;
  background: #000000;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  float:left;
  margin:2%;
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
  background: #000000;
  height: auto;
  border-radius: 0 10px 10px 0;
  -webkit-border-radius: 0 10px 10px 0;
  -moz-border-radius: 0 10px 10px 0;
`;

const StyledCardContent = styled.div`
height:140px;
overflow:hidden;
margin-bottom:5px;

h2 {
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 14px;
  margin: 10px 0 0 0;
  padding: 0 0 0 10px;
  letter-spacing: 1px;
  color: #ffda00;
}
p{
  color: white;
  font-size:10px;
  padding: 0 10px 10px 10px;

     overflow: hidden;
   text-overflow: ellipsis;
   word-wrap: break-word;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 5; /* number of lines to show */
   line-height: 10px;        /* fallback */
   max-height: 50px;  
   -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;

}
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 0 0 10px;
  -webkit-border-radius: 10px 0 0 10px;
  -moz-border-radius: 10px 0 0 10px;
  position: relative;
`;
 
export default MovieItem;


