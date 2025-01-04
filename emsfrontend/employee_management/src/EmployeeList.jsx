import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react';
import UpdateEmployee from './UpdateEmployee';
import axios from 'axios';
const Employeelist = () => {
  const [employees, setEmployees] = useState([]); // react hook that initializes the state, initial value is empty array. current state is stored in employees and setEmployees is used to update the state.
  const [loading, setLoading]= useState(true); // react hook that initializes the state, initial value is true. current state is stored in loading and setLoading is used to update the state.
  const [error, setError]= useState(null); // react hook that initializes the state, initial value is null. current state is stored in error and setError is used to update the state.
  const [showModel, setShowModal] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  // fetch employee logic :
  const fetchEmployees = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    try{
      const response = await axios.get("/api/employees");
      setEmployees(response.data);

    }catch(err){ 
      setError("Error fetching employeeData");
    }finally{
      setLoading(false);
    }
  };

  //update employee logic :
  const updateEmployee = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setShowModal(true);
  }
  //delete employee logic : 
  const deleteEmployee = async (employeeId) => {
   const confirmed = window.confirm("Are you sure you want to delete this employee?");
   if(confirmed){
    try{
      await axios.delete(`/api/employees/${employeeId}`);
      alert("Employee deleted successfully");
      fetchEmployees();
    }catch(error){
      console.error("error deleting employee", error);
      alert("Failed to delete employee ");

    }
     
   }
  };
  
  useEffect(() => {
    fetchEmployees();
},[]);

const handleModalClose = () => {
  setShowModal(false);
  setSelectedEmployeeId(null);

}

  if(loading) return <div className='text-center mt-5'>loading...</div>
  if(error) return <div className='alert alert-danger text-center'>{error}</div>


  return(
    <div className='container mt-5'>
      <h1 className='text-center mb-4'> Employee List</h1>
      <button className = 'btn btn-primary mb-4' onClick={fetchEmployees}>Refresh Employee List </button>
      {employees.length === 0 ? (<p>No Employees found</p>) : (
      <ul className='list-group'> {employees.map((employee) => (
          <div key = {employee.id} className='card mb-3'>
            <div className='card-body'>
            <h5 className='card-title'> {employee.firstName}{employee.lastName}</h5>
            <p className='card-text'>{employee.email}</p>
            <div className='button-container' style={{display: 'flex', gap: '10px', }}>
              <button className="btn btn-primary" onClick={() => updateEmployee(employee.id)}> Update Button </button>
             <button className="btn btn-danger" onClick={()=> deleteEmployee(employee.id)}>Delete Employee</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    )}
    // {/* { render the updateemployee modal} */}
    {showModal && (
      <UpdateEmployee employeeId={selectedEmployeeId}
      onClose={handleModalClose}
      onUpdate={fetchEmployees}
      />
    )}
    </div>
  );
};

export default Employeelist