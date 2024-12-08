package com.users.userManagement.domain.service;

import com.users.userManagement.DTO.pessoa.PessoaRequestDTO;
import com.users.userManagement.DTO.pessoa.PessoaResponseDTO;
import com.users.userManagement.config.exception.ServiceException;
import com.users.userManagement.domain.entity.Pessoa;
import com.users.userManagement.domain.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;


    public PessoaResponseDTO cadastrarPessoa(PessoaRequestDTO pessoaRequestDTO) throws ServiceException {

        if (pessoaRepository.findByEmail(pessoaRequestDTO.email()).isPresent()) {
            throw new ServiceException("Usuário já cadastrado");
        }

        Pessoa pessoa = new Pessoa();
        pessoa.setNome(pessoaRequestDTO.nome());
        pessoa.setEmail(pessoaRequestDTO.email());
        pessoa.setNascimento(pessoaRequestDTO.nascimento());

        pessoaRepository.save(pessoa);

        return new PessoaResponseDTO(pessoa.getIdPessoa(), "Cadastro realizado com sucesso");
    }

}
