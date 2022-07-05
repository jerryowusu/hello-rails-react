
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from './Homepage';
import Greeting from './Greeting';
import store from '../redux/configureStore';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Homepage />} />
          <Route path="/greetings" element={<Greeting greeting = 'Test 1' />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App