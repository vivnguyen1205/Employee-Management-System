package com.employees.manager.ems.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
// dto - (data transfer object) : object that defines how the data will be sent over the network or application.
public class EmployeeDto {
    private long id; // Match case with Employee entity
    private String firstName; // Match case with Employee entity
    private String lastName;  // Match case with Employee entity
    private String email;
}