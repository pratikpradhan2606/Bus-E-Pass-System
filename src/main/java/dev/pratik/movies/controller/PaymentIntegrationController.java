package dev.pratik.movies.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import dev.pratik.movies.entity.User;
import dev.pratik.movies.exception.ResourceNotFoundException;
import dev.pratik.movies.repository.UserRepo;
import dev.pratik.movies.entity.PaymentHistory;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class PaymentIntegrationController {

    @Autowired
    UserRepo userRepo;


    @PostMapping("/create_order")
    public String createOrder(@RequestBody Map<String,Object> data) throws RazorpayException {

        String keyId = "rzp_test_t6U6FMDUOwMVMj";
        String secret = "w1AUJrgzJjOdcNLuJjpxrkXg";
        Object amountObject = data.get("amount");

        String type = data.get("type").toString();
        int amt = 40;
        if(type!=null && type.equals("Daily")){
            amt = 40;
        }else  if(type!=null && type.equals("Weekly")){
            amt = 250;
        }else if(type!=null && type.equals("Monthly")){
            amt= 1000;
        }else{
            return "Could Not Proceed";
        }
        var client = new RazorpayClient(keyId,secret);

        JSONObject ob = new JSONObject();
        ob.put("amount",amt*100);
        ob.put("currency","INR");
        ob.put("receipt","txn_23425");

        //creating new order

        Order order = client.orders.create(ob);
        System.out.println(order);

        return order.toString();
    }


    @PostMapping("/payment/success/{userId}")
    public ResponseEntity<Integer> savePaymentData(@PathVariable Long userId, @RequestBody PaymentHistory paymentHistory){
        User userData = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
        System.out.println("Here");

        if(userData != null) {
            List<PaymentHistory> transactions = userData.getPaymentHistory();
            if(transactions.isEmpty()){
                transactions = new ArrayList<>();
            }
            transactions.add(paymentHistory);
            userData.setPaymentHistory(transactions);
            userRepo.save(userData);
            return ResponseEntity.ok(200);
        }
        return ResponseEntity.ok(404);
    }

}
