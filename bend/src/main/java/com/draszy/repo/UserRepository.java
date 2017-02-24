package com.draszy.repo;

import com.draszy.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Created by draszy1 on 23.02.2017.
 */
@Repository
public interface UserRepository extends MongoRepository<User, Long> {
}
