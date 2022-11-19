package com.example.demo.repository;

import com.example.demo.models.Consultant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {
    List<Consultant> findByEmailAndPassword(String email, String password);
}
