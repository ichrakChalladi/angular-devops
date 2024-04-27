import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from 'src/Models/Bloc';
import { Observable } from 'rxjs';
import { Chambre } from 'src/Models/Chambre';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  afficherblocparidfoyer(idFoyer: number) {
    return this.http.get<any[]>(`${this.baseUrl}/bloc/afficherblocparidfoyer/${idFoyer}`);
  }

  getBlocByChambre(chambre: any): any {
    return this.http.post<Bloc>(`http://localhost:8090/bloc/findBlocByChambre`, chambre);
  }

  getblocs() {
    return this.http.get<any[]>(`${this.baseUrl}/bloc/affichetoutblocs`);
  }

  getblocbyid(idBloc: number) {
    return this.http.get<any[]>(`${this.baseUrl}/bloc/afficherbloc/${idBloc}`);
  }



  deletebloc(idbloc: number) {
    return this.http.delete<any[]>(`${this.baseUrl}/bloc/supp/${idbloc}`);
  }

  addBloc(bloc: Bloc) {
    return this.http.post<any[]>(`${this.baseUrl}/bloc/ajouterbloc`, bloc);
  }

  modifierBloc(bloc: Bloc) {
    return this.http.put<any[]>(`${this.baseUrl}/bloc/Modifierbloc`, bloc);
  }

  affecterchambrebloc(nomBloc: string,idChambre:number) {
    return this.http.put<any[]>(`${this.baseUrl}/bloc/affecterchambrebloc/${nomBloc}`, [idChambre]);
  }

}
