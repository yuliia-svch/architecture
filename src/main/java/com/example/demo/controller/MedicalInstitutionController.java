package com.example.demo.controller;

import com.example.demo.dto.DeclarationRequestDTO;
import com.example.demo.models.DeclarationRequest;
import com.example.demo.models.Doctor;
import com.example.demo.models.MedicalInstitution;
import com.example.demo.service.IDeclarationRequestService;
import com.example.demo.service.IMedicalInstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MedicalInstitutionController {
    @Autowired
    protected IMedicalInstitutionService medicalInstitutionService;

    @GetMapping("/user/medicalInstitutions")
    @ResponseBody
    public List<MedicalInstitution> getMedicalInstitutions(@RequestParam String city) {
        return medicalInstitutionService.getMedicalInstitutionsByCity(city);
    }

    @GetMapping("/user/doctors")
    @ResponseBody
    public List<Doctor> getDoctors(@RequestParam long medInstId) {
        return medicalInstitutionService.getDoctors(medInstId);
    }
}
