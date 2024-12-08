package com.users.userManagement.controller;

import com.users.userManagement.DTO.pessoa.DetalhePessoaResponseDTO;
import com.users.userManagement.DTO.pessoa.PessoaRequestDTO;
import com.users.userManagement.DTO.pessoa.PessoaResponseDTO;
import com.users.userManagement.config.exception.ServiceException;
import com.users.userManagement.domain.service.PessoaService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping()
    public ResponseEntity<PessoaResponseDTO> cadastrarPessoa(@Valid @RequestBody PessoaRequestDTO pessoaRequestDTO) throws ServiceException {
        PessoaResponseDTO response = pessoaService.cadastrarPessoa(pessoaRequestDTO);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}")
    public ResponseEntity<PessoaResponseDTO> atualizarUsuario(@Valid @RequestBody PessoaRequestDTO pessoaRequestDTO,
                                                              @PathVariable @NotNull Integer id) throws ServiceException {
        PessoaResponseDTO response = pessoaService.atualizarUsuario(pessoaRequestDTO, id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetalhePessoaResponseDTO> buscarDetalheUsuario(@PathVariable @NotNull Integer id) throws ServiceException {
        DetalhePessoaResponseDTO response = pessoaService.buscarDetalheUsuario(id);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PessoaResponseDTO> deletarUsuario(@PathVariable @NotNull Integer id) throws ServiceException {
        PessoaResponseDTO response = pessoaService.deletarUsuario(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping()
    public ResponseEntity<List<DetalhePessoaResponseDTO>> buscarUsuarios() throws ServiceException {
        List<DetalhePessoaResponseDTO> response = pessoaService.buscarUsuarios();
        return ResponseEntity.ok(response);
    }

}
