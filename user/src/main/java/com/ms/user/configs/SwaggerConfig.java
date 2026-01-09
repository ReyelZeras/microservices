package com.ms.user.configs;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI userOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("API de Utilizadores")
                        .description("Microserviço para gestão de utilizadores e envio de notificações via RabbitMQ.")
                        .version("1.0.0"));
    }
}
