package io.github.pascalgrimaud.service.impl;

import io.github.pascalgrimaud.service.TestServiceImplService;
import io.github.pascalgrimaud.domain.TestServiceImpl;
import io.github.pascalgrimaud.repository.TestServiceImplRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
/**
 * Service Implementation for managing TestServiceImpl.
 */
@Service
@Transactional
public class TestServiceImplServiceImpl implements TestServiceImplService {

    private final Logger log = LoggerFactory.getLogger(TestServiceImplServiceImpl.class);

    private final TestServiceImplRepository testServiceImplRepository;

    public TestServiceImplServiceImpl(TestServiceImplRepository testServiceImplRepository) {
        this.testServiceImplRepository = testServiceImplRepository;
    }

    /**
     * Save a testServiceImpl.
     *
     * @param testServiceImpl the entity to save
     * @return the persisted entity
     */
    @Override
    public TestServiceImpl save(TestServiceImpl testServiceImpl) {
        log.debug("Request to save TestServiceImpl : {}", testServiceImpl);        return testServiceImplRepository.save(testServiceImpl);
    }

    /**
     * Get all the testServiceImpls.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<TestServiceImpl> findAll() {
        log.debug("Request to get all TestServiceImpls");
        return testServiceImplRepository.findAllWithEagerRelationships();
    }

    /**
     * Get all the TestServiceImpl with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    public Page<TestServiceImpl> findAllWithEagerRelationships(Pageable pageable) {
        return testServiceImplRepository.findAllWithEagerRelationships(pageable);
    }
    


    /**
     *  get all the testServiceImpls where TestOneToOne is null.
     *  @return the list of entities
     */
    @Transactional(readOnly = true) 
    public List<TestServiceImpl> findAllWhereTestOneToOneIsNull() {
        log.debug("Request to get all testServiceImpls where TestOneToOne is null");
        return StreamSupport
            .stream(testServiceImplRepository.findAll().spliterator(), false)
            .filter(testServiceImpl -> testServiceImpl.getTestOneToOne() == null)
            .collect(Collectors.toList());
    }

    /**
     * Get one testServiceImpl by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<TestServiceImpl> findOne(Long id) {
        log.debug("Request to get TestServiceImpl : {}", id);
        return testServiceImplRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the testServiceImpl by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete TestServiceImpl : {}", id);
        testServiceImplRepository.deleteById(id);
    }
}
