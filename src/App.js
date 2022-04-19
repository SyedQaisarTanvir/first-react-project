import React from 'react';
import ReactDOM  from 'react-dom';
import '../src/style.css';
import NavBar from './Component/NavBar';
import MainContent from './Component/MainContent';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'))