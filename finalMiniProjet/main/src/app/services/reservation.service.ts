import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from 'src/Models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getReservations() {
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservation/getAll`);
  }

  validateReservation(reservationData: Reservation) {
    return this.http.post(`${this.baseUrl}/reservation/validate`, reservationData);
  }

  ajouterReservation(roomNumber: number, userCin: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservation/add/${roomNumber}/${userCin}`, null);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/reservation/delete/${id}`, { responseType: 'text' });
  }


  updateReservation(id: number, body: Reservation) {
    return this.http.put(`${this.baseUrl}/reservation/update/${id}`, { responseType: 'text' });
  }


  getReservationByid(id: number) {
    return this.http.get<Reservation>(`${this.baseUrl}/reservation/getById/${id}`);
  }

  validateReservationByid(idReservation: string) {
    return this.http.put<Reservation>(
      `${this.baseUrl}/reservation/validate?idReservation=${idReservation}`,
      {}
    );
  }

  refuseReservationByid(idReservation: string) {
    return this.http.put<Reservation>(
      `${this.baseUrl}/reservation/refuse?idReservation=${idReservation}`,
      {}
    );
  }



}
