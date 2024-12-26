package com.employees.manager.ems.repository;

import com.employees.manager.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long > {




}
