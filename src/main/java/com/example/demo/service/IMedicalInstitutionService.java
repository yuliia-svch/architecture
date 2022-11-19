package com.example.demo.service;

import com.example.demo.models.Doctor;
import com.example.demo.models.MedicalInstitution;

import java.util.List;

public interface IMedicalInstitutionService {
    List<MedicalInstitution> getAllMedicalInstitutions();
    List<MedicalInstitution> getMedicalInstitutionsByCity(String city);
    List<Doctor> getDoctors(long medInstId);
}
