import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ExampleService {
  constructor(private http: HttpClient) {}

  getexamples() {
    return this.http.get("/api/example/get", { withCredentials: true });
  }

  createexample(name: string, description: string, releasedate: string) {
    return this.http.post('/api/example/create', { name: name, description: description }, { withCredentials: true });
  }
}
