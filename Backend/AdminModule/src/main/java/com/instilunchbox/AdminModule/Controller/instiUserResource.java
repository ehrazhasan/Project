package com.instilunchbox.AdminModule.Controller;

import com.instilunchbox.AdminModule.model.instiUser;
import com.instilunchbox.AdminModule.service.instiService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/InstiUsr")
public class instiUserResource {

    private final instiService InstiService;

    public instiUserResource(instiService instiService) {
        InstiService = instiService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<instiUser>> getAllEmployees() {
        List<instiUser> InstiUsers = InstiService.findAllInstiUsers();
        return new ResponseEntity<>(InstiUsers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<instiUser> addInstiUser(@RequestBody instiUser InstiUser){
        instiUser newInstiUser = InstiService.addInstiUser(InstiUser);
        return new ResponseEntity<>(newInstiUser, HttpStatus.CREATED);
    }

    @GetMapping("/get/{status}")
    public ResponseEntity<List<instiUser>> getAllInstiUsersByStatus(int status){

        List<instiUser> newInstiUser = InstiService.findAllInstiUserByStatus(status);
        return new ResponseEntity<>(newInstiUser, HttpStatus.OK);
    }
}
