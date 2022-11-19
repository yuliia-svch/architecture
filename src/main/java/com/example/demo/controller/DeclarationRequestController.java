package com.example.demo.controller;

import com.example.demo.models.DeclarationRequest;
import com.example.demo.models.MedicalInstitution;
import com.example.demo.service.IDeclarationRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class DeclarationRequestController {
    @Autowired
    private IDeclarationRequestService declarationRequestService;

    @GetMapping("/declarationRequestsUser")
    @ResponseBody
    public List<DeclarationRequest> getDeclarationRequestsByUser(@RequestParam long userId) {
        return declarationRequestService.getDeclarationRequestsByUser(userId);
    }

    @GetMapping("/declarationRequestsDoctor")
    @ResponseBody
    public List<DeclarationRequest> getDeclarationRequestsByDoctor(@RequestParam long doctorId) {
        return declarationRequestService.getDeclarationRequestsByDoctor(doctorId);
    }

    @GetMapping("/declarationRequestsConsultant")
    @ResponseBody
    public List<DeclarationRequest> getDeclarationRequestsByConsultant(@RequestParam long consultantId) {
        return declarationRequestService.getDeclarationRequestsByConsultant(consultantId);
    }
}
