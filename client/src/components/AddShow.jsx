import React, { useRef } from 'react';
import axios from 'Axios';
import api from '../../../server/api.js';

class AddShow extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      Searched: false,
      searchResults: [],
    }
    this.artistInput = React.createRef();
    this.venueInput = React.createRef();
    this.cityInput = React.createRef();
    this.stateInput = React.createRef();
    this.yearInput = React.createRef();
  }





  search () {
    this.setState({
      searched:true
    })
    axios.get('search',{
      params: {
        p: 1,
        artistName: this.artistInput.current.value,
        venueName: this.venueInput.current.value,
        cityName: this.cityInput.current.value,
        state: this.stateInput.current.value,
        year: this.yearInput.current.value,
        }
      })
      .then((response) => {
        this.setState({searchResults: response.data.setlist})
        console.log(this.state.searchResults)
      })
      .catch((error) => {
        console.err(error)
      })
  }

  render(){
    return(
      <div className='overlay'>
        <div className='exit' onClick={() => {this.props.overlayHandler()}}>X</div>
        <h1>Add a Show!</h1>
        <form>
          <input type='text' placeholder='artist (required)' ref={this.artistInput} required ></input>
          <input type='text' placeholder='year (required)' ref={this.yearInput} required ></input>
          <input type='text' placeholder='venue' ref={this.venueInput}></input>
          <input type='text' placeholder='city' ref={this.cityInput}></input>
          <input type='text' placeholder='state' ref={this.stateInput}></input><br />
          <input type='submit' value='Search' onClick={() => {this.search()}}></input>
        </form>

        {this.state.searched
          && (<div className='resultsbox'>
              <h2>Your Search Results</h2>
              <ul className='results'>
              {this.state.searchResults.map((show) => {
                  {console.log(show)}
                  return <div>
                    {show.artist.name && show.venue.city.name && show.venue.city.state && show.venue.name &&
                    (<li onClick={() => {this.props.save(show)}} className='listItem'>
                      <h3>{show.artist.name}</h3>
                      <div>{show.venue.city.name}, {show.venue.city.state}<br /> {show.venue.name}</div>
                    </li>)}
                  </div>
              })}
              <button className='close' onClick={() => {this.setState({searched: false})}}>Close</button>
              </ul>
            </div>)}

      </div>
    )
  }
}

export default AddShow;