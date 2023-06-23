/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-22 01:25:40
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-23 21:01:37
 * @FilePath: \teick\src\api\question.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from '../utils/request'
import { useUserStore } from '../store/user'

export interface Test {
  id: number
  attributes: {
    pay_id: string
    pay_money: number
    createdAt: string
    updatedAt: string
    publishedAt: string
    result: string
    answers: {
      data: Array<{
        id: number
        attributes: {
          content: string
          createdAt: string
          updatedAt: string
          publishedAt: string
        }
      }>
    }
    user: {
      data: {
        id: number
        attributes: {
          username: string
          email: string
          provider: string
          confirmed: boolean
          blocked: boolean
          createdAt: string
          updatedAt: string
        }
      }
    }
  }
}

export interface GetTestRes {
  data: Array<Test>
  meta: {
    pagination: {
      start: number
      limit: number
      total: number
    }
  }
}

export async function getTest() {
  // return data
  return await request<GetTestRes>(
    'GET',
    '/api/tests?pagination[limit]=100&populate=*'
  )
}

interface CreateTestRes {
  data: {
    id: number
    attributes: {
      pay_id: string
      pay_money: number
      result: string
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  meta: {}
}

const userStore = useUserStore()

export async function createTest(result: string, answerIds: Array<number>) {
  // return data
  return await request<CreateTestRes>('POST', '/api/tests', {
    data: {
      pay_id: '23972193-2183812812',
      pay_money: 5.11,
      user: userStore.userInfo.id.toString(),
      result,
      answers: answerIds,
    },
  })
}
