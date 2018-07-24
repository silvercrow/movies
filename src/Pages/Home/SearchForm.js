import React from "react";

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

    let fullScreenSearch = 'morphsearch';
    if (this.state.searchModalFullScreen) {
      fullScreenSearch = 'morphsearch open';
    }

    return (

<div id="morphsearch" className={fullScreenSearch}>
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
</div>

    );
  }
}

