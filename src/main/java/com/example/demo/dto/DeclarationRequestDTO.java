package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class DeclarationRequestDTO {
  private long userId;
  private long doctorId;
  private long consultantId;
  private String status;
  private String medData;
  private String comment;

  private String doctorName;
  private String userName;
  private String medInst;
}
