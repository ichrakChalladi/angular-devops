import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Chambre } from 'src/Models/Chambre';
import { TypeChambre } from 'src/Models/TypeChambre';
import { ChambreService } from 'src/app/services/chambre.service';
import { AffecterChambreABlocComponent } from '../affecter-chambre-abloc/affecter-chambre-abloc.component';
import { MatDialog } from '@angular/material/dialog';
import { Bloc } from 'src/Models/Bloc';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit {
  displayedColumns: string[] = ['numero de la chambre', 'type du chambre', 'actions'];
  dataSource: Chambre[] = [];
  filteredChambres: any[] = [];
  oldResults: any[] = [];
  chambreSearchTerms = new FormControl('');
  typec !: any;


  constructor(private chambreService: ChambreService, private route: Router ,private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.chambreService.getChambres().subscribe(data => {
      this.dataSource = data;
      this.oldResults = data;
      console.log(data)
    })
  }

  /*

  getEnumLabel(value: string): string {
    return TypeChambre[value as keyof typeof TypeChambre];
  } */


  performSearch() {
    // Create a copy of the original reservations
    this.dataSource = [...this.oldResults];
    console.log("esprit - foyer".includes("esprit"));


    // Filter based on "numero chambre" and "nom bloc"
    if (this.chambreSearchTerms.value !== '') {
      console.log(this.chambreSearchTerms.value);
      let chambreSearchTerms = this.chambreSearchTerms.value;
      this.dataSource = this.oldResults.filter(chambre =>
        chambre.numeroChambre.toString() == chambreSearchTerms
      );
    }

    if (this.typec !== '') {
      this.dataSource = this.oldResults.filter(chambre =>
        chambre.typec.toLowerCase()==this.typec.toLowerCase()
      );
    }

    this.typec='';
    // Filter based on "capaciteBloc"
    // if (this.capaciteFoyer !== null) {
    //   this.dataSource = this.dataSource.filter(foyer =>
    //     foyer.capacite>=this.capaciteFoyer[0] && foyer.capacite<=this.capaciteFoyer[1] 
    //   );
    // }
    // this.capaciteFoyer=null;
  }


  deleteChambre(idChambre: number) {
    if (confirm('Are you sure you want to delete this chambre?')) {
      this.chambreService.deleteChambre(idChambre).subscribe(
        {
          next: () => this.dataSource = this.dataSource.filter((u) => u.idChambre !== idChambre)
        }
      );
    }
  }



  updateChambre(id: number) {
    this.route.navigate(['main/admin/ui-components/chambre-update-form', id]);
  }


  setTypeChambre(typeChambre: any) {
    this.typec = typeChambre;
  }

  openDialog(bloc:Bloc): void {
    console.log(bloc);
    this.dialog.open(AffecterChambreABlocComponent  , {
      data: bloc
    });
  }

}
