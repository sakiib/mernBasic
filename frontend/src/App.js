import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import StudentsList from './components/StudentsList';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`http://localhost:5000/students`);
      console.log(result.data);
      setStudents(result.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Home />
      <StudentsList students={students}/>
    </div>
  );
};

export default App;
