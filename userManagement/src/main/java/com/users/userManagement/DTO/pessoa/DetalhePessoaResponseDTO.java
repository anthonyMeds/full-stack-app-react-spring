package com.users.userManagement.DTO.pessoa;

import java.time.LocalDate;

public record DetalhePessoaResponseDTO(Integer id, String nome, String email, LocalDate dtNascimento) {
}
