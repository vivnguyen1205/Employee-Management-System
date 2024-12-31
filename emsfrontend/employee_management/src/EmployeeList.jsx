import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react';
import axios from 'axios';
const Employeelist = () => {
  const[employees, setEmployees] = useState([]); // react hook that initializes the state, initial value is empty array. current state is stored in employees and setEmployees is used to update the state.
  const[loading, setLoading]= useState(true); // react hook that initializes the state, initial value is true. current state is stored in loading and setLoading is used to update the state.
  const[error, setError]= useState(null); // react hook that initializes the state, initial value is null. current state is stored in error and setError is used to update the state.
  
  const fetchEmployees = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    try{
      const response = await axios.get("http://localhost:8080/api/employees");
      setEmployees(response.data);

    }catch(err){
      setError("Error fetching employeeData");
    }finally{
      setEmployees(false);

    }

  }
  
  useEffect(() => {
    fetchEmployees();
},[]);
  if(loading) return <div>loading...</div>
  if(error) return <div>{error}</div>


  return(
    <div>
      <h1>Employee List</h1>
      <button onClick={fetchEmployees}>Refresh Employee List </button>
    {employees.length == 0}? <p> No Employees found</p> : (
      <ul>{employees.map((employee) => (
          <div key = {employee.id}>
            <div>
            <h5>{employee.firstName}{employee.lastName}</h5>
            <p>{employee.email}</p>
            </div>
          </div>
        ))}
      </ul>
    )
    </div>
  )
}

export default Employeelist