import { Moment } from 'moment';
import { IOperation } from 'app/shared/model/test-root/operation.model';

export const enum BankAccountType {
  CHECKING = 'CHECKING',
  SAVINGS = 'SAVINGS',
  LOAN = 'LOAN'
}

export interface IBankAccountMySuffix {
  id?: number;
  name?: string;
  bankNumber?: number;
  agencyNumber?: number;
  lastOperationDuration?: number;
  meanOperationDuration?: number;
  balance?: number;
  openingDay?: Moment;
  lastOperationDate?: Moment;
  active?: boolean;
  accountType?: BankAccountType;
  attachmentContentType?: string;
  attachment?: any;
  description?: any;
  userLogin?: string;
  userId?: number;
  operations?: IOperation[];
}

export const defaultValue: Readonly<IBankAccountMySuffix> = {
  active: false
};
