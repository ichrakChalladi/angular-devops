import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from 'src/Models/Foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http : HttpClient) { }


  getFoyers() {
    return this.http.get<any[]>(`${this.baseUrl}/foyer/affichertousfoyer`);
  }

  getFoyerDetail(idFoyer : number){
    return this.http.get<any[]>(`${this.baseUrl}/foyer/afficherfoyerparid/${idFoyer}`);
  }

  deleteFoyer(idFoyer : number){
    return this.http.delete<any[]>(`${this.baseUrl}/foyer/supprimerfoyer/${idFoyer}`);
  }

  addFoyer(foyer : Foyer){
      return this.http.post<any[]>(`${this.baseUrl}/foyer/ajouterfoyer`,foyer);
  }

  modifierFoyer(foyer  : Foyer){
       return this.http.put<any[]>(`${this.baseUrl}/foyer/modifierfoyer`,foyer);
  }

  //incrementlike

  incrmentFoyerLike(nomFoyer : String){
    return this.http.put<any[]>(`${this.baseUrl}/foyer/incrementlike/${nomFoyer}`,{});
  }

  decrementFoyerLike(nomFoyer : String){
    return this.http.put<any[]>(`${this.baseUrl}/foyer/decrementlike/${nomFoyer}`,{});
  }

  getFoyerByIdUnivers(idUniversite ?: number){
    return this.http.get<Foyer>(`${this.baseUrl}/foyer/getfoyersbyiduniversite/${idUniversite}`);
  }

  getIdFoyerByIdUniversite(idUniversite : number){
       return this.http.get<number>(`${this.baseUrl}/foyer/getidfoyerbyiduniversite/${idUniversite}`);
       
  }

  AffecterBlocAFoyer(idBloc : number,idFoyer:number){
    return this.http.put<any[]>(`${this.baseUrl}/foyer/affecterblocafoyer/${idBloc}/${idFoyer}`,{});
  }



}
