import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceRequestDTO} from "./Domain/Service";
import {InvoiceRequestDTO} from "./Domain/Invoice";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  listInvoices(): Observable<any> {
    return this.http.get('/api/invoices/list')
  }

  addInvoice$(invoiceRequestDTO: InvoiceRequestDTO): Observable<any> {
    return this.http.post('/api/invoices', invoiceRequestDTO);
  }

  getServices$(): Observable<any> {
    return this.http.get('/api/services/list')
  }

  addService$(serviceRequestDTO: ServiceRequestDTO): Observable<any> {
    return this.http.post('/api/services', serviceRequestDTO);
  }

}
