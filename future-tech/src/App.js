//components
import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Trending from './components/Trending';
import Newspaper from './components/Newspaper';
import Footer from './components/Footer';

function App() {

  const [id, setId] = useState(() => {
    const savedId = localStorage.getItem('id');
    return savedId !== null ? Number(savedId) : 0;
  });

  function getID(idc){
    setId(idc);
    localStorage.setItem('id', idc);
    console.log("ID traído:", idc);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => getID(0)} className="txt-name">FutureTech</button>
      </header>

      <div className="container">
        {id === 0 ? (
          <div>
            <Banner />
            <Trending getID={getID}/>
          </div>
        ) : (
          <div>
            <Newspaper id={id}/>
          </div>
        )}
      </div>

      <Footer /> 

    </div>
  );
}

export default App;
