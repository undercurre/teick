/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-22 01:25:40
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-23 20:43:42
 * @FilePath: \teick\src\api\question.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from '../utils/request'
import { useUserStore } from '../store/user'

const userStore = useUserStore()

export interface CreateAnswerRes {
  data: {
    id: number
    attributes: {
      content: string
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  meta: {}
}

export async function CreateAnswer(content: string, question: string) {
  // return data
  return await request<CreateAnswerRes>('POST', '/api/answers', {
    data: {
      content,
      question,
      user: userStore.userInfo.id.toString(),
    },
  })
}
