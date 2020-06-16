import React from 'react';
import AddShow from './AddShow.jsx';
import Mainview from './Mainview.jsx';
import List from './List.jsx';
import Login from './Login.jsx';
import axios from 'Axios';
import { BrowserRouter as Router} from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        username: 'admin',
        email: 'nothing@nothing.com',
      },
      shows: [],
      selected: {
        sets:[],
      },
      overlay: false,
    };
    this.overlayHandler = this.overlayHandler.bind(this);
    this.select = this.select.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    axios.get('/shows')
      .then((result) => {
        this.setState({
          shows: result.data
        });
      })
      .then(() => {
        let firstShow = this.state.shows[0]
          this.setState({
            selected: firstShow
          })
      })
  }

  save(show) {
    axios.post('/saveShow', show)
    .then(function (response) {
      alert('Show added!');
    })
    .then(() => {
      axios.get('/shows')
      .then((result) => {
        this.setState({
          shows: result.data
        });
      })
      .catch((err) => {
        console.error(err)
      })
    })
    .catch(function (error) {
      alert('Show could not be saved');
    });
  }

  select(show) {
    this.setState({ selected: show})
  }

  overlayHandler() {
    const change = !this.state.overlay;
    this.setState({ overlay: change });
  }

  render(){
    return(
      <div className='primary-app'>
        {this.state.overlay
          && (<AddShow overlayHandler={this.overlayHandler} search={this.search} save={this.save} />)}
        <div className='app-grid'>
          <div className='header'>
              <h1 className='Logo'>SetList-ory</h1>
          </div>
          <div className='menu'>
            <List overlayHandler={this.overlayHandler} shows={this.state.shows}  select={this.select} />
          </div>
          <div className='main-content'>
            <Mainview selected={this.state.selected} />
          </div>
          <div className='footer'>
            Thanks to spotlist.fm for a brilliant API
          </div>
        </div>
      </div>
    )
  }
}

export default Main;