package com.joyonta.Employee.model;

import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Data
public class Employee {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
