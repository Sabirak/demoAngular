import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicefileService {

  private url="localhost:8080/api";

  constructor(private http:HttpClient) { }

  getAllAstrollogers(): Observable<any> {  
    const headr=new HttpHeaders();
    headr.append('Content-Type', 'application/json');
    headr.append('accept', 'application/json');
    headr.append('Access-Control-Allow-Origin', '*');
    headr.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headr.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    return this.http.get(`${this.url}`,{headers: headr });  
  } 
}
