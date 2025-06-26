import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function SearchBar({ onFormSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const newSearch = event.target.value;
    console.log(newSearch);
    setSearchTerm(newSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <div className="search-bar">
      {/* <Paper elevation={6} style={{ padding: '25px' }}> */}
        <form onSubmit={handleSubmit}>
          <TextField
            size="1"
            label="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      {/* </Paper> */}
    </div>
  );
}

//   const handleAddTask = useCallback((newTask) => {
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   }, []);