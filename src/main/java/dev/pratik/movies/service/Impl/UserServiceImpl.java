package dev.pratik.movies.service.Impl;

import java.util.List;
import java.util.Optional;

import dev.pratik.movies.exception.ResourceNotFoundException;
import dev.pratik.movies.entity.Address;
import dev.pratik.movies.entity.User;
import dev.pratik.movies.repository.UserRepo;
import dev.pratik.movies.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;



    @Override
    public User createUser(User user) {
        User doesExists = this.getUserByEmail(user.getEmail());
        if(doesExists!=null){
            System.out.println("User ALready Exists");
            return doesExists;
        }

        User savedUser1 = this.userRepo.save(user);
        return savedUser1;
    }

    @Override
    public User updateUser(User user, Long userId) {

        User userData = this.userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", " Id ", userId));
        userData.setName(user.getName());
        userData.setEmail(user.getEmail());
        userData.setAadharNo(user.getAadharNo());
        userData.setMobileNo(user.getMobileNo());
        Address newAddress = user.getAddress();

        userData.setAddress(newAddress);

        User savedUser = this.userRepo.save(userData);

        return savedUser;
    }

    @Override
    public Optional<User> getUserById(Long userId) {

        Optional<User> user = this.userRepo.findById(userId);
                return user;

    }
    @Override
    public User getUserByEmail(String email) {

        User user = this.userRepo.findByEmail(email);
        if(user!=null){
            return user;
        }
        return null;
    }
    @Override
    public List<User> getAllUsers() {

        List<User> users = this.userRepo.findAll();
//        List<UserDto> userDtos = users.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());

        return users;
    }

    @Override
    public void deleteUser(Long userId) {
        User user = this.userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
        this.userRepo.delete(user);

    }



}
