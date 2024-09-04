import { API_HOST, BASE_URL } from "./config";

export async function request<T>(
  path: string,
  queryParams?: Record<string, string>
) {
  const params = new URLSearchParams(queryParams).toString();
  const response = await fetch(
    params
      ? `${API_HOST}${BASE_URL}${path}?${params}`
      : `${API_HOST}${BASE_URL}${path}`
  );

  if (response.ok) {
    return (await response.json()) as Promise<T>;
  } else {
    throw new Error(
      `Request to ${response.url} failed with status: ${response.status}`
    );
  }
}
