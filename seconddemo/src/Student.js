import React from 'react';


const Student = (props) => {
    return(
        <div>
            <h1>Name is :{props.student.name}</h1>
            <h1>Age is :{props.student.age}</h1>
            <h1>Salary is :{props.student.salary}</h1>

        </div>
    )
} 

export default Student;
