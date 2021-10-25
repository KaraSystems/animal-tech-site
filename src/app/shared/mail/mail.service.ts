import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  public sendEmail(name: string, email: string, message: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      'https://formspree.io/f/mzbyqkwl',
      { name: name, replyto: email, message: message },
      { 'headers': headers }
    );
  }

  public sendEmailWithApi(): Observable<any> {
    return this.http.post('https://senju-api.herokuapp.com/sendMail', null);
  }
}
