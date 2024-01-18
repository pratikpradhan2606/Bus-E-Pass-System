package dev.pratik.movies.DTO;


import lombok.*;
import org.springframework.data.mongodb.core.mapping.Field;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
class AddressDTO {
    private String street;
    private String city;
    private String state;
    @Field("zipCode")
    private String zipCode;

    // constructors, getters, setters
}
