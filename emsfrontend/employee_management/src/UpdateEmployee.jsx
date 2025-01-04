import React from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const UpdateEmployee = ({ employeeId, onClose, onUpdate }) => {
  const [employee, setEmployee] = useState(null); // react hook that initializes the state, initial value is empty array. current state is stored in employees and setEmployees is used to update the state.
  const [loading, setLoading] = useState(true); // react hook that initializes the state, initial value is true. current state is stored in loading and setLoading is used to update the state.
  const [error, setError] = useState(null); // react hook that initializes the state, initial value is null. current state is stored in error and setError is used to update the state.
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/employees/${employeeId}`);
        setEmployee(response.data);
      } catch (err) {
        setError("Error fetching employeeData");
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) {
      fetchEmployees();
    }
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employees/${employeeId}`, employee);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("error updating employee details", error);
      alert("Failed to update employee details");
    }
  };
  if (loading) return <div className="text-center mt-5">loading...</div>;
  if (error)
    return <div className="alert alert-danger text-center">{error}</div>;
  return (
    <div
      className="modal"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Employee</h5>
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='modal-body'>
              <div className='form-group'>
                <label>First Name</label>
                <input type='text' className='form-control' name='firstName' value={employee.firstName} onChange={handleChange} required   />
              </div>
              <div className='form-group'>
                <label>Last Name</label>
                <input type='text' className='form-control' name='lastName' value={employee.lastName} onChange={handleChange} required   />
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input type='text' className='form-control' name='email' value={employee.email} onChange={handleChange} required   />
              </div>
            </div>
            <div className='modal-footer'>
                <button type='button' className="btn btn-secondary" onClick={onClose}>Close</button>
                <button type='submit' className="btn btn-primary">Update Employee</button>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
