import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/Models/Chambre';
import { ChambreService } from 'src/app/services/chambre.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-chambre-update-form',
  templateUrl: './chambre-update-form.component.html',
  styleUrls: ['./chambre-update-form.component.scss']
})
export class ChambreUpdateFormComponent {

  chambreForm: FormGroup;
  idChambre: number;
  chambreDetails: any;

  constructor(private formBuilder: FormBuilder, private actroute: ActivatedRoute, private chambreService: ChambreService, private route: Router, private snackBar: SnackBarService) { }

  ngOnInit(): void {

    this.actroute.params.subscribe(params => {
      this.idChambre = params['id']; // Récupération de l'ID du foyer depuis l'URL
      // Utilisez this.foyerId comme nécessaire dans votre composant pour mettre à jour le foyer spécifique.
    });

    this.chambreService.getChambreDetail(this.idChambre).subscribe((data: any) => {
      this.fillChambreDetails(data); // Les détails du foyer sont stockés dans foyerDetails
      console.log(data);
    });

    this.chambreForm = this.formBuilder.group({

      numeroChambre: ['', Validators.required],
      typec: ['', [Validators.required, Validators.min(1)]]
    });

  }

  fillChambreDetails(chambre: Chambre) {
    this.chambreForm.patchValue({

      idChambre: chambre.idChambre,
      numeroChambre: chambre.numeroChambre,
      typec: chambre.typec
    })

  }

  onSubmit() {
    if (this.chambreForm.valid) {
      this.chambreForm.value.idChambre = this.idChambre;
      console.log(this.chambreForm.value);
      this.chambreService.modifierChambre(this.chambreForm.value).subscribe({
        next: () => {
          this.snackBar.successMessage("Chambre modifiée avec succés", "close");
          this.route.navigate(['main/admin/ui-components/chambre'])
        },
        error: (error) => {
          this.snackBar.failMessage("Chambre echoué", "close");
          console.error('Erreur lors de la modification de la chambre:', error);
        }
      })

      // Process the form submission or data here
      console.log(this.chambreForm.value);
      // For example: you might want to send this data to a service or backend endpoint
    } else {
      // Mark fields as touched to trigger validation messages
      this.chambreForm.markAllAsTouched();
    }
  }


}
