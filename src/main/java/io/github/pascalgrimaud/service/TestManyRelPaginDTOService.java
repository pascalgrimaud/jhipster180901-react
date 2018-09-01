package io.github.pascalgrimaud.service;

import io.github.pascalgrimaud.service.dto.TestManyRelPaginDTODTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing TestManyRelPaginDTO.
 */
public interface TestManyRelPaginDTOService {

    /**
     * Save a testManyRelPaginDTO.
     *
     * @param testManyRelPaginDTODTO the entity to save
     * @return the persisted entity
     */
    TestManyRelPaginDTODTO save(TestManyRelPaginDTODTO testManyRelPaginDTODTO);

    /**
     * Get all the testManyRelPaginDTOS.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<TestManyRelPaginDTODTO> findAll(Pageable pageable);

    /**
     * Get all the TestManyRelPaginDTO with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    Page<TestManyRelPaginDTODTO> findAllWithEagerRelationships(Pageable pageable);
    
    /**
     * Get the "id" testManyRelPaginDTO.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<TestManyRelPaginDTODTO> findOne(Long id);

    /**
     * Delete the "id" testManyRelPaginDTO.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
