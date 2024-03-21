import React, { useState } from 'react';
import './SchemaDropdown.css';
import Dropdown from './DropDownValues';

const dropdownValues=["first_name","last_name","gender","age","account_name","city","state"] 
const userTraits=["first_name","last_name","gender","age","city","state"];

export default function SchemaDropdown () {
    let dropDownObj = [];

    dropdownValues.forEach((value) => {
        dropDownObj.push({
            colName: value,
            displayName: value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' '),
            userTrait: userTraits.includes(value),
            visibility: false        
        });
    });

    const [dropDownFields, setdropDownFields] = useState(dropDownObj);

    const [addField, setAddField] = useState("");

  
    function dropDownShow (value) {
        setdropDownFields(prevState => {
            return prevState.map(field => {
                if (field.colName === value) {
                    return { ...field, visibility: true };
                }
                return field;
            });
        });
    };

    
    function dropDownHide (value)  {
        setdropDownFields(prevState => {
            return prevState.map(field => {
                if (field.colName === value) {
                    return { ...field, visibility: false };
                }
                return field;
            });
        });        
    }

    function updateAddField (value, noUseCase)  {
        setAddField(value);
    }

    function handleAddField ()  {
        dropDownShow(addField);
    }

    function updateAddedField (currValue, prevValue)  {
        dropDownShow(currValue);
        dropDownHide(prevValue.colName);
    }

    function removeAddedField (value) {
        dropDownHide(value);
    }


    return (
        <>
            <div className="legend-container">
                <div>
                    <span className="dot" style={{ backgroundColor : "green" }}></span>
                    <span className="legend-field"> - User Traits</span>
                </div>
                <div>
                    <span className="dot" style={{ backgroundColor : "red" }}></span>
                    <span className="legend-field"> - Group Traits</span>
                </div>
            </div>            
            <div className = {dropDownFields.filter((field) => field.visibility).length > 0 ? 'blue-box' : ''}>
                {dropDownFields.filter((field) => field.visibility).map((selectedField) => {
                    return (
                        <Dropdown 
                            key={selectedField.colName}
                            dropFields={dropDownFields.filter((field) => !field.visibility)} 
                            onSelect={updateAddedField} 
                            previousValue = {selectedField}
                            deleteField= {() => removeAddedField(selectedField.colName)} />
                    )
                })}
            </div>
            <Dropdown 
                dropFields={dropDownFields.filter((field) => !field.visibility)} 
                onSelect={updateAddField} 
                deleteField={() => console.log('This is field adder')} />
            <div className='btn-add'>
                <a href='#' onClick={handleAddField}> + <span>Add new Schema</span></a>
            </div>
            <input type="hidden" name="schema" value={JSON.stringify(dropDownFields
                .filter(field => field.visibility)
                .map(({ colName, displayName }) => ({ [colName]: displayName })))} />
        </>
    );

}
