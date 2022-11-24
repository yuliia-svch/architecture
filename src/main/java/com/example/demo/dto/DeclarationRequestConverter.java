package com.example.demo.dto;

import com.example.demo.models.DeclarationRequest;

public class DeclarationRequestConverter {
  public static DeclarationRequest convertFromDTO(DeclarationRequestDTO declarationRequestDTO) {
    DeclarationRequest declarationRequest = new DeclarationRequest();
    declarationRequest.setDoctorId(declarationRequestDTO.getDoctorId());
    declarationRequest.setComment(declarationRequestDTO.getComment());
    declarationRequest.setStatus(declarationRequestDTO.getStatus());
    declarationRequest.setMedData(declarationRequestDTO.getMedData());
    declarationRequest.setUserId(declarationRequestDTO.getUserId());
    declarationRequest.setConsultantId(declarationRequestDTO.getConsultantId());
    return declarationRequest;
  }

  public static DeclarationRequestDTO convertToDTO(DeclarationRequest declarationRequest) {
    DeclarationRequestDTO declarationRequestDTO = new DeclarationRequestDTO();
    declarationRequestDTO.setDoctorId(declarationRequest.getDoctorId());
    declarationRequestDTO.setComment(declarationRequest.getComment());
    declarationRequestDTO.setStatus(declarationRequest.getStatus());
    declarationRequestDTO.setMedData(declarationRequest.getMedData());
    declarationRequestDTO.setConsultantId(declarationRequest.getConsultantId());
    declarationRequestDTO.setUserId(declarationRequest.getUserId());
    return declarationRequestDTO;
  }
}
