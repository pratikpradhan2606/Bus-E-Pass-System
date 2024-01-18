package dev.pratik;

import dev.pratik.movies.contact.ContactDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getallMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId),HttpStatus.OK);
    }

    @PostMapping("/contact")
    public ResponseEntity<String> handleContactForm(@RequestBody ContactDTO contactForm) {
        // Handle contact form data here
        System.out.println("Received message from: " + contactForm.getName());
        System.out.println("Email: " + contactForm.getEmail());
        System.out.println("Message: " + contactForm.getMessage());


        return ResponseEntity.ok("Message received successfully");
    }


}
