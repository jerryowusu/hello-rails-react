import React from "react";
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='container'>
          <h1>Rails-React </h1>
        <Link to='/greetings' className="button3"> Greetings page</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;