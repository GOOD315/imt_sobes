import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = 'https://randomuser.me/api/';

  submitForm(form: FormGroup) {
    const body = form.value;

    // имитация post запроса
    return of([]);

    // return this.http.post(this.url, body);
  }

  getUserData() {
    return this.http.get(this.url);
  }
}
