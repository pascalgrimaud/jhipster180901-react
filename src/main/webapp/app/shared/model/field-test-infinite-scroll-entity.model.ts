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

export interface IFieldTestInfiniteScrollEntity {
  id?: number;
  stringHugo?: string;
  stringRequiredHugo?: string;
  stringMinlengthHugo?: string;
  stringMaxlengthHugo?: string;
  stringPatternHugo?: string;
  integerHugo?: number;
  integerRequiredHugo?: number;
  integerMinHugo?: number;
  integerMaxHugo?: number;
  longHugo?: number;
  longRequiredHugo?: number;
  longMinHugo?: number;
  longMaxHugo?: number;
  floatHugo?: number;
  floatRequiredHugo?: number;
  floatMinHugo?: number;
  floatMaxHugo?: number;
  doubleRequiredHugo?: number;
  doubleMinHugo?: number;
  doubleMaxHugo?: number;
  bigDecimalRequiredHugo?: number;
  bigDecimalMinHugo?: number;
  bigDecimalMaxHugo?: number;
  localDateHugo?: Moment;
  localDateRequiredHugo?: Moment;
  instantHugo?: Moment;
  instanteRequiredHugo?: Moment;
  zonedDateTimeHugo?: Moment;
  zonedDateTimeRequiredHugo?: Moment;
  booleanHugo?: boolean;
  booleanRequiredHugo?: boolean;
  enumHugo?: EnumFieldClass;
  enumRequiredHugo?: EnumRequiredFieldClass;
  byteImageHugoContentType?: string;
  byteImageHugo?: any;
  byteImageRequiredHugoContentType?: string;
  byteImageRequiredHugo?: any;
  byteImageMinbytesHugoContentType?: string;
  byteImageMinbytesHugo?: any;
  byteImageMaxbytesHugoContentType?: string;
  byteImageMaxbytesHugo?: any;
  byteAnyHugoContentType?: string;
  byteAnyHugo?: any;
  byteAnyRequiredHugoContentType?: string;
  byteAnyRequiredHugo?: any;
  byteAnyMinbytesHugoContentType?: string;
  byteAnyMinbytesHugo?: any;
  byteAnyMaxbytesHugoContentType?: string;
  byteAnyMaxbytesHugo?: any;
  byteTextHugo?: any;
  byteTextRequiredHugo?: any;
  byteTextMinbytesHugo?: any;
  byteTextMaxbytesHugo?: any;
}

export const defaultValue: Readonly<IFieldTestInfiniteScrollEntity> = {
  booleanHugo: false,
  booleanRequiredHugo: false
};
