import backIcon from '../assets/back-icon.png';
import SegmentPopup from './SegmentPopup';
import SchemaDropdown from './SchemaDropdown';

export default function DropDownWindow({hidePopup}) {

    function validateFields  (event)  {
        event.preventDefault();
        const segmentName = event.target.segment_name.value;
        const schema = event.target.schema.value;
        
        console.log(typeof schema, schema);
        if(segmentName.trim() !== '' && schema.length > 2) {
            event.target.submit();            
        } else {
            alert("Segment Name or Schema is empty!");
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
                    <SegmentPopup />        
                    <div>
                    <SchemaDropdown />
                    </div>        
                </section>
                <section className='button-container'>
                    <button className='btn-success' type='submit'>Save the Segment</button>
                    <button className='btn-cancel' type='button' onClick={hidePopup}>Cancel</button>
                </section>
            </div>
        </form>
    );
}