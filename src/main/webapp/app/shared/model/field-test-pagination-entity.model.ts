import { Moment } from 'moment';

export const enum EnumFieldClass {
  ENUM_VALUE_1 = 'ENUM_VALUE_1',
  ENUM_VALUE_2 = 'ENUM_VALUE_2',
  ENUM_VALUE_3 = 'ENUM_VALUE_3'
}

export const enum EnumRequiredFieldClass {
  ENUM_VALUE_1 = 'ENUM_VALUE_1',
  ENUM_VALUE_2 = 'ENUM_VALUE_2',
  ENUM_VALUE_3 = 'ENUM_VALUE_3'
}

export interface IFieldTestPaginationEntity {
  id?: number;
  stringAlice?: string;
  stringRequiredAlice?: string;
  stringMinlengthAlice?: string;
  stringMaxlengthAlice?: string;
  stringPatternAlice?: string;
  integerAlice?: number;
  integerRequiredAlice?: number;
  integerMinAlice?: number;
  integerMaxAlice?: number;
  longAlice?: number;
  longRequiredAlice?: number;
  longMinAlice?: number;
  longMaxAlice?: number;
  floatAlice?: number;
  floatRequiredAlice?: number;
  floatMinAlice?: number;
  floatMaxAlice?: number;
  doubleRequiredAlice?: number;
  doubleMinAlice?: number;
  doubleMaxAlice?: number;
  bigDecimalRequiredAlice?: number;
  bigDecimalMinAlice?: number;
  bigDecimalMaxAlice?: number;
  localDateAlice?: Moment;
  localDateRequiredAlice?: Moment;
  instantAlice?: Moment;
  instanteRequiredAlice?: Moment;
  zonedDateTimeAlice?: Moment;
  zonedDateTimeRequiredAlice?: Moment;
  booleanAlice?: boolean;
  booleanRequiredAlice?: boolean;
  enumAlice?: EnumFieldClass;
  enumRequiredAlice?: EnumRequiredFieldClass;
  byteImageAliceContentType?: string;
  byteImageAlice?: any;
  byteImageRequiredAliceContentType?: string;
  byteImageRequiredAlice?: any;
  byteImageMinbytesAliceContentType?: string;
  byteImageMinbytesAlice?: any;
  byteImageMaxbytesAliceContentType?: string;
  byteImageMaxbytesAlice?: any;
  byteAnyAliceContentType?: string;
  byteAnyAlice?: any;
  byteAnyRequiredAliceContentType?: string;
  byteAnyRequiredAlice?: any;
  byteAnyMinbytesAliceContentType?: string;
  byteAnyMinbytesAlice?: any;
  byteAnyMaxbytesAliceContentType?: string;
  byteAnyMaxbytesAlice?: any;
  byteTextAlice?: any;
  byteTextRequiredAlice?: any;
  byteTextMinbytesAlice?: any;
  byteTextMaxbytesAlice?: any;
}

export const defaultValue: Readonly<IFieldTestPaginationEntity> = {
  booleanAlice: false,
  booleanRequiredAlice: false
};
