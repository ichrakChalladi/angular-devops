import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/Models/Bloc';
import { BlocService } from 'src/app/services/bloc.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-bloc-update-form',
  templateUrl: './bloc-update-form.component.html',
  styleUrls: ['./bloc-update-form.component.scss']
})
export class BlocUpdateFormComponent {

  blocForm: FormGroup;
  idBloc: number;
  blocDetails: any;

  constructor(private formBuilder: FormBuilder, private actroute: ActivatedRoute, private blocService: BlocService, private route: Router,private snackBar:SnackBarService) { }

  ngOnInit(): void {

    this.actroute.params.subscribe(params => {
      this.idBloc = params['id']; // Récupération de l'ID du foyer depuis l'URL
      // Utilisez this.foyerId comme nécessaire dans votre composant pour mettre à jour le foyer spécifique.
    });

    this.blocService.getblocbyid(this.idBloc).subscribe((data: any) => {
      this.fillBlocDetails(data); // Les détails du foyer sont stockés dans foyerDetails
      console.log(data);
    });

    this.blocForm = this.formBuilder.group({

      nomBloc: ['', Validators.required],
      capaciteBloc: ['', [Validators.required, Validators.min(1)]]
    });





  }

  fillBlocDetails(bloc: Bloc) {
    this.blocForm.patchValue({


      nomBloc: bloc.nomBloc,
      capaciteBloc: bloc.capaciteBloc
    })
  }







  onSubmit() {
    if (this.blocForm.valid) {
      this.blocForm.value.idBloc = this.idBloc;
      console.log(this.blocForm.value);
      this.blocService.modifierBloc(this.blocForm.value).subscribe({
        next: () => {
          this.snackBar.successMessage("Bloc modifié avec succés", "close");
          this.route.navigate(['main/admin/ui-components/bloc'])
        },
        error: (error) => {
          this.snackBar.failMessage("Bloc echoué", "close");
          console.error('Erreur lors de la modification du bloc:', error);
        }
      })

      // Process the form submission or data here
      console.log(this.blocForm.value);
      // For example: you might want to send this data to a service or backend endpoint
    } else {
      // Mark fields as touched to trigger validation messages
      this.blocForm.markAllAsTouched();
    }
  }

}
