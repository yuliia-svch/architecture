package com.example.demo.models;

import java.io.Serializable;
import java.util.Objects;

public class DeclarationRequestId implements Serializable {
    private long userId;
    private long doctorId;

    public DeclarationRequestId() {}

    public DeclarationRequestId (long userId, long doctorId) {
        this.userId = userId;
        this.doctorId = doctorId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DeclarationRequestId that = (DeclarationRequestId) o;
        return userId == that.userId && doctorId == that.doctorId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, doctorId);
    }
}
