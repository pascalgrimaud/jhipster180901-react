package io.github.pascalgrimaud.service.mapper;

import io.github.pascalgrimaud.domain.*;
import io.github.pascalgrimaud.service.dto.TestManyRelPaginDTODTO;

import org.mapstruct.*;

/**
 * Mapper for the entity TestManyRelPaginDTO and its DTO TestManyRelPaginDTODTO.
 */
@Mapper(componentModel = "spring", uses = {TestMapstructMapper.class})
public interface TestManyRelPaginDTOMapper extends EntityMapper<TestManyRelPaginDTODTO, TestManyRelPaginDTO> {



    default TestManyRelPaginDTO fromId(Long id) {
        if (id == null) {
            return null;
        }
        TestManyRelPaginDTO testManyRelPaginDTO = new TestManyRelPaginDTO();
        testManyRelPaginDTO.setId(id);
        return testManyRelPaginDTO;
    }
}
