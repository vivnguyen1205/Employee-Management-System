package com.employees.manager.ems.mapper;
import com.employees.manager.ems.entity.Employee;
import com.employees.manager.ems.dto.EmployeeDto;

//import com.employees.manager.ems.controller.EmployeeController;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        // convert employee and returns employeeDto
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()

        );
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(), // Match the getter name
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );

    }
}
