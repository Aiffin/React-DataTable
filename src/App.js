import React from 'react';
import Postdata from './components/Postdata';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';

  const App = () =>{

  return (
    <Provider store={store}>
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Data - Table</h1>
      <Postdata />   
    </div>
    </Provider>
  );
}

export default App;
