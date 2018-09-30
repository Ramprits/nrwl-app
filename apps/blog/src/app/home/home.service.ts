import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HomeModel } from './home';
export const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  async getNews() {
    return await this.http
      .get<HomeModel>(url)
      .toPromise()
      .then(data => {
        return data;
      });
  }
}
