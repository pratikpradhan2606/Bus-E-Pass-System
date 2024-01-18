package dev.pratik.movies.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Allow all origins, you might want to restrict this based on your requirements
        config.addAllowedOrigin("*");
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");

        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000") // Update with your React app's URL
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");

        registry.addMapping("/create_order")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("POST")
                .allowedHeaders("*");
    }
}
