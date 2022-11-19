package com.example.demo.service;

import com.example.demo.models.User;

public interface IUserService {
    User getUser(String email, String password);
}
