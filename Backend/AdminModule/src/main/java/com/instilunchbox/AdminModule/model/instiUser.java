package com.instilunchbox.AdminModule.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class instiUser implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long Id;

    private int Status = 0;

    private String name;
    private String contact;
    public instiUser() {}

    public instiUser(Long id, int status, String name, String contact) {
        Id = id;
        Status = status;
        this.name = name;
        this.contact = contact;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public int getStatus() {
        return Status;
    }

    public void setStatus(int status) {
        Status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}
