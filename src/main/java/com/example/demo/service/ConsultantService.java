package com.example.demo.service;

import com.example.demo.models.Consultant;
import com.example.demo.repository.ConsultantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsultantService implements IConsultantService {
    @Autowired
    private ConsultantRepository consultantRepository;

    @Override
    public Consultant getConsultant(String email, String password) {
        return consultantRepository.findByEmailAndPassword(email, password).get(0);
    }
}
