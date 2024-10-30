import { Questions } from '../entities/questions';
import { MakeQuestionsRepo } from '../repositories/make-questions.repository';

interface MakeQuestionDTO {
  question: string;
  studentId: string;
}

export class MakeQuestionsUseCase {
  constructor(private readonly makeQuestions: MakeQuestionsRepo) {}
  async execute({ question, studentId }: MakeQuestionDTO): Promise<Questions> {
    const newQuestion = new Questions(question, studentId);
    await this.makeQuestions.create(newQuestion);
    return newQuestion;
  }
}
