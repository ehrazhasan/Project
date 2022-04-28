package com.instilunchbox.AdminModule.Controller;

import antlr.build.Tool;
import com.instilunchbox.AdminModule.model.instiUser;
import com.instilunchbox.AdminModule.service.instiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/InstiUser")
public class instiUserResource {

    @Autowired
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

    @GetMapping("/get")
    public ResponseEntity<List<instiUser>> getAllInstiUsersByStatus(){
        List<instiUser> newInstiUser = InstiService.findAllInstiUserByStatus();
        return new ResponseEntity<>(newInstiUser, HttpStatus.OK);
    }

    @PutMapping("/update/{id}/{status}")
    public ResponseEntity<Integer> updateInstiStatus(@PathVariable("id") Long id, @PathVariable("status") Integer status){

        System.out.println(id);
        System.out.println(status);
        InstiService.updateInstiUser(id, status);
        if(status == 1){

            return new ResponseEntity<Integer>(1, HttpStatus.OK);
        }

        return new ResponseEntity<Integer>(0, HttpStatus.OK);
    }
}
