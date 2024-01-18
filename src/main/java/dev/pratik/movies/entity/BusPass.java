package dev.pratik.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "BusPasses")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BusPass {
    private String type;
    private LocalDate activatedOn;
    private LocalDate validity;
    private String status;
    private LocalDate renewalDate;
    private String passId;
    private String source;
    private String destination;
    // constructors, getters, setters
}