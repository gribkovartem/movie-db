import { API_HOST, BASE_URL } from "./config";

export async function request<T>(
  path: string,
  queryParams?: Record<string, string>
) {
  const params = new URLSearchParams(queryParams).toString();
  const response = await fetch(`${API_HOST}${BASE_URL}${path}?${params}`);

  if (response.ok) {
    return (await response.json()) as Promise<T>;
  } else {
    throw new Error(`Failed with status: ${response.status}`);
  }
}
