import React from 'react';
import Student from '../components/Student';

const StudentsList = ({ students }) => {
    return (
        <div>
            {students.map(student => (
                <Student key={student._id} student={student} > </Student>
            ))} 
        </div> 
    );
};

export default StudentsList;
