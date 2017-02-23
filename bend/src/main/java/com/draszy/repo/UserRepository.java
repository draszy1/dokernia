package com.draszy.repo;

import com.draszy.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by draszy1 on 23.02.2017.
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
