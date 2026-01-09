
package com.ms.email.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.UUID;

public record EmailRecordDto(
        @Schema(description = "ID único do usuário", example = "550e8400-e29b-41d4-a716-446655440000")
        UUID userId,
        @Schema(description = "E-mail do destinatário", example = "cliente@exemplo.com")
        String emailTo,
        @Schema(description = "Assunto do e-mail", example = "Confirmação de Cadastro")
        String subject,
        @Schema(description = "Corpo do e-mail", example = "Bem-vindo ao nosso sistema!")
        String text) {
}