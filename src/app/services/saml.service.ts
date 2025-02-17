import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Saml} from '../models/saml';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamlService {

  constructor(private readonly http: HttpClient) {}
  public  saml(saml: Saml): Observable<object> {
    console.log(saml);
    return this.http.post("http://localhost:4000/saml-data", JSON.stringify(saml))
  }
}
