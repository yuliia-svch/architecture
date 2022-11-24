package com.example.demo.controller;

import com.example.demo.dto.DeclarationRequestConverter;
import com.example.demo.dto.DeclarationRequestDTO;
import com.example.demo.models.DeclarationRequest;
import com.example.demo.models.Doctor;
import com.example.demo.models.MedicalInstitution;
import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.IDeclarationRequestService;
import com.example.demo.service.IMedicalInstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DeclarationRequestController {
    @Autowired
    private IDeclarationRequestService declarationRequestService;
    @Autowired
    private IMedicalInstitutionService medicalInstitutionService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/declarationRequests")
    void addDeclaration(@RequestBody DeclarationRequestDTO declarationRequestDTO) {
        declarationRequestService.addDeclarationRequest(DeclarationRequestConverter.convertFromDTO(declarationRequestDTO));
    }

    @GetMapping("/user/declarationRequests")
    public List<DeclarationRequestDTO> getDeclarations() {
        List<DeclarationRequestDTO> drDTO = new ArrayList<>();
        for(DeclarationRequest dr : declarationRequestService.getDeclarationRequests()) {
          Optional<Doctor> doctor = medicalInstitutionService.getDoctor(dr.getDoctorId());
          Optional<MedicalInstitution> mi = medicalInstitutionService.getMedicalInstitutionById(doctor.get().getMedInstId());
          Optional<User> user = userRepository.findById(dr.getUserId());
          DeclarationRequestDTO declarationRequestDTO = DeclarationRequestConverter.convertToDTO(dr);
          declarationRequestDTO.setDoctorName(doctor.get().getFirstName() + " " + doctor.get().getLastName());
          declarationRequestDTO.setUserName(user.get().getEmail());
          declarationRequestDTO.setMedInst(mi.get().getName());
          drDTO.add(declarationRequestDTO);
        }
        return drDTO;
    }

    @GetMapping("/user/declarationRequestsByUser")
    @ResponseBody
    public List<DeclarationRequestDTO> getDeclarationRequestsByUser(@RequestParam long userId) {
      List<DeclarationRequestDTO> drDTO = new ArrayList<>();
        for(DeclarationRequest dr : declarationRequestService.getDeclarationRequestsByUser(userId)) {
          Optional<Doctor> doctor = medicalInstitutionService.getDoctor(dr.getDoctorId());
          Optional<MedicalInstitution> mi = medicalInstitutionService.getMedicalInstitutionById(doctor.get().getMedInstId());
          Optional<User> user = userRepository.findById(dr.getUserId());
          DeclarationRequestDTO declarationRequestDTO = DeclarationRequestConverter.convertToDTO(dr);
          declarationRequestDTO.setDoctorName(doctor.get().getFirstName() + " " + doctor.get().getLastName());
          declarationRequestDTO.setMedInst(mi.get().getName());
          declarationRequestDTO.setUserName(user.get().getEmail());
          drDTO.add(declarationRequestDTO);
        }
        return drDTO;
    }

    @GetMapping("/declarationRequestsByDoctor")
    @ResponseBody
    public List<DeclarationRequest> getDeclarationRequestsByDoctor(@RequestParam long doctorId) {
        return declarationRequestService.getDeclarationRequestsByDoctor(doctorId);
    }

    @GetMapping("/declarationRequestsByConsultant")
    @ResponseBody
    public List<DeclarationRequest> getDeclarationRequestsByConsultant(@RequestParam long consultantId) {
        return declarationRequestService.getDeclarationRequestsByConsultant(consultantId);
    }
}
