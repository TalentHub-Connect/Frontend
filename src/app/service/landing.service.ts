import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormInfo} from "../model/form-info";

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "*/*"
    })
  };

  constructor(private http: HttpClient) { }

  sendFormInfo(info: FormInfo) : Observable<FormInfo>{
    console.log("SERB: ", info)
    return this.http.post<FormInfo>("https://canelaapigatewayback-production.up.railway.app/form/send",info,this.httpOptions)
  }
}
