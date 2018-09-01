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

export interface IFieldTestMapstructEntity {
  id?: number;
  stringEva?: string;
  stringRequiredEva?: string;
  stringMinlengthEva?: string;
  stringMaxlengthEva?: string;
  stringPatternEva?: string;
  integerEva?: number;
  integerRequiredEva?: number;
  integerMinEva?: number;
  integerMaxEva?: number;
  longEva?: number;
  longRequiredEva?: number;
  longMinEva?: number;
  longMaxEva?: number;
  floatEva?: number;
  floatRequiredEva?: number;
  floatMinEva?: number;
  floatMaxEva?: number;
  doubleRequiredEva?: number;
  doubleMinEva?: number;
  doubleMaxEva?: number;
  bigDecimalRequiredEva?: number;
  bigDecimalMinEva?: number;
  bigDecimalMaxEva?: number;
  localDateEva?: Moment;
  localDateRequiredEva?: Moment;
  instantEva?: Moment;
  instanteRequiredEva?: Moment;
  zonedDateTimeEva?: Moment;
  zonedDateTimeRequiredEva?: Moment;
  booleanEva?: boolean;
  booleanRequiredEva?: boolean;
  enumEva?: EnumFieldClass;
  enumRequiredEva?: EnumRequiredFieldClass;
  byteImageEvaContentType?: string;
  byteImageEva?: any;
  byteImageRequiredEvaContentType?: string;
  byteImageRequiredEva?: any;
  byteImageMinbytesEvaContentType?: string;
  byteImageMinbytesEva?: any;
  byteImageMaxbytesEvaContentType?: string;
  byteImageMaxbytesEva?: any;
  byteAnyEvaContentType?: string;
  byteAnyEva?: any;
  byteAnyRequiredEvaContentType?: string;
  byteAnyRequiredEva?: any;
  byteAnyMinbytesEvaContentType?: string;
  byteAnyMinbytesEva?: any;
  byteAnyMaxbytesEvaContentType?: string;
  byteAnyMaxbytesEva?: any;
  byteTextEva?: any;
  byteTextRequiredEva?: any;
  byteTextMinbytesEva?: any;
  byteTextMaxbytesEva?: any;
}

export const defaultValue: Readonly<IFieldTestMapstructEntity> = {
  booleanEva: false,
  booleanRequiredEva: false
};
