package dev.pratik.movies.DTO;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
class PaymentHistoryDTO{

    private String transactionId;
    private String amount;
    private String date;

    // constructors, getters, setters
}
