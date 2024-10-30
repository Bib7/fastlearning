import { randomUUID } from 'node:crypto';
import { z } from 'zod';

const userRoles = z.enum(['admin', 'common']);
const userTypes = z.enum(['student', 'producer']);
type roles = z.infer<typeof userRoles>;
type typers = z.infer<typeof userTypes>;

interface TypesOfUsers {
  role: roles;
  type: typers;
}

interface UserProps {
  username: string;
  password: string;
  id: string;
  email: string;
  type: TypesOfUsers;
}

export class User {
  public username: string;
  public password: string;
  public id: string;
  public email: string;
  public userType: TypesOfUsers;
  constructor(user: UserProps, id?: string, type?: TypesOfUsers) {
    this.username = user.username;
    this.password = user.password;
    this.id = id ?? randomUUID();
    this.email = user.email;
    this.userType = type ?? { role: 'admin', type: 'student' };
  }
}
