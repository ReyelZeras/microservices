package com.ms.user.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserRecordDto(
        @Schema(description = "Nome completo do utilizador", example = "Ana Silva")
        @NotBlank String name,
        @Schema(description = "Endereço de e-mail", example = "ana@email.com")
        @NotBlank @Email String email
) {}
