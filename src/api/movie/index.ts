import { request } from "api/common";
import { Movie } from "types/movie";

export async function getMovies(limit?: number) {
  return request<Movie[]>(
    "/movies",
    limit ? { limit: String(limit) } : undefined
  );
}

export async function getMovie(id: number) {
  return request<Movie>(`/movies/${id}`);
}
