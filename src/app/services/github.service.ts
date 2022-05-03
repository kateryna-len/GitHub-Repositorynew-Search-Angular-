import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url: string = 'https://api.github.com/search/repositories?q='

  constructor(private http: HttpClient) { }

  getData(repos: string) {
    return this.http.get(this.url + repos)
  }
}
