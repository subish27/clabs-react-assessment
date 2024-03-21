 export default function Dropdown (props) {

    const {
        previousValue = false, 
        dropFields, 
        onSelect,
        deleteField 
    } = props;

    const color = previousValue ? (previousValue.userTrait ? 'green' : 'red') : 'grey';

    return (
        <div className="dropdown-container">
            <div>
                <span className="dot" style={{ backgroundColor : color }}></span>
            </div>
            <select className="select-field" onChange={(e) => onSelect(e.target.value,previousValue)}>
                {previousValue ? 
                    <option selected value={previousValue.value}>{previousValue.displayName}</option> 
                    : <option selected value = "">Add Schema to Segment</option>}
                {dropFields && dropFields.map((field) => (
                    <option key={field.colName} value={field.colName}>{field.displayName}</option>
                ))}
            </select>
            <button className="field-remove-btn" type='button' onClick={() => deleteField()}>&mdash;</button>
        </div>
    );
}
