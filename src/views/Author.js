import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <div className="view">
        <h1>Author</h1>
        <div className="content">
          <div className="content--inner">
            <p className="content--excerpt">Athmaj Sajeev Sunu</p>
            <img src="https://i.ibb.co/WBdRgLg/bat.png" alt="bat"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Author