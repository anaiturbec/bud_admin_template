export interface MongooseModel {
  _id?: string;
  active?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export type EnumClientDniType = 'V' | 'E' | 'J' | 'G' | 'P' | 'N/A';

export type EnumClientGender = 'femenino' | 'masculino' | 'otro';

export type UserTypeEnum = 'client' | 'superadmin';

export type DniTypeEnum = 'V' | 'E' | 'J' | 'G' | 'P' | 'N/A';

export type PermissionOptionEnum = 'create' | 'read' | 'update' | 'delete';

export type EnumUserIsVerified =
  | 'UNVERIFIED'
  | 'VERIFIED'
  | 'REVIEW_NEEDED'
  | 'REJECTED';

export interface Permission extends MongooseModel {
  name?: string;
  key?: string;
  options?: Array<PermissionOptionEnum>;
}

export interface Session extends MongooseModel {
  user?: string | User;
  token?: string;
  device?: string;
}

export interface User extends MongooseModel {
  slug?: string;
  email: string;
  client: string;
  password?: string;
  locale?: string;
  permission: Array<Permission>;
  userType: UserTypeEnum;
  emailVerify: boolean;
  resetTokenValidity?: Date;
  resetToken?: string;
  sessions?: Array<Session>;
  isVerified: EnumUserIsVerified;
}

export type PageInfo = {
  currentPage: number;
  perPage: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type Pagination<T> = {
  count: number;
  items: T[];
  pageInfo: PageInfo;
};

export interface DocumentModel {
  file?: File;
  id?: string;
  src?: string | ArrayBuffer;
  name?: string;
}

export interface Client extends MongooseModel {
  bankAccounts?: string[];
  birthDate?: Date;
  dni?: string;
  dniType?: EnumClientDniType;
  customerId?: string;
  expectedMonthlySavings?: number;
  fullName?: string;
  gender?: EnumClientGender;
  histories?: string[];
  monthlyIncome?: number;
  phone?: string;
  plans?: string[];
  plantLife?: string;
  slug?: string;
  budget?: number;
}
