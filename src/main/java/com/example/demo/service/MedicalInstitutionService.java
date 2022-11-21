package com.example.demo.service;

import com.example.demo.models.Doctor;
import com.example.demo.models.MedicalInstitution;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.MedicalInstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicalInstitutionService implements IMedicalInstitutionService {
    @Autowired
    private MedicalInstitutionRepository medicalInstitutionRepository;
    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List<MedicalInstitution> getAllMedicalInstitutions() {
        return medicalInstitutionRepository.findAll();
    }

  public Optional<MedicalInstitution> getMedicalInstitutionById(long id) {
    return medicalInstitutionRepository.findById(id);
  }

  @Override
    public List<MedicalInstitution> getMedicalInstitutionsByCity(String city) {
        return medicalInstitutionRepository.findByCity(city);
    }

    @Override
    public List<Doctor> getDoctors(long medInstId) {
        return doctorRepository.findByMedInstId(medInstId);
    }

    @Override
    public Optional<Doctor> getDoctor(long doctorId) {
        return doctorRepository.findById(doctorId);
    }

}
