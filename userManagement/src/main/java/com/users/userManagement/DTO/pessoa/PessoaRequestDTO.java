package com.users.userManagement.DTO.pessoa;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record PessoaRequestDTO(
        @NotBlank(message = "O nome é obrigatório")
        @Size(max = 12, message = "Tamanho máximo do campo de 120 dígitos")
        @Schema(example = "joao teste")
        String nome,

        @Email(message = "E-mail inválido")
        @Schema(example = "joao@gmail.com")
        String email,

        @NotNull
        @JsonFormat(pattern = "dd/MM/yyyy")
        @Schema(type = "string", pattern = "dd/MM/yyyy", description = "Data de nascimento", example = "11/05/2012")
        LocalDate dtNascimento

) {
}
