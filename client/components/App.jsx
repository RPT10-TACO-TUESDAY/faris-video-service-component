import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { Switch, HashRouter, Route } from 'react-router-dom';

import VideoPlayer from './VideoPlayer.jsx';
import VideoCollectionEntry from './VideoCollectionEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      user: null,
      games: null,
      videos: null,
      value: 'Date'
    };

    this.changeVideos = this.changeVideos.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3049/api/videos')
      .then((result) => {
        this.setState({
          isLoaded: true,
          videos: result.data,
        });
      }, (error) => {
        console.log('Error retrieving videos: ', error);
        this.setState({
          isLoaded: true,
          error
        });
      }).then(() => {
        axios.get('http://127.0.0.1:3049/api/users')
          .then((result) => {
            this.setState({
              isLoaded: true,
              user: result.data[0],
            });
          }, (error) => {
            console.log('Error retrieving user: ', error);
            this.setState({
              isLoaded: true,
              error
            });
          });
      }).then(()=> {
        axios.get('http://127.0.0.1:3049/api/games')
          .then((result) => {
            this.setState({
              isLoaded: true,
              games: result.data,
            });
          }, (error) => {
            console.log('Error retrieving games: ', error);
            this.setState({
              isLoaded: true,
              error
            });
          });
      });
  }

  changeVideos(event) {
    this.setState({value: event.target.value});
  }

  renderVideos() {
    if (this.state.value === 'Popular') {
      return (
        this.state.videos.sort((a, b) => b.view_count - a.view_count)
          .map((video) => {
            return (
              <VideoCollectionEntry video={video} game={this.state.games[0]} />
            );
          })
      );
    } else {
      return (
        this.state.videos.sort((a, b) => moment(b.created_at).format('X') - moment(a.created_at).format('X'))
          .map((video) => {
            return (
              <VideoCollectionEntry video={video} game={this.state.games[0]} />
            );
          })
      );
    }
  }

  render() {
    if (this.state.error) {
      return (<div>Error...{this.state.error.message}</div>);
    } else if (this.state.isLoaded === false) {
      return <div>Loading...</div>;
    } else {
      return (
        <HashRouter>
          <Switch>
            <div>
              {this.state.games && (
                <Route exact={true} path="/" render={() => (
                  <div>
                  Sorted By
                    <select className="sort-collection" value={this.state.value} onChange={this.changeVideos}>
                      <option value="Date">Date</option>
                      <option value="Popular">Popular</option>
                    </select>
                    <div className="videos">
                      {this.renderVideos()}
                    </div>
                  </div>
                )}/>
              )}
              {this.state.videos && (
                <Route path='/videos/:videoId' render={({match}) => (
                  <VideoPlayer
                    video={this.state.videos.find(video => video.id.toString() === match.params.videoId )}
                    game={this.state.games[0]}
                  />
                )}/>
              )}
            </div>
          </Switch>
        </HashRouter>
      );
    }
  }
}

export default App;