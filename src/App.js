import React, { useState, useEffect } from 'react';

import './App.scss';

function App() {
  let [employees, setEmployees ] = useState([]);
  useEffect(() => {
    fetch("https://gsa-backend-api.herokuapp.com/employees", {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response => response.text())
    .then(result => {
      let list = JSON.parse(result);
      console.log(list);
      setEmployees(list);
    })
    .catch(error => console.log('error', error));
  }, []);
  return (
    <div className="App">
      <ul>
        {
          employees.length < 1 ? <h3>No employees found!</h3>
          : employees.map((emp, id) => {
            return <li key={id}>
              <h3>{emp.firstName} {emp.lastName}</h3>
              <p>{emp.address}, {emp.city}</p>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
