package com.example.demo.service;

import com.example.demo.models.DeclarationRequest;

import java.util.List;

public interface IDeclarationRequestService {
    List<DeclarationRequest> getDeclarationRequestsByUser(long userId);
    List<DeclarationRequest> getDeclarationRequestsByDoctor(long doctorId);
    List<DeclarationRequest> getDeclarationRequestsByConsultant(long consultantId);
    void addDeclarationRequest(DeclarationRequest declarationRequest);
}
