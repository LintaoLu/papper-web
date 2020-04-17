import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getLatestNews(id:number) {
    return this.http.get('http://localhost:8080/getLatestNews?id=' + id);
  }
}
