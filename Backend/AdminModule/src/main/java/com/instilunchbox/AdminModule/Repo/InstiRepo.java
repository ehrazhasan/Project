package com.instilunchbox.AdminModule.Repo;
import com.instilunchbox.AdminModule.model.instiUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface InstiRepo extends JpaRepository<instiUser, Long> {
    @Query(value = "SELECT * FROM instiuser.insti_user where status = 0;", nativeQuery = true)
    List<instiUser> findAllInstiUsersByStatus();

    @Modifying
    @Transactional
    @Query(value = "UPDATE instiuser.insti_user SET status = :stat where id = :id", nativeQuery = true)
    Integer updateUserStatusById(@RequestParam("id") Long id, @RequestParam("stat") Integer stat);
}
