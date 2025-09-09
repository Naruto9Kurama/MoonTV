// lib/fetch-interceptor.ts
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/moon';

const originalFetch = globalThis.fetch;

globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  let url = typeof input === 'string' ? input : input.toString();

  // 请求拦截：统一加 basePath
  if (!url.startsWith('http')) {
    url = `${BASE_PATH}${url}`;
  }

  // 统一 headers
  const headers: HeadersInit = {
    ...(init?.headers || {}),
  };

  const response = await originalFetch(url, { ...init, headers });

  // 响应拦截：统一错误处理
  if (!response.ok) {
    console.error('Fetch error:', response.status, response.statusText);
  }

  return response;
};
