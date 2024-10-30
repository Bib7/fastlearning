import { randomUUID } from 'node:crypto';

export class Questions {
  public content: string;
  public id: string;
  public studentId: string;
  constructor(content: string, studentId: string, id?: string) {
    this.content = content ? content : undefined;
    this.id = id ?? randomUUID();
    this.studentId = studentId;
  }
}
