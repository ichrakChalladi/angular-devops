import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from 'src/Models/Chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl = 'http://localhost:8090';


  constructor(private http : HttpClient) { }

  getChambres() {
    return this.http.get<any[]>(`${this.baseUrl}/chambre/affichetoutchambres`);
  }

  getChambreDetail(idChambre : number){
    return this.http.get<any[]>(`${this.baseUrl}/chambre/afficherchambre/${idChambre}`);
  }

  deleteChambre(idChambre : number){
    return this.http.delete<any[]>(`${this.baseUrl}/chambre/supprimerchambre/${idChambre}`);
  }

  addChambre(chambre : Chambre){
      return this.http.post<any[]>(`${this.baseUrl}/chambre/ajouterchambre`,chambre);
  }

  modifierChambre(chambre  : Chambre){
       return this.http.put<any[]>(`${this.baseUrl}/chambre/modifierchambre`,chambre);
  }

  getChambresByIdBloc(idBloc : number){
    return this.http.get<any[]>(`${this.baseUrl}/chambre/afficherchambresparidbloc/${idBloc}`);
  }
}
