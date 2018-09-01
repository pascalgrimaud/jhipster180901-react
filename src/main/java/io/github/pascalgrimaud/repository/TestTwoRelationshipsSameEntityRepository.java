package io.github.pascalgrimaud.repository;

import io.github.pascalgrimaud.domain.TestTwoRelationshipsSameEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the TestTwoRelationshipsSameEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TestTwoRelationshipsSameEntityRepository extends JpaRepository<TestTwoRelationshipsSameEntity, Long> {

}
