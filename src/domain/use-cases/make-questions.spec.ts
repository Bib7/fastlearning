import { expect, test } from 'vitest';
import { MakeQuestionsUseCase } from './make-questions';
import { MakeQuestionsRepo } from '../repositories/make-questions.repository';
import { Questions } from '../entities/questions';

const fakeQuestionRepository: MakeQuestionsRepo = {
  create: async function (question: Questions): Promise<Questions> {
    return;
  },
};

test('Create new Question', async () => {
  const questionInstance = new MakeQuestionsUseCase(fakeQuestionRepository);
  const newQuestionDone = await questionInstance.execute({
    question: 'What color is my eyes?',
    studentId: 'mc890qmx8901j1qwj89amsndx',
  });

  expect(newQuestionDone.content).toEqual('What color is my eyes?');
  expect(newQuestionDone.studentId).toEqual('mc890qmx8901j1qwj89amsndx');
  expect(newQuestionDone.id).toBeTypeOf('string');
});
