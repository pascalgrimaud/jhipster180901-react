import { ITestManyToOneMySuffix } from 'app/shared/model/test-many-to-one-my-suffix.model';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { IUser } from './user.model';

export interface ITestCustomTableName {
  id?: number;
  testManyToOnes?: ITestManyToOneMySuffix[];
  testManyToManies?: ITestManyToManyMySuffix[];
  testOneToOne?: ITestOneToOneMySuffix;
  testEntity?: ITestEntityMySuffixAlt;
  userOneToMany?: IUser;
  userManyToManies?: IUser[];
  userOneToOne?: IUser;
}

export const defaultValue: Readonly<ITestCustomTableName> = {};
