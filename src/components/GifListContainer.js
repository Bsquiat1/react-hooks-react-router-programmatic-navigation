import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const API_KEY = "WKJRUsOxQ6XKWmduOnOgYU6BWDxa35X0";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          gifs: data.data.map((gif) => ({ url: gif.images.original.url })),
        });
      });
  };

  handleSubmit = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
