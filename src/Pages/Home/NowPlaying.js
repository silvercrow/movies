import React from "react";

export class NowPlaying extends React.Component {
  constructor(props) {
    super(props); 
  }


  render() {
    return (
      <div className="NowPlaying">
      <h2>Now Playing</h2>
      {JSON.stringify(this.props.movies)}
      </div>
    );
  }
}


NowPlaying.defaultProps = {'movies':{}};
