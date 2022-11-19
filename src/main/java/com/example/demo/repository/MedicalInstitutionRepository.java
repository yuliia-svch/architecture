package com.example.demo.repository;

import com.example.demo.models.MedicalInstitution;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicalInstitutionRepository extends JpaRepository<MedicalInstitution, Long> {
    List<MedicalInstitution> findByName(String name);
    List<MedicalInstitution> findByCity(String city);
}
