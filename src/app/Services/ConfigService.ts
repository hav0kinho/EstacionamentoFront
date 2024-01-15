import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ApiFetchService {
  apiRoute = "https://localhost:7089/api";

  http = inject(HttpClient);

  registrate(user: any){
    this.http.post(`${this.apiRoute}/auth/registrar`, user).subscribe((res) => {
      alert("Resposta: " + res);
    })
  }

  login(user: any){
    this.http.post(`${this.apiRoute}/auth/login`, user, {responseType: "text"}).subscribe((res) => {
      alert("Resposta: " + res);
    })
  }
}
