import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // url to env vars pls check here https://angular.io/guide/build
  // search/repositories should be constant
  // ?q for query params you can use  HttpParams for more info https://angular.io/api/common/http/HttpParams
  url: string = 'https://api.github.com/search/repositories?q='

  constructor(private http: HttpClient) { }

  getData(repos: string) {
    return this.http.get(this.url + repos)
  }
}
