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
    private long ID;
    private String firstName;
    private String lastName;
    private String email;

}
