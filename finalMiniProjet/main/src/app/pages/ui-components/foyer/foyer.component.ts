import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';
import { Foyer } from 'src/Models/Foyer';
import { FoyerAffecteBlocComponent } from '../foyer-affect-bloc/foyer-affect-bloc.component';



@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.scss']
})
export class FoyerComponent implements OnInit {


  displayedColumns: string[] = ['nom du Foyer', 'capacite du foyer', 'Taux de capacité du foyer', 'Actions'];
  dataSource: Foyer[] = [];
  filteredFoyers: any[] = [];
  oldResults: any[] = [];
  FoyerSearchTerms = new FormControl('');
  capaciteFoyer !: any;

  constructor(private foyerService: FoyerService, private route: Router,private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.foyerService.getFoyers().subscribe(data => {
      this.dataSource = data;
      this.oldResults = data;
      console.log(data)
    })
  }

  performSearch() {
    // Create a copy of the original reservations
    this.dataSource = [...this.oldResults];
    console.log("esprit - foyer".includes("esprit"));


    // Filter based on "numero chambre" and "nom bloc"
    if (this.FoyerSearchTerms.value !== '') {
      console.log(this.FoyerSearchTerms.value);
      let foyerSearchTerm = this.FoyerSearchTerms.value!.toLowerCase();
      this.dataSource = this.oldResults.filter(foyer =>
        foyer.nomFoyer.toLowerCase().includes(foyerSearchTerm.toString()
        ));
    }

    // Filter based on "capaciteBloc"
    if (this.capaciteFoyer !== null) {
      this.dataSource = this.dataSource.filter(foyer =>
        foyer.capacite>=this.capaciteFoyer[0] && foyer.capacite<=this.capaciteFoyer[1] 
      );
    }
    this.capaciteFoyer=null;
  }

  deleteFoyer(idFoyer: number) {
    if (confirm('Are you sure you want to delete this foyer?')) {
      this.foyerService.deleteFoyer(idFoyer).subscribe(
        {
          next: () => this.dataSource = this.dataSource.filter((u) => u.idFoyer !== idFoyer)
        }
      );
    }
  }

  setCapacite(capacite:any){
    this.capaciteFoyer=capacite; 
  }

  updateFoyer(id: number) {
    this.route.navigate(['main/admin/ui-components/foyer-update-form', id]);
  }




  openDialog(foyer:Foyer): void {
    console.log(foyer);
    this.dialog.open(FoyerAffecteBlocComponent, {
      data: foyer
    });
  }





}
