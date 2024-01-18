package dev.pratik.movies.DTO;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
class BusPassDTO {
    private String type;
    private String activatedOn;
    private String validity;
    private String status;
    private String renewalDate;
    private String passId;

}