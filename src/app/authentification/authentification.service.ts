import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';

const API_URL: string = "http://localhost:4200/api/";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public loggedin: boolean = false;

  constructor(private http: HttpClient) {
    this.checklogin();
  }

  checklogin() {
    this.http.request(new HttpRequest("GET", API_URL + 'welcome/checkloggedin', {withCredentials: true})).subscribe(data => this.loggedin = (data as any).success);
  }

  login(email: string, password: string, rememberme: boolean){
    this.http.request(new HttpRequest("POST", API_URL + 'welcome/login', { username: email, password: password, remember: rememberme }, {withCredentials: true})).subscribe(data => this.loggedin = (data as any).success);
  }
}
