import React, { useState, useEffect } from 'react';
import ToDone from './ToDone';
import ToDoRemaining from './ToDoRemaining';

function ConditionalComponent(props) {
    const [status,setStatus] = useState(0)
    return (
        <div>
            <h2>Conditional Rendering Example</h2>
            { status ?<ToDone />:<ToDoRemaining /> }
            <input type="checkbox" name="" id="" onChange={()=> setStatus(!status)}/>
        </div>
    );
}

export default ConditionalComponent;




