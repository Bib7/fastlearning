import { Answers } from './answers';
import { Notes } from './notes';
import { Questions } from './questions';
import { Student } from './student';

export class Roadmap {
  public id: string;
  public aswers: Answers;
  public questions: Questions;
  public owner: Student;
  public active: boolean;
  public notes: Notes;
}
