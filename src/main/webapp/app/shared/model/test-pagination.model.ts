import { ITestManyToOneMySuffix } from 'app/shared/model/test-many-to-one-my-suffix.model';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { IUser } from './user.model';

export interface ITestPagination {
  id?: number;
  testManyToOnes?: ITestManyToOneMySuffix[];
  testManyToManies?: ITestManyToManyMySuffix[];
  testOneToOne?: ITestOneToOneMySuffix;
  userOneToMany?: IUser;
  userManyToManies?: IUser[];
  userOneToOne?: IUser;
}

export const defaultValue: Readonly<ITestPagination> = {};
