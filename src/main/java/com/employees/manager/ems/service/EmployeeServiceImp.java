package com.employees.manager.ems.service;
import com.employees.manager.ems.dto.EmployeeDto;
import com.employees.manager.ems.entity.Employee;
import com.employees.manager.ems.mapper.EmployeeMapper;
import com.employees.manager.ems.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImp implements EmployeeService{

private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createNewEmployee(EmployeeDto employeeDto){
        Employee newEmployee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(newEmployee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);


    }



}
