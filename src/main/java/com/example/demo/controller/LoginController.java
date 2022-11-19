package com.example.demo.controller;

import com.example.demo.service.IConsultantService;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class LoginController {
    @Autowired
    private IUserService userService;
    @Autowired
    private IConsultantService consultantService;


}
