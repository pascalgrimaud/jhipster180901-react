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

export interface IFieldTestServiceImplEntity {
  id?: number;
  stringMika?: string;
  stringRequiredMika?: string;
  stringMinlengthMika?: string;
  stringMaxlengthMika?: string;
  stringPatternMika?: string;
  integerMika?: number;
  integerRequiredMika?: number;
  integerMinMika?: number;
  integerMaxMika?: number;
  longMika?: number;
  longRequiredMika?: number;
  longMinMika?: number;
  longMaxMika?: number;
  floatMika?: number;
  floatRequiredMika?: number;
  floatMinMika?: number;
  floatMaxMika?: number;
  doubleRequiredMika?: number;
  doubleMinMika?: number;
  doubleMaxMika?: number;
  bigDecimalRequiredMika?: number;
  bigDecimalMinMika?: number;
  bigDecimalMaxMika?: number;
  localDateMika?: Moment;
  localDateRequiredMika?: Moment;
  instantMika?: Moment;
  instanteRequiredMika?: Moment;
  zonedDateTimeMika?: Moment;
  zonedDateTimeRequiredMika?: Moment;
  booleanMika?: boolean;
  booleanRequiredMika?: boolean;
  enumMika?: EnumFieldClass;
  enumRequiredMika?: EnumRequiredFieldClass;
  byteImageMikaContentType?: string;
  byteImageMika?: any;
  byteImageRequiredMikaContentType?: string;
  byteImageRequiredMika?: any;
  byteImageMinbytesMikaContentType?: string;
  byteImageMinbytesMika?: any;
  byteImageMaxbytesMikaContentType?: string;
  byteImageMaxbytesMika?: any;
  byteAnyMikaContentType?: string;
  byteAnyMika?: any;
  byteAnyRequiredMikaContentType?: string;
  byteAnyRequiredMika?: any;
  byteAnyMinbytesMikaContentType?: string;
  byteAnyMinbytesMika?: any;
  byteAnyMaxbytesMikaContentType?: string;
  byteAnyMaxbytesMika?: any;
  byteTextMika?: any;
  byteTextRequiredMika?: any;
  byteTextMinbytesMika?: any;
  byteTextMaxbytesMika?: any;
}

export const defaultValue: Readonly<IFieldTestServiceImplEntity> = {
  booleanMika: false,
  booleanRequiredMika: false
};
