import React from 'react';


const Fruit = (props) => {
    return(
        <div>
            <h1>Name is :{props.fruit.name}</h1>
            
            <h1>Color is :{props.fruit.color}</h1>

        </div>
    )
} 

export default Fruit;