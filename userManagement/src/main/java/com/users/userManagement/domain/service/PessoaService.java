package com.users.userManagement.domain.service;

import com.users.userManagement.DTO.pessoa.DetalhePessoaResponseDTO;
import com.users.userManagement.DTO.pessoa.PessoaRequestDTO;
import com.users.userManagement.DTO.pessoa.PessoaResponseDTO;
import com.users.userManagement.config.exception.ServiceException;
import com.users.userManagement.domain.entity.Pessoa;
import com.users.userManagement.domain.repository.PessoaRepository;
import jakarta.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PessoaService {

    private static final Logger logger = LoggerFactory.getLogger(PessoaService.class);

    @Autowired
    private PessoaRepository pessoaRepository;


    public PessoaResponseDTO cadastrarPessoa(PessoaRequestDTO pessoaRequestDTO) throws ServiceException {

        if (pessoaRepository.findByEmail(pessoaRequestDTO.email()).isPresent()) {
            throw new ServiceException("Email já cadastrado");
        }

        Pessoa pessoa = new Pessoa();
        pessoa.setNome(pessoaRequestDTO.nome());
        pessoa.setEmail(pessoaRequestDTO.email());
        pessoa.setDtNascimento(pessoaRequestDTO.dtNascimento());

        try {
            pessoaRepository.save(pessoa);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new ServiceException("Não foi possível cadastrar o usuário.");
        }


        return new PessoaResponseDTO(pessoa.getIdPessoa(), "Cadastro realizado com sucesso");
    }

    public DetalhePessoaResponseDTO buscarDetalheUsuario(Integer idUsuario) throws ServiceException {
        Pessoa pessoa = pessoaRepository.findById(idUsuario)
                .orElseThrow(() -> new ServiceException("Pessoa não encontrada"));

        return new DetalhePessoaResponseDTO(pessoa.getIdPessoa(), pessoa.getNome(), pessoa.getEmail(), pessoa.getDtNascimento());
    }

    public List<DetalhePessoaResponseDTO> buscarUsuarios() {

        List<Pessoa> pessoasList = pessoaRepository.findAll();

        return pessoasList.stream()
                .map(pessoa ->
                        new DetalhePessoaResponseDTO(
                                pessoa.getIdPessoa(),
                                pessoa.getNome(),
                                pessoa.getEmail(),
                                pessoa.getDtNascimento() ))
                .collect(Collectors.toList());
    }

    public PessoaResponseDTO atualizarUsuario(PessoaRequestDTO pessoaRequestDTO, @NotNull Integer idUsuario) throws ServiceException {

        if (pessoaRepository.findById(idUsuario).isEmpty()) {
            throw new ServiceException("Usuário não cadastrado.");
        }

        if (pessoaRepository.findByEmail(pessoaRequestDTO.email()).isPresent()) {
            throw new ServiceException("Email já cadastrado");
        }

        Pessoa pessoa = new Pessoa();
        pessoa.setIdPessoa(idUsuario);
        pessoa.setNome(pessoaRequestDTO.nome());
        pessoa.setEmail(pessoaRequestDTO.email());
        pessoa.setDtNascimento(pessoaRequestDTO.dtNascimento());

        try {
            pessoaRepository.save(pessoa);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new ServiceException("Não foi possível atualizar o usuário.");
        }

        return new PessoaResponseDTO(pessoa.getIdPessoa(), "Atualização realizada com sucesso.");
    }

    public PessoaResponseDTO deletarUsuario(Integer id) throws ServiceException {

        if (pessoaRepository.findById(id).isEmpty()) {
            throw new ServiceException("Usuário não cadastrado.");
        }

        pessoaRepository.deleteById(id);

        return new PessoaResponseDTO(id, "Usuário deletado com sucesso.");
    }
}
