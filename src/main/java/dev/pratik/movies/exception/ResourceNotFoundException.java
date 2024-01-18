package dev.pratik.movies.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResourceNotFoundException extends RuntimeException {
    String resourceName;
    String fieldName;
    long fieldValue;

    public ResourceNotFoundException(String message, String resourceName, Long fieldValue) {
        super(String.format("%s not found with %s : %i",resourceName,resourceName,fieldValue));
        this.resourceName = resourceName;
        this.fieldName = message;
        this.fieldValue = fieldValue;
    }
}
