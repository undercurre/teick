/*
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-22 01:25:40
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-25 01:40:23
 * @FilePath: \teick\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { useUserStore } from '../store/user'

const userStore = useUserStore()

// 创建一个 Axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://81.71.85.68:1337',
  // 其他配置选项
})

// 设置默认的请求头，包括 token
axiosInstance.defaults.headers.common[
  'Authorization'
] = `Bearer ${userStore.token}`

// 封装的请求函数
export const request = async <T>(
  method: string,
  url: string,
  data?: unknown
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url,
      data,
    })

    return response.data
  } catch (error) {
    // 处理错误
    console.error(error)
    throw error
  }
}
