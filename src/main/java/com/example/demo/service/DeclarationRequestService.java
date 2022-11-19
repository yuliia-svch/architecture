package com.example.demo.service;

import com.example.demo.models.DeclarationRequest;
import com.example.demo.repository.DeclarationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeclarationRequestService implements IDeclarationRequestService {
    @Autowired
    private DeclarationRequestRepository declarationRequestRepository;

    @Override
    public List<DeclarationRequest> getDeclarationRequestsByUser(long userId) {
        return declarationRequestRepository.findByUserId(userId);
    }

    @Override
    public List<DeclarationRequest> getDeclarationRequestsByDoctor(long doctorId) {
        return declarationRequestRepository.findByDoctorId(doctorId);
    }

    @Override
    public List<DeclarationRequest> getDeclarationRequestsByConsultant(long consultantId) {
        return declarationRequestRepository.findByConsultantId(consultantId);
    }
}
