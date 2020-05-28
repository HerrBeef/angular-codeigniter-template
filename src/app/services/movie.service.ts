import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getmovies() {
    return this.http.get("/api/movies/get", { withCredentials: true });
  }
}
