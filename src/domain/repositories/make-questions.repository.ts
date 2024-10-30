import { Questions } from '../entities/questions';

export interface MakeQuestionsRepo {
  create(question: Partial<Questions>): Promise<Questions>;
}
