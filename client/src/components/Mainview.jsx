import React from 'react';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      Searched: false,
    }
  }

  render(){
    let setlist = [];
    let sets = this.props.selected.sets
    for (let i = 0; i < sets.length; i++) {
      // console.log('SET', sets[i])
      let songlist = sets[i].song
      // console.log('SONGS', songlist)
      for (let songs of songlist) {
        setlist.push(songs.name)
      }
    }
    // console.log('SETLIST', setlist)
    return(
      <div>
        {this.props.selected.artist} <br />
        {this.props.selected.venue}, {this.props.selected.eventdate}
        <ul className='setlist'>
          {setlist.map((song) => {
            return <li>{song}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default MainView;