import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceRequestDTO} from "./Domain/Service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getServices$(): Observable<any> {
    return this.http.get('/api/services/list')
  }

  addService$(serviceRequestDTO: ServiceRequestDTO): Observable<any> {
    return this.http.post('/api/services', serviceRequestDTO);
  }

}
