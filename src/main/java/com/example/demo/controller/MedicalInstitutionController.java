package com.example.demo.controller;

import com.example.demo.models.Doctor;
import com.example.demo.models.MedicalInstitution;
import com.example.demo.service.IMedicalInstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MedicalInstitutionController {
    @Autowired
    protected IMedicalInstitutionService medicalInstitutionService;

  @GetMapping("/medicalInstitutions")
  public List<MedicalInstitution> getMedicalInstitutions() {
    return medicalInstitutionService.getAllMedicalInstitutions();
  }
//    @GetMapping("/medicalInstitutions")
//    @ResponseBody
//    public List<MedicalInstitution> getMedicalInstitutions(@RequestParam String city) {
//        return medicalInstitutionService.getMedicalInstitutionsByCity(city);
//    }

    @GetMapping("/doctors")
    @ResponseBody
    public List<Doctor> getDoctors(@RequestParam long medInstId) {
        return medicalInstitutionService.getDoctors(medInstId);
    }
}
