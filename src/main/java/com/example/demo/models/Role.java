package com.example.demo.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Data
@Getter
@Setter
@Entity
@Table(name="Role")
public class Role {
  @Id
  private long id;

  @Enumerated(EnumType.STRING)
  private ERole name;

}
