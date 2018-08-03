import React from "react";
import { SearchForm } from "./Search/Form"
import { SearchResults } from "./Search/Results"
import { NowPlaying } from "./NowPlaying"
import styled from "styled-components";

//import './style.css';

const API_KEY = '82971fc3f3d7f90dcc948b6c6fb75563';
const actions = {
  init() {
    return { 'nowPlaying':{},'searchResults':{} };
  },
  async fetchNowPlayingMovies(){
    let moviesData  = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key='+API_KEY);
    return moviesData.json();
  },
  async fetchMovie(movieName){
    console.log('searching for:',movieName);
    let searchResult  = await fetch('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&query='+encodeURI(movieName)+'&page=1&include_adult=false');
    return searchResult.json();
  }
}

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = actions.init();
    this.getNowPlayingMovies();
  }

  getNowPlayingMovies = async () => {
    let nowPlayingMovies = await actions.fetchNowPlayingMovies();
    this.setState({'nowPlaying':nowPlayingMovies});
  };

  searchForMovie = async (movieName) => {
    let searchResults = await actions.fetchMovie(movieName);
    this.setState({'searchResults':searchResults});
  };

  render() {
    return (
      <StyledHomepage>
       <SearchForm searchAction={this.searchForMovie}/>
       <SearchResults movies={this.state.searchResults}/>
       <NowPlaying movies={this.state.nowPlaying}/>
      </StyledHomepage>
    );
  }
}

const StyledHomepage = styled.div`
  background: #eee;
`;
