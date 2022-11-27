import './App.css';
import React from 'react';
import '../src/style/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Informations from './components/Informations';
import { details } from "./data";


function App() {
  return (
    <div className="App">     
      <Header />
            
        <div className='mainBlock'>              
                {details.map((info) => (
                    <div>
                        <Informations
                            key={info.id}
                            info={info}                           
                        />
                    </div>
                ))}
          </div>
      <Footer />
    </div>
  );
}

export default App;
