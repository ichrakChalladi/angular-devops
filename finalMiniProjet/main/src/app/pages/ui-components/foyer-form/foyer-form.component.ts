import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-foyer-form',
  templateUrl: './foyer-form.component.html',
  styleUrls: ['./foyer-form.component.scss']
})
export class FoyerFormComponent implements OnInit {

  foyerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private foyerService: FoyerService, private route: Router, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.foyerForm = this.formBuilder.group({

      nomFoyer: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]]
    });


  }

  onSubmit() {
    if (this.foyerForm.valid) {
      // Process the form submission or data here
      console.log(this.foyerForm.value);
      this.foyerService.addFoyer(this.foyerForm.value).subscribe({
        next: () => {
          this.snackBar.successMessage("Foyer ajouté avec succés", "close");
          this.route.navigate(['main/admin/ui-components/foyer'])
        },
        error: (error) => {
          this.snackBar.failMessage("Foyer echoué", "close");
          console.error('Erreur lors de l\'ajout du foyer:', error);
        }
      })


    } else {
      // Mark fields as touched to trigger validation messages
      this.foyerForm.markAllAsTouched();
    }
  }

}
