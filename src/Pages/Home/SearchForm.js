import React from "react";

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (event) => {
    this.props.searchAction(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Find Movies: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search Movies" />
        </form>
      </div>
    );
  }
}

