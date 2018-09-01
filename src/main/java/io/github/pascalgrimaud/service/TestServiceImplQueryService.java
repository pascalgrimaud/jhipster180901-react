package io.github.pascalgrimaud.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import io.github.pascalgrimaud.domain.TestServiceImpl;
import io.github.pascalgrimaud.domain.*; // for static metamodels
import io.github.pascalgrimaud.repository.TestServiceImplRepository;
import io.github.pascalgrimaud.service.dto.TestServiceImplCriteria;


/**
 * Service for executing complex queries for TestServiceImpl entities in the database.
 * The main input is a {@link TestServiceImplCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link TestServiceImpl} or a {@link Page} of {@link TestServiceImpl} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class TestServiceImplQueryService extends QueryService<TestServiceImpl> {

    private final Logger log = LoggerFactory.getLogger(TestServiceImplQueryService.class);

    private final TestServiceImplRepository testServiceImplRepository;

    public TestServiceImplQueryService(TestServiceImplRepository testServiceImplRepository) {
        this.testServiceImplRepository = testServiceImplRepository;
    }

    /**
     * Return a {@link List} of {@link TestServiceImpl} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<TestServiceImpl> findByCriteria(TestServiceImplCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<TestServiceImpl> specification = createSpecification(criteria);
        return testServiceImplRepository.findAll(specification);
    }

    /**
     * Return a {@link Page} of {@link TestServiceImpl} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<TestServiceImpl> findByCriteria(TestServiceImplCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<TestServiceImpl> specification = createSpecification(criteria);
        return testServiceImplRepository.findAll(specification, page);
    }

    /**
     * Function to convert TestServiceImplCriteria to a {@link Specification}
     */
    private Specification<TestServiceImpl> createSpecification(TestServiceImplCriteria criteria) {
        Specification<TestServiceImpl> specification = Specification.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), TestServiceImpl_.id));
            }
            if (criteria.getTestManyToOneId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getTestManyToOneId(), TestServiceImpl_.testManyToOnes, TestManyToOne_.id));
            }
            if (criteria.getTestManyToManyId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getTestManyToManyId(), TestServiceImpl_.testManyToManies, TestManyToMany_.id));
            }
            if (criteria.getTestOneToOneId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getTestOneToOneId(), TestServiceImpl_.testOneToOne, TestOneToOne_.id));
            }
            if (criteria.getUserOneToManyId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getUserOneToManyId(), TestServiceImpl_.userOneToMany, User_.id));
            }
            if (criteria.getUserManyToManyId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getUserManyToManyId(), TestServiceImpl_.userManyToManies, User_.id));
            }
            if (criteria.getUserOneToOneId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getUserOneToOneId(), TestServiceImpl_.userOneToOne, User_.id));
            }
        }
        return specification;
    }

}
