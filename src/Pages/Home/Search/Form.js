import React from "react";
import styled, { css } from "styled-components";

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', searchModalFullScreen:false};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (event) => {
    this.setState({value:'',searchModalFullScreen:false});
    this.props.searchAction(this.state.value);
    document.getElementById("search-input").blur();
    event.preventDefault();
  }

  handleSearchfocus = () => {
    this.setState({searchModalFullScreen:true});
  }

  handleSearchBlur = ()=>{
    this.setState({searchModalFullScreen:false});
  }
  
  handleClose = () =>{
    this.setState({searchModalFullScreen:false});
  }

  render() {

    let fullScreen = '';
    if (this.state.searchModalFullScreen) {
      fullScreen = 'fullScreen';
    }

    return (

<StyledSearch {...fullScreen}>
  <StyledForm {...fullScreen} onSubmit={this.handleSubmit}>
    <StyledInput {...fullScreen}
    id="search-input"
    type="search" 
    placeholder="Search..." 
    value={this.state.value}  
    onChange={this.handleChange}
    onFocus={this.handleSearchfocus} 
    onBlur={this.handleSearchBlur}
    />
    <StyledButton type="submit">Search</StyledButton>
  </StyledForm>
  <StyledCloseButton onClick={this.handleClose}/>
</StyledSearch>

    );
  }
}

const StyledSearch = styled.div`
  width: 200px;
  min-height: 40px;
  background:rgba(0,0,0,0.85);
  position: absolute;
  z-index: 10000;
  top: 50px;
  right: 50px;
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
  -webkit-transition-property: min-height, width, top, right;
  transition-property: min-height, width, top, right;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);

  ${props => props.fullScreen && css`
    width: 100%;
    min-height: 100%;
    top: 0px;
    right: 0px;

    width: 100%;
    height: 160px;
    -webkit-transform: translate3d(0,3em,0);
    transform: translate3d(0,3em,0);
  `}
`;

const StyledForm = styled.form`
	width: 100%;
	height: 40px;
	margin: 0 auto;
	position: relative;
	-webkit-transition-property: width, height, -webkit-transform;
	transition-property: width, height, transform;
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s;
	-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  
  ${props => props.fullScreen && css`
    width: 100%;
    height: 160px;
    -webkit-transform: translate3d(0,3em,0);
    transform: translate3d(0,3em,0);


    pointer-events: auto;
    opacity: 1;
    -webkit-transform: translate3d(-30px,-50%,0) scale3d(1,1,1);
    transform: translate3d(-30px,-50%,0) scale3d(1,1,1);
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  `}
`
const StyledCloseButton = styled.span`
	width: 36px;
	height: 36px;
	position: absolute;
	right: 1em;
	top: 1em;
	overflow: hidden;
	text-indent: 100%;
	cursor: pointer;
	pointer-events: none;
	opacity: 0;
	-webkit-transform: scale3d(0,0,1);
  transform: scale3d(0,0,1);
  


&:before,
&:after {
	content: '';
	position: absolute;
	width: 2px;
	height: 100%;
	top: 0;
	left: 50%;
	border-radius: 3px;
	opacity: 0.2;
	background: #000;
}
`

const StyledButton = styled.button`
  margin-right: 15px;
  float:right;
  padding: 0.25em 1em;
  background-color: #ffda00;
  text-decoration: none;
  border: 2px solid #e68b05;
  font-size: 14px;
  font-weight:bold;
  border-radius: 35px;
  transition-property: all;
  transition-duration: .5s;
  cursor:pointer;

  &:hover {
    background-color: ffda99;
  }
`

const StyledInput = styled.input`
	width: 100%;
	padding: 0 10% 0 10px;
	font-weight: 700;
	border: none;
	background: transparent;
	font-size: 0.8em;
	color: #FFD700;
	-webkit-transition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);
  transition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);
  
  ${props => props.fullScreen && css`

    font-size: 7em;
  `}
`