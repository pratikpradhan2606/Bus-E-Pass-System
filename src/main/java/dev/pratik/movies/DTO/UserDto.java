package dev.pratik.movies.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class UserDto {
    @Id
    private String aadharNo;
    private String name;
    private String mobileNo;
    private String email;

    private AddressDTO address;
    private BusPassDTO busPass;
    private List<PaymentHistoryDTO> paymentHistory;


}
