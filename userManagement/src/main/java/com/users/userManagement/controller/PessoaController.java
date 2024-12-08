package com.users.userManagement.controller;

import com.users.userManagement.DTO.pessoa.PessoaRequestDTO;
import com.users.userManagement.DTO.pessoa.PessoaResponseDTO;
import com.users.userManagement.config.exception.ServiceException;
import com.users.userManagement.domain.service.PessoaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}