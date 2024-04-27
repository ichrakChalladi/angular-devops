import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bloc } from 'src/Models/Bloc';
import { Foyer } from 'src/Models/Foyer';
import { BlocService } from 'src/app/services/bloc.service';
import { FoyerService } from 'src/app/services/foyer.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-foyer-affect-bloc',
  templateUrl: './foyer-affect-bloc.component.html',
  styleUrls: ['./foyer-affect-bloc.component.scss']
})
export class FoyerAffecteBlocComponent {

  displayedColumns: string[] = ['nomBloc', 'capaciteBloc', 'actions'];
  dataSource: any;
  currentFoyer: Foyer;
  ListBloc: Bloc[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private serviceFoyer: FoyerService, private blocService: BlocService, private snackBar: SnackBarService) {

  }
  ngOnInit() {

    this.blocService.getblocs().subscribe({
      next: (data: any) => {
        console.log(this.data);
        this.currentFoyer = this.data;
        this.ListBloc = data;
        this.dataSource = data;
      },
      error: (err) => console.log(err)
    })
  }


  alreadyAffecter(blc: Bloc): boolean {
    return this.data.blocs.filter((bloc: Bloc) => bloc.idBloc === blc.idBloc).length === 0;
  }


  affecterBlocAFoyer(idBloc: number, idFoyer: number) {
    this.serviceFoyer.AffecterBlocAFoyer(idBloc, idFoyer).subscribe({
      next: (data) => {
        this.snackBar.successMessage("Bloc affecté avec succés", "close");
        console.log(data);
      },
      error: (err) => {
        this.snackBar.failMessage("Bloc non affecté", "close");
        console.log(err);
      }
    })
  }
}
