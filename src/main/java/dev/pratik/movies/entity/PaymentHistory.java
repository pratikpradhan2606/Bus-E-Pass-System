package dev.pratik.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "PaymentHistory")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentHistory {
    private String transactionId;
    private String passType;
    private String amount;
    private String date;

    // constructors, getters, setters
}
