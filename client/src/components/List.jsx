import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      Searched: false,
    }
  }

  render(){
    return(
      <div>
        <h2>Your List-ory</h2>
        <ul className='listory'>
          {this.props.shows.map((show) => {
            return <li className='listItem' onClick={() => {this.props.select(show)}}>
              <h3>{show.artist}</h3>
              <div>{show.venue} on {show.eventdate}</div>
            </li>
          })}
        </ul>
        <button onClick={() => {this.props.overlayHandler()}}>Add a Show</button>
      </div>
    )
  }
}

export default List;