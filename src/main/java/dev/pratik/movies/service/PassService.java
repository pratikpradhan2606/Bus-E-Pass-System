package dev.pratik.movies.service;

import dev.pratik.movies.entity.User;
import dev.pratik.movies.entity.BusPass;

public interface PassService {

    User updatePass(Long id, BusPass busPass);
    BusPass doPassAlreadyExists(Long userId, BusPass busPass);
    BusPass getCurrentDatePass(Long userId);

}
