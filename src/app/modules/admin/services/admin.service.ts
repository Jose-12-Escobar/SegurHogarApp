import { Injectable } from '@angular/core';
import { Client } from '../models/client-model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl !: string;

  constructor(private http: HttpClient) {
  this.baseUrl = 'http://localhost:8070/client'
   }

   getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`)
   }

   getClientByDni(dni: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/dni/${dni}`)
   }

   getClientByEmail(mail: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/mail/${mail}`)
   }

   getClientByPhone(telefono: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/telefono/${telefono}`)
   }

   getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`)
   }

   setNewClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
   }

}



