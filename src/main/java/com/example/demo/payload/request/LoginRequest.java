package com.example.demo.payload.request;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class LoginRequest {
  private String username;

  private String password;

}
