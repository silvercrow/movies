import React, { Component } from 'react';
import styled from "styled-components";

class Button extends Component {

  render() { 
    return (
        <StyledButton> {this.props.children} </StyledButton>
    );
  }
}
const StyledButton = styled.button`
margin-right: 15px;
float:right;
padding: 0.25em 1em;
background-color: #ffda00;
text-decoration: none;
border: 2px solid #e68b05;
font-size: 14px;
font-weight:bold;
border-radius: 5px;
transition-property: all;
transition-duration: .5s;
cursor:pointer;

&:hover {
  background-color: ffda99;
}
`;
export default Button;