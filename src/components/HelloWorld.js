import React from 'react';
import '../images/webpack-logo.png';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className='container'>
        <img src='webpack-logo.png' />
      </div>
    )
  }
}

export default HelloWorld;