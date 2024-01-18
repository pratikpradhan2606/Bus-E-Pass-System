package dev.pratik.movies.controller;

import dev.pratik.movies.entity.BusPass;
import dev.pratik.movies.entity.User;
import dev.pratik.movies.service.PassService;
import dev.pratik.movies.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private PassService passService;
    //POST create user
    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User user1 = this.userService.createUser(user);
        return new ResponseEntity<>(user1, HttpStatus.CREATED);
    }
    //PUT update user
    @PutMapping("/{userId}")
    public ResponseEntity<User> updateUser(@RequestBody User userDTO,@PathVariable Long userId){
        User userDTO1 = userService.updateUser(userDTO,userId);
        return ResponseEntity.ok(userDTO1);
    }
    //DELETE delete user
    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId){
        this.userService.deleteUser(userId);
        return new ResponseEntity<>(Map.of("Message","User Deleted Successfully"),HttpStatus.OK);
    }


    //GET user get
    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }


    //GET user get by Id
    @GetMapping("/{userId}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable Long userId){
        System.out.println(userId);
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email){

        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @PostMapping("/pass/{userId}")
    public ResponseEntity<User> updatePassDetails(@PathVariable Long userId, @RequestBody BusPass busPass){
        return ResponseEntity.ok(passService.updatePass(userId,busPass));

    }

    @PostMapping("/pass/conflict/{userId}")
    public ResponseEntity<Integer> passAlreadyExists(@PathVariable Long userId, @RequestBody BusPass busPass){
        BusPass pass = passService.doPassAlreadyExists(userId, busPass);
        if (pass==null) {
            return ResponseEntity.ok(404);
        }

        return ResponseEntity.ok(200);
    }

    @GetMapping("/passes/current/{userId}")
    public ResponseEntity<BusPass> getCurrentDatePass(@PathVariable Long userId) {
            BusPass currentDatePass = passService.getCurrentDatePass(userId);

            return new ResponseEntity<>(currentDatePass, HttpStatus.OK);
    }
}
