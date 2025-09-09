// lib/http.ts
import { BASE_PATH } from '@/lib/config';
export async function httpFetch(input: string, init?: RequestInit) {
  const url = input.startsWith('http') ? input : `${BASE_PATH}${input}`;
  // 合并 headers
  // const headers: HeadersInit = {
  //   ...(init?.headers || {}),
  // };

  // // 合并其他 init 选项
  // const fetchOptions: RequestInit = {
  //   ...init,
  //   headers,
  // };
  // console.log("fetchOptions", fetchOptions)
  return await fetch(url, init);
}
// 挂载到全局（Node + 浏览器都能用）
// (globalThis as any).httpFetch = httpFetch;
