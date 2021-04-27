import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Incident } from './classes/incident';
import { User } from './classes/user';
import { Hello } from './classes/Hello';
import { Incident2 } from './classes/Incident2';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  hello: Hello;
  constructor(private httpclient: HttpClient) { }

  getIncidents(): Observable<any> {
    return this.httpclient.get("localhost:8080/incidents", { responseType: 'json' });
  }

  postIncident(ti: Incident2): Observable<any> {
    this.hello = new Hello("Hallo");//'{ text: "Hallo"}';
    console.log("Post");
    console.log(JSON.stringify(ti));
    return this.httpclient.post("http://localhost:8080/incident", JSON.stringify(ti), { responseType: 'text' as 'json' });
    //return this.httpclient.post("http://localhost:8080/incident", this.hello, { responseType: 'text' as 'json' });
  }

  postUser(us: User): Observable<any> {
    return this.httpclient.post("http://localhost:8080/user", us, { responseType: 'text' as 'json'});
  }

  postRoom(roomNumber: String): Observable<any> {
    return this.httpclient.post("http://localhost:8080/deviceTypes", roomNumber);
  }
}
