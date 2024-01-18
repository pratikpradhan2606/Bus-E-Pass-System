package dev.pratik.movies.service.Impl;

import dev.pratik.movies.entity.User;
import dev.pratik.movies.exception.ResourceNotFoundException;
import dev.pratik.movies.repository.UserRepo;
import dev.pratik.movies.entity.BusPass;
import dev.pratik.movies.service.PassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class PassServiceImpl implements PassService {
    @Autowired
    UserRepo userRepo;

    @Override
    public BusPass doPassAlreadyExists(Long userId, BusPass busPass) {
        User userData = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
        System.out.println("Checking Do pass already exists");

        if (userData != null) {
            List<BusPass> existingPasses = userData.getBusPasses();
            setPassDates(busPass);
            System.out.println(busPass.toString());
            if(existingPasses==null){
                existingPasses = new ArrayList<>();
            }else{
                // Check for conflicts with existing passes
                if (existingPasses.stream().anyMatch(existingPass -> doDatesConflict(existingPass, busPass))) {
                    System.out.println("Conflict with existing passes. Cannot generate pass.");
                    return null;
                }

            }
            System.out.println("There is no Conflict");
            return busPass;
        }

        return null;
    }

    @Override
    public User updatePass(Long id, BusPass busPass) {
        User userData = userRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id", id));
        setPassDates(busPass);
        if (userData != null) {
            List<BusPass> existingPasses = userData.getBusPasses();
            if(existingPasses==null){
                existingPasses = new ArrayList<>();
            }else{
                // Check for conflicts with existing passes
                if (existingPasses.stream().anyMatch(existingPass -> doDatesConflict(existingPass, busPass))) {
                    System.out.println("Conflict with existing passes. Cannot generate pass.");
                    return null;
                }

            }

            // Generate a new pass
            String passId = UUID.randomUUID().toString();
            busPass.setPassId(passId);

            // Add the new pass to the user's existing passes
            existingPasses.add(busPass);
            userData.setBusPasses(existingPasses);

            // Save the updated user information
            User user11 = userRepo.save(userData);
            return user11;
        }

        return null;
    }

    private void setPassDates(BusPass busPass) {
        LocalDate activationDate = busPass.getActivatedOn();

        if ("Daily".equalsIgnoreCase(busPass.getType())) {
            // For 1-day pass, set validity as one day from activation
            busPass.setValidity(activationDate.plusDays(1));
            busPass.setRenewalDate(null); // No renewal for 1-day pass
        } else if ("Weekly".equalsIgnoreCase(busPass.getType())) {
            // For weekly pass, set validity as one week from activation
            busPass.setValidity(activationDate.plusWeeks(1));
            busPass.setRenewalDate(activationDate.plusWeeks(1));
        } else {
            // Default logic (e.g., monthly pass)
            busPass.setValidity(activationDate.plusMonths(1)); // Assuming validity is one month from activation
            busPass.setRenewalDate(activationDate.plusMonths(1));
        }
    }

    private boolean doDatesConflict(BusPass existingPass, BusPass newPass) {
        LocalDate existingPassStartDate = existingPass.getActivatedOn();
        LocalDate existingPassEndDate = existingPass.getValidity();

        LocalDate newPassStartDate = newPass.getActivatedOn();
        LocalDate newPassEndDate = newPass.getValidity();

        // Check for conflicts in date ranges
        boolean startDateConflict = (newPassStartDate.isEqual(existingPassStartDate) || newPassStartDate.isAfter(existingPassStartDate))
                && newPassStartDate.isBefore(existingPassEndDate);

        boolean endDateConflict = (newPassEndDate.isEqual(existingPassEndDate) || newPassEndDate.isAfter(existingPassEndDate))
                && newPassEndDate.isAfter(existingPassStartDate);
        // 2024/01/01 == 2024/01/01
        if(existingPassStartDate.isEqual(newPassStartDate)){
            return true;
        }
        //existingPass 2024/01/01 - 2024/01/07
        //new          2024/01/03 - 2024/01/05
        if(newPassStartDate.isAfter(existingPassStartDate) && newPassStartDate.isBefore(existingPassEndDate)){
            System.out.println("newPassStartDate.isAfter(existingPassStartDate) && newPassStartDate.isBefore(existingPassEndDate)");
            return true;
        }
        //user has pass after next week and want for today
        if(newPassStartDate.isBefore(existingPassStartDate) && newPassEndDate.isAfter(existingPassStartDate)){
            System.out.println("newPassStartDate.isBefore(existingPassStartDate) && newPassEndDate.isBefore(existingPassStartDate))");
            return true;
        }
        return false;
    }

    @Override
    public BusPass getCurrentDatePass(Long userId) {
        User userData = userRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));

        if (userData != null) {
            return getPassForCurrentDate(userData.getBusPasses());
        }

        return null;
    }

    private BusPass getPassForCurrentDate(List<BusPass> passes) {
        LocalDate currentDate = LocalDate.now();
        if(passes==null)return null;
        return passes.stream()
                .filter(pass -> pass.getActivatedOn().isEqual(currentDate) || (pass.getActivatedOn().isBefore(currentDate) && pass.getValidity().isAfter(currentDate)))
                .findFirst()
                .orElse(null);
    }


}