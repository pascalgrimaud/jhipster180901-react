import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name={translate('global.menu.entities.main')} id="entity-menu">
    <DropdownItem tag={Link} to="/entity/bank-account-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testRootBankAccountMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/label">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testRootLabel" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/operation">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testRootOperation" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/field-test-service-class-entity">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.fieldTestServiceClassEntity" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/field-test-service-impl-entity">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.fieldTestServiceImplEntity" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/field-test-pagination-entity">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.fieldTestPaginationEntity" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/field-test-pager-entity">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.fieldTestPagerEntity" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/field-test-mapstruct-entity">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.fieldTestMapstructEntity" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/field-test-infinite-scroll-entity">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.fieldTestInfiniteScrollEntity" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/field-test-entity">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.fieldTestEntity" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-custom-table-name">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testCustomTableName" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-two-relationships-same-entity-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testTwoRelationshipsSameEntityMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-service-impl">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testServiceImpl" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-service-class">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testServiceClass" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-pagination">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testPagination" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-pager">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testPager" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-mapstruct">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testMapstruct" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-infinite-scroll">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testInfiniteScroll" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-entity-my-suffix-alt">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testEntityMySuffixAlt" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-many-to-many-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testManyToManyMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-many-rel-pagin-dto-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testManyRelPaginDtoMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-many-to-one-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testManyToOneMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/test-one-to-one-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testOneToOneMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-dto">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithDto" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-class">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceClass" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-impl">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceImpl" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-pagination">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithPagination" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-class-and-pagination">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceClassAndPagination" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-impl-and-pagination">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceImplAndPagination" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-class-and-dto">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceClassAndDto" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-impl-and-dto">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceImplAndDto" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-pagination-and-dto">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithPaginationAndDto" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-class-pagination-and-dto">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceClassPaginationAndDto" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/entity-with-service-impl-pagination-and-dto">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.entityWithServiceImplPaginationAndDto" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/division">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testRootDivision" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/place">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.testRootPlace" />
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
