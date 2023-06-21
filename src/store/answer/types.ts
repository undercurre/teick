import { Question } from '../../api/question'

export interface QuestionWrapAnswer extends Question {
  answer: string
}

export interface RootState {
  answers: Array<QuestionWrapAnswer>
}
