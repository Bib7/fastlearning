import { randomUUID } from 'node:crypto';

export class Student {
  public id: string;
  public name: string;
  constructor(name: string, id?: string) {
    this.name = name ? name : undefined;
    this.id = id ?? randomUUID();
  }
}
