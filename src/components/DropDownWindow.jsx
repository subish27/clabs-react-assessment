import backIcon from '../assets/back-icon.png';
import PopupWindow from './PopupWindow';
import SchemaDropdown from './SchemaDropdown';
import { useState } from 'react';
import Alert from './Alert';

export default function DropDownWindow({hidePopup}) {
    const [showAlert, setShowAlert] = useState(false);

    function validateFields  (event)  {
        event.preventDefault();
        const segmentName = event.target.segment_name.value;
        const schema = event.target.schema.value;
        
        console.log(typeof schema, schema);
        if(segmentName.trim() !== '' && schema.length > 2) {
            event.target.submit();            
        } else {
            setShowAlert(true);
        }
    }

    return (
        <form action="https://webhook.site/68ad8939-fd65-4937-952a-58fa002703be" 
            method="post" 
            onSubmit={validateFields}>
            <div className="App">
                <header className="App-header">
                <section className="header-section">
                    <img src={backIcon} alt="Back" className='back-icon' onClick={hidePopup}/>
                    <p className='header-text'>
                    Saving Segment
                    </p>          
                </section>        
                </header>
                <section className='popup-container'>
                    <PopupWindow />        
                    <div>
                    <SchemaDropdown />
                    </div>        
                </section>
                <section className='button-container'>
                    <button className='btn-success' type='submit'>Save the Segment</button>
                    <button className='btn-cancel' type='button' onClick={hidePopup}>Cancel</button>
                </section>
            </div>
            {showAlert && <Alert message="Segment Name/Schema is empty!" onClose={() => setShowAlert(false)} />}
        </form>
    );
}