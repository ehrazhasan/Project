package com.instilunchbox.AdminModule.Repo;
import com.instilunchbox.AdminModule.model.instiUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstiRepo extends JpaRepository<instiUser, Long> {
}
