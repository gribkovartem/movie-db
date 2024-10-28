import { request } from "api/common";
import { Movie } from "types/movie";
import movies from "./movies.json";

export async function getMovies(limit?: number) {
  return Promise.resolve(limit ? movies.slice(0, limit) : movies);
  // return request<Movie[]>(
  //   "/movies",
  //   limit ? { limit: String(limit) } : undefined
  // );
}

export async function getMovie(id: number) {
  return Promise.resolve(movies.find((m) => m.id === id));
  // return request<Movie>(`/movies/${id}`);
}
