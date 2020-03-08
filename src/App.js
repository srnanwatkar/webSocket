import React, { Component } from 'react';
import Dashboard from './components/Dashboards';
import Loader from './components/Loader';
import './scss/index.scss';

class App extends Component {

  /**
   * Handle Component Errors
   * @param error 
   * @param info 
   */
  componentDidCatch(error, info) {

  }


  render() {
    return (
      <div className='app-container'>
        {/* Loader */}
        <Loader />

        {/* Dashboard Container */}
        <Dashboard />
      </div>
    );
  }
}

export default App;