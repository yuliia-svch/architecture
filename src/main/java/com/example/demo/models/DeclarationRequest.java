package com.example.demo.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Data
@Getter
@Setter
@Entity
@Table(name = "DeclarationRequest")
@IdClass(DeclarationRequestId.class)
public class DeclarationRequest {
    @Id
    private long userId;
    @Id
    private long doctorId;
    private long consultantId;
    private String status;
    private String medData;
    private String comment;
}
