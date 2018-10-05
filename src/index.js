import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// Create a new component. this component should produce some HTML
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DP0_5Ss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos })
        })
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
//Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
