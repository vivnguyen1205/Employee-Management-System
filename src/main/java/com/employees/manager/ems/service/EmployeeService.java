package com.employees.manager.ems.service;

import com.employees.manager.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    public EmployeeDto createNewEmployee(EmployeeDto employeeDto);


    public List<EmployeeDto> getAllEmployees();

    public EmployeeDto getEmployeeById(Long id);

    public EmployeeDto updateEmployeeById(Long id, EmployeeDto employeeDto);

    public void deleteEmployeeById(Long id);
}
