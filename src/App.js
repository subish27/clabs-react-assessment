import { useState } from 'react';
import './App.css';
import backIcon from './assets/back-icon.png';
import DropDownWindow from './components/DropDownWindow';


function App() {
  const [showPop, setshowPop] = useState(false);

  
  function togglePopupVisibility  ()  {
    setshowPop(prev => !prev);
  };

  return (
      <div className="App">
        <header className="App-header">
          <section className="header-section">
            <img src={backIcon} alt="Back" className='back-icon' />
            <p className='header-text'>
              View Audience
            </p>          
          </section>        
        </header>  
        <section className='btn-popup-container'>
          <button className='btn-popup' onClick={togglePopupVisibility}>
            Save segment
          </button>
          {showPop && (
            <div className="popup-overlay">
              <div className="popup-content">
                <DropDownWindow hidePopup = {togglePopupVisibility}/>
              </div>
            </div>
          )}
        </section>        
      </div>
  );
}

export default App;
