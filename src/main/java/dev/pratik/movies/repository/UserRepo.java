package dev.pratik.movies.repository;

import dev.pratik.movies.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, Long> {
    User findByEmail(String email);
}
