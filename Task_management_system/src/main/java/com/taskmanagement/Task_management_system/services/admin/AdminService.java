package com.taskmanagement.Task_management_system.services.admin;

import com.taskmanagement.Task_management_system.dto.UserDto;

import java.util.List;

public interface AdminService {

    List<UserDto> getUsers();
}