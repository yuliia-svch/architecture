package com.example.demo.service;

import com.example.demo.models.Doctor;
import com.example.demo.models.MedicalInstitution;

import java.util.List;
import java.util.Optional;

public interface IMedicalInstitutionService {
    List<MedicalInstitution> getAllMedicalInstitutions();
    Optional<MedicalInstitution> getMedicalInstitutionById(long id);
    List<MedicalInstitution> getMedicalInstitutionsByCity(String city);
    List<Doctor> getDoctors(long medInstId);
    Optional<Doctor> getDoctor(long doctorId);
}
