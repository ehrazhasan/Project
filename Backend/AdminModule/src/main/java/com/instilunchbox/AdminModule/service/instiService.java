package com.instilunchbox.AdminModule.service;

import com.instilunchbox.AdminModule.Repo.InstiRepo;
import com.instilunchbox.AdminModule.model.instiUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class instiService {

    private final InstiRepo instiRepo;

    @Autowired
    public instiService(InstiRepo instiRepo) {
        this.instiRepo = instiRepo;
    }

    public instiUser addInstiUser(instiUser user){
        return instiRepo.save(user);
    }

    public List<instiUser> findAllInstiUsers(){
        return instiRepo.findAll();
    }

    public List<instiUser> findInstiUserByStatus(int status){
        return (List<instiUser>) instiRepo.findAllInstiUsersByStatus(status);
    }
}
