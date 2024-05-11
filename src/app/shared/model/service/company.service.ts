import { Injectable } from '@angular/core';
import { company } from '../entities/company';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'https://6632e432f7d50bbd9b47959d.mockapi.io/create-aspirantes/company';
  constructor(private http: HttpClient) { }

  
  agregarCompany(company: company): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, company);
  }
  
}
