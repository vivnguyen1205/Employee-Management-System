package com.employees.manager.ems.controller;

import com.employees.manager.ems.dto.EmployeeDto;
import com.employees.manager.ems.entity.Employee;
import com.employees.manager.ems.service.EmployeeServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
    private EmployeeServiceImp employeeService;
    @PostMapping
    public ResponseEntity<EmployeeDto> createNewEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.createNewEmployee( employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }




}
