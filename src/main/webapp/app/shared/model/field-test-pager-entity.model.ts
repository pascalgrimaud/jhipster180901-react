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

export interface IFieldTestPagerEntity {
  id?: number;
  stringJade?: string;
  stringRequiredJade?: string;
  stringMinlengthJade?: string;
  stringMaxlengthJade?: string;
  stringPatternJade?: string;
  integerJade?: number;
  integerRequiredJade?: number;
  integerMinJade?: number;
  integerMaxJade?: number;
  longJade?: number;
  longRequiredJade?: number;
  longMinJade?: number;
  longMaxJade?: number;
  floatJade?: number;
  floatRequiredJade?: number;
  floatMinJade?: number;
  floatMaxJade?: number;
  doubleRequiredJade?: number;
  doubleMinJade?: number;
  doubleMaxJade?: number;
  bigDecimalRequiredJade?: number;
  bigDecimalMinJade?: number;
  bigDecimalMaxJade?: number;
  localDateJade?: Moment;
  localDateRequiredJade?: Moment;
  instantJade?: Moment;
  instanteRequiredJade?: Moment;
  zonedDateTimeJade?: Moment;
  zonedDateTimeRequiredJade?: Moment;
  booleanJade?: boolean;
  booleanRequiredJade?: boolean;
  enumJade?: EnumFieldClass;
  enumRequiredJade?: EnumRequiredFieldClass;
  byteImageJadeContentType?: string;
  byteImageJade?: any;
  byteImageRequiredJadeContentType?: string;
  byteImageRequiredJade?: any;
  byteImageMinbytesJadeContentType?: string;
  byteImageMinbytesJade?: any;
  byteImageMaxbytesJadeContentType?: string;
  byteImageMaxbytesJade?: any;
  byteAnyJadeContentType?: string;
  byteAnyJade?: any;
  byteAnyRequiredJadeContentType?: string;
  byteAnyRequiredJade?: any;
  byteAnyMinbytesJadeContentType?: string;
  byteAnyMinbytesJade?: any;
  byteAnyMaxbytesJadeContentType?: string;
  byteAnyMaxbytesJade?: any;
  byteTextJade?: any;
  byteTextRequiredJade?: any;
  byteTextMinbytesJade?: any;
  byteTextMaxbytesJade?: any;
}

export const defaultValue: Readonly<IFieldTestPagerEntity> = {
  booleanJade: false,
  booleanRequiredJade: false
};
