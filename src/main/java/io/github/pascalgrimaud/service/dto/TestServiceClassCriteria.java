package io.github.pascalgrimaud.service.dto;

import java.io.Serializable;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;






/**
 * Criteria class for the TestServiceClass entity. This class is used in TestServiceClassResource to
 * receive all the possible filtering options from the Http GET request parameters.
 * For example the following could be a valid requests:
 * <code> /test-service-classes?id.greaterThan=5&amp;attr1.contains=something&amp;attr2.specified=false</code>
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class TestServiceClassCriteria implements Serializable {
    private static final long serialVersionUID = 1L;


    private LongFilter id;

    private LongFilter testManyToOneId;

    private LongFilter testManyToManyId;

    private LongFilter testOneToOneId;

    private LongFilter userOneToManyId;

    private LongFilter userManyToManyId;

    private LongFilter userOneToOneId;

    public TestServiceClassCriteria() {
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public LongFilter getTestManyToOneId() {
        return testManyToOneId;
    }

    public void setTestManyToOneId(LongFilter testManyToOneId) {
        this.testManyToOneId = testManyToOneId;
    }

    public LongFilter getTestManyToManyId() {
        return testManyToManyId;
    }

    public void setTestManyToManyId(LongFilter testManyToManyId) {
        this.testManyToManyId = testManyToManyId;
    }

    public LongFilter getTestOneToOneId() {
        return testOneToOneId;
    }

    public void setTestOneToOneId(LongFilter testOneToOneId) {
        this.testOneToOneId = testOneToOneId;
    }

    public LongFilter getUserOneToManyId() {
        return userOneToManyId;
    }

    public void setUserOneToManyId(LongFilter userOneToManyId) {
        this.userOneToManyId = userOneToManyId;
    }

    public LongFilter getUserManyToManyId() {
        return userManyToManyId;
    }

    public void setUserManyToManyId(LongFilter userManyToManyId) {
        this.userManyToManyId = userManyToManyId;
    }

    public LongFilter getUserOneToOneId() {
        return userOneToOneId;
    }

    public void setUserOneToOneId(LongFilter userOneToOneId) {
        this.userOneToOneId = userOneToOneId;
    }

    @Override
    public String toString() {
        return "TestServiceClassCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (testManyToOneId != null ? "testManyToOneId=" + testManyToOneId + ", " : "") +
                (testManyToManyId != null ? "testManyToManyId=" + testManyToManyId + ", " : "") +
                (testOneToOneId != null ? "testOneToOneId=" + testOneToOneId + ", " : "") +
                (userOneToManyId != null ? "userOneToManyId=" + userOneToManyId + ", " : "") +
                (userManyToManyId != null ? "userManyToManyId=" + userManyToManyId + ", " : "") +
                (userOneToOneId != null ? "userOneToOneId=" + userOneToOneId + ", " : "") +
            "}";
    }

}
