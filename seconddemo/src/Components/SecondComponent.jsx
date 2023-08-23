import React, { useState } from 'react';

const SecondComponent = () =>{
    const [count, setCount] = useState('')
    const [firstclick,setFirstclick] = useState(0)
    function abbc(){
        setFirstclick(firstclick + 1)
    }
    return (

        <div>
            <input type="text" name="txt" onChange={ (e)=> setCount(e.target.value)}/>
            <br />My Second Function Component {count}
            <br />
            Click Count = {firstclick}
            <br />
            <button type="button" onClick={abbc}>Click Me</button>
        </div> 

    )
}

export default SecondComponent;