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

import io.github.pascalgrimaud.domain.BankAccount;
import io.github.pascalgrimaud.domain.*; // for static metamodels
import io.github.pascalgrimaud.repository.BankAccountRepository;
import io.github.pascalgrimaud.service.dto.BankAccountCriteria;

import io.github.pascalgrimaud.service.dto.BankAccountDTO;
import io.github.pascalgrimaud.service.mapper.BankAccountMapper;

/**
 * Service for executing complex queries for BankAccount entities in the database.
 * The main input is a {@link BankAccountCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link BankAccountDTO} or a {@link Page} of {@link BankAccountDTO} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class BankAccountQueryService extends QueryService<BankAccount> {

    private final Logger log = LoggerFactory.getLogger(BankAccountQueryService.class);

    private final BankAccountRepository bankAccountRepository;

    private final BankAccountMapper bankAccountMapper;

    public BankAccountQueryService(BankAccountRepository bankAccountRepository, BankAccountMapper bankAccountMapper) {
        this.bankAccountRepository = bankAccountRepository;
        this.bankAccountMapper = bankAccountMapper;
    }

    /**
     * Return a {@link List} of {@link BankAccountDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<BankAccountDTO> findByCriteria(BankAccountCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<BankAccount> specification = createSpecification(criteria);
        return bankAccountMapper.toDto(bankAccountRepository.findAll(specification));
    }

    /**
     * Return a {@link Page} of {@link BankAccountDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<BankAccountDTO> findByCriteria(BankAccountCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<BankAccount> specification = createSpecification(criteria);
        return bankAccountRepository.findAll(specification, page)
            .map(bankAccountMapper::toDto);
    }

    /**
     * Function to convert BankAccountCriteria to a {@link Specification}
     */
    private Specification<BankAccount> createSpecification(BankAccountCriteria criteria) {
        Specification<BankAccount> specification = Specification.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), BankAccount_.id));
            }
            if (criteria.getName() != null) {
                specification = specification.and(buildStringSpecification(criteria.getName(), BankAccount_.name));
            }
            if (criteria.getBankNumber() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getBankNumber(), BankAccount_.bankNumber));
            }
            if (criteria.getAgencyNumber() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getAgencyNumber(), BankAccount_.agencyNumber));
            }
            if (criteria.getLastOperationDuration() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getLastOperationDuration(), BankAccount_.lastOperationDuration));
            }
            if (criteria.getMeanOperationDuration() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getMeanOperationDuration(), BankAccount_.meanOperationDuration));
            }
            if (criteria.getBalance() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getBalance(), BankAccount_.balance));
            }
            if (criteria.getOpeningDay() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getOpeningDay(), BankAccount_.openingDay));
            }
            if (criteria.getLastOperationDate() != null) {
                specification = specification.and(buildRangeSpecification(criteria.getLastOperationDate(), BankAccount_.lastOperationDate));
            }
            if (criteria.getActive() != null) {
                specification = specification.and(buildSpecification(criteria.getActive(), BankAccount_.active));
            }
            if (criteria.getAccountType() != null) {
                specification = specification.and(buildSpecification(criteria.getAccountType(), BankAccount_.accountType));
            }
            if (criteria.getUserId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getUserId(), BankAccount_.user, User_.id));
            }
            if (criteria.getOperationId() != null) {
                specification = specification.and(buildReferringEntitySpecification(criteria.getOperationId(), BankAccount_.operations, Operation_.id));
            }
        }
        return specification;
    }

}
