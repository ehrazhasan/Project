package com.instilunchbox.AdminModule.Repo;
import com.instilunchbox.AdminModule.model.instiUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface InstiRepo extends JpaRepository<instiUser, Long> {
    @Query(value = "SELECT * FROM instiuser.insti_user where status = 0;",
            nativeQuery = true)
    List<instiUser> findAllInstiUsersByStatus(int status);
}
