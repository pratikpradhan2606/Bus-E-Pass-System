package dev.pratik.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection="users")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class User {
    @Id
    private Long aadharNo;
    private String name;
    private String mobileNo;
    private String email;
    private Address address;
    private List<BusPass> busPasses;
    private List<PaymentHistory> paymentHistory = new ArrayList<>();


}
