// lib/http.ts
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/moon';

export async function httpFetch(input: string, init?: RequestInit) {
  const url = input.startsWith('http') ? input : `${BASE_PATH}${input}`;
  const headers: HeadersInit = {
    ...(init?.headers || {}),
  };
  const response = await fetch(url, { ...init, headers });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
// 挂载到全局（Node + 浏览器都能用）
// (globalThis as any).httpFetch = httpFetch;
