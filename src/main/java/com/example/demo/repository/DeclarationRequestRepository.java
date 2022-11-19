package com.example.demo.repository;

import com.example.demo.models.DeclarationRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeclarationRequestRepository extends JpaRepository<DeclarationRequest, Long> {
    List<DeclarationRequest> findByUserId(long userId);
    List<DeclarationRequest> findByDoctorId(long doctorId);
    List<DeclarationRequest> findByConsultantId(long consultantId);
}
