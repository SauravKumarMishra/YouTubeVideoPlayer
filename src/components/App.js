import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async (text) => {
    const resp = await youtube.get("/search", {
      params: {
        q: text,
      },
    });

    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount = () => {
    this.onSearchSubmit("Namaste Javascript");
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
