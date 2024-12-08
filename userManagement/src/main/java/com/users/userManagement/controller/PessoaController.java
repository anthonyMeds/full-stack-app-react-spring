package com.users.userManagement.controller;

import com.users.userManagement.DTO.pessoa.DetalhePessoaResponseDTO;
import com.users.userManagement.DTO.pessoa.PessoaRequestDTO;
import com.users.userManagement.DTO.pessoa.PessoaResponseDTO;
import com.users.userManagement.config.exception.ServiceException;
import com.users.userManagement.domain.service.PessoaService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @Operation(summary = "Cadastrar Usuário", description = "Efetua o cadastro de um novo usuário.")
    @PostMapping()
    public ResponseEntity<PessoaResponseDTO> cadastrarPessoa(@Valid @RequestBody PessoaRequestDTO pessoaRequestDTO) throws ServiceException {
        PessoaResponseDTO response = pessoaService.cadastrarPessoa(pessoaRequestDTO);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Atualizar Usuário", description = "Atualiza um usuário pelo id.")
    @PutMapping("/{id}")
    public ResponseEntity<PessoaResponseDTO> atualizarUsuario(@Valid @RequestBody PessoaRequestDTO pessoaRequestDTO,
                                                              @PathVariable @NotNull Integer id) throws ServiceException {
        PessoaResponseDTO response = pessoaService.atualizarUsuario(pessoaRequestDTO, id);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Detalhar Usuário", description = "Obtém os detalhes de um usuário pelo id.")
    @GetMapping("/{id}")
    public ResponseEntity<DetalhePessoaResponseDTO> buscarDetalheUsuario(@PathVariable @NotNull Integer id) throws ServiceException {
        DetalhePessoaResponseDTO response = pessoaService.buscarDetalheUsuario(id);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Deletar Usuário", description = "Deleta um usuário pelo id.")
    @DeleteMapping("/{id}")
    public ResponseEntity<PessoaResponseDTO> deletarUsuario(@PathVariable @NotNull Integer id) throws ServiceException {
        PessoaResponseDTO response = pessoaService.deletarUsuario(id);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Buscar usuários", description = "Busca todos os usuários cadastrados.")
    @GetMapping()
    public ResponseEntity<List<DetalhePessoaResponseDTO>> buscarUsuarios() throws ServiceException {
        List<DetalhePessoaResponseDTO> response = pessoaService.buscarUsuarios();
        return ResponseEntity.ok(response);
    }

}
