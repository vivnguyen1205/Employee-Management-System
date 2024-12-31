package com.employees.manager.ems.service;
import com.employees.manager.ems.dto.EmployeeDto;
import com.employees.manager.ems.entity.Employee;
import com.employees.manager.ems.exception.EmployeeResourceNotFoundException;
import com.employees.manager.ems.mapper.EmployeeMapper;
import com.employees.manager.ems.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

private EmployeeRepository employeeRepository;

    public EmployeeDto createNewEmployee(EmployeeDto employeeDto){
        Employee newEmployee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(newEmployee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);


    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> allEmployees = employeeRepository.findAll();
        return allEmployees.stream().map((e)-> EmployeeMapper.mapToEmployeeDto(e)).collect(Collectors.toList());
    }
    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new EmployeeResourceNotFoundException("Employee ID requested does not exist"));
       return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public EmployeeDto updateEmployeeById(Long id, EmployeeDto employeeDto) {
       Employee employee = employeeRepository.findById(id).orElseThrow(()-> new EmployeeResourceNotFoundException("Employee ID requested does not exist"));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

//    public List<EmployeeDto> getAllEmployee(){




}
