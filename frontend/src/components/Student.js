import React from 'react'

const Student = ({ student }) => {
    console.log(student);
    return (
        <div>
            Name: {student.name} 
            <br></br>
            Email: {student.email}
        </div>
    );
};

export default Student;
