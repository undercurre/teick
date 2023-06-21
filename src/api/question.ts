import { request } from '../utils/request'

export interface Question {
  id: number
  attributes: {
    content: string
    createdAt: string
    updateAt: string
    publishAt: string
  }
}

interface GetQuestionRes {
  data: Array<Question>
}

export async function getQuestion() {
  return await request<GetQuestionRes>('GET', '/api/questions')
}
