import React, { Component } from 'react';

class Home extends Component {
  render() {
    return( 
      <h1>
        <div>The Witch</div> 
        <div className="with--accent">put</div>
        <div>a spell</div>
        <div>on <span className="with--accent">You</span></div>
      </h1>
    );
  }
}

export default Home
