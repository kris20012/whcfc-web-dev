import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolApplyInfoService {
  private apiUrl = 'http://localhost:8000/api/vol-info'; // Backend URL

  constructor(private http: HttpClient) {}

  sendContactForm(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}
