// Central API URL helper - used by api-handler.ts
import API_BASE from './api-config';

export function getApiUrl(endpoint: string): string {
  const base = API_BASE.endsWith('/') ? API_BASE.slice(0, -1) : API_BASE;
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
}

export default API_BASE;
