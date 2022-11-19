package com.example.demo.service;

import com.example.demo.models.Consultant;

public interface IConsultantService {
    Consultant getConsultant(String email, String password);
}
