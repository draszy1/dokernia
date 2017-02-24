package com.draszy;

import com.draszy.model.User;
import com.draszy.repo.UserRepository;
import com.draszy.rest.UserController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@EnableMongoRepositories
@ComponentScan(basePackageClasses = {User.class, UserRepository.class, UserController.class})
public class BendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BendApplication.class, args);
	}
}
