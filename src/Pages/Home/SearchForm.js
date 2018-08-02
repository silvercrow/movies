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

    let fullScreenSearch = '';
    if (this.state.searchModalFullScreen) {
      fullScreenSearch = 'fullScreen';
    }

    return (

<StyledSearch fullScreenSearch>
  <form className="morphsearch-form" onSubmit={this.handleSubmit}>
    <input 
    id="search-input"
    className="morphsearch-input" 
    type="search" 
    placeholder="Search..." 
    value={this.state.value}  
    onChange={this.handleChange}
    onFocus={this.handleSearchfocus} 
    onBlur={this.handleSearchBlur}
    />
    <button className="morphsearch-submit" type="submit">Search</button>
  </form>
  <div className="morphsearch-content">
    <div className="dummy-column">
      <h2>People</h2>
      <a className="dummy-media-object" href="">
        <h3>Shaun Dona</h3>
      </a>
    </div>
    <div className="dummy-column">
      <h2>Popular</h2>
      <a className="dummy-media-object" href="">
        <h3>Page Preloading Effect</h3>
      </a>
    
    </div>
    <div className="dummy-column">
      <h2>Recent</h2>
      <a className="dummy-media-object" href="">
        <h3>Tooltip Styles Inspiration</h3>
      </a>
      
    </div>
  </div>
  <span className="morphsearch-close" onClick={this.handleClose}></span>
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
    background: palevioletred;
    color: white;
  `}


`;