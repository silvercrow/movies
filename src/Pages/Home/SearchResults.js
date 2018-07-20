import React from "react";

export class SearchResults extends React.Component {
  constructor(props) {
    super(props); 
  }


  render() {
    return (
      <div className="NowPlaying">
      <h2>Search Results</h2>
      {JSON.stringify(this.props.movies)}
      </div>
    );
  }
}


