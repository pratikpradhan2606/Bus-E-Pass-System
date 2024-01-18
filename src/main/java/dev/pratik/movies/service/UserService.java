package dev.pratik.movies.service;

import dev.pratik.movies.entity.User;

import java.util.List;
import java.util.Optional;


public interface UserService {


    User createUser(User user);

    User getUserByEmail(String email);

    User updateUser(User userDto, Long userId);

    Optional<User> getUserById(Long userId);

    List<User> getAllUsers();

    void deleteUser(Long userId);

}
